package main

import (
	"errors"
	"io/fs"
	"os"
	"path/filepath"
)

// ProjectInfo describes the App Builder project whose support data will be uploaded.
type ProjectInfo struct {
	Name              string `json:"name"`
	AppDefFileName    string `json:"appDefFileName"`
	ContentFolderName string `json:"contentFolderName"`
	// Folder is the absolute path of the project folder.
	Folder string `json:"folder"`
	// LastModified is the modification time of <name>.appDef, in Unix milliseconds.
	LastModified int64 `json:"lastModified"`
	// FolderSize is the total size in bytes of all the files in Folder.
	FolderSize int64 `json:"folderSize"`
}

// ProjectService gives the frontend information about the project being uploaded.
type ProjectService struct {
	// projectFolder is the project folder passed on the command line, if any.
	projectFolder string
}

// GetStartupFolder returns the project folder passed on the command line,
// or an empty string if none was given.
func (p *ProjectService) GetStartupFolder() string {
	return p.projectFolder
}

// GetProjectInfo finds <folder-name>.appDef and <folder-name>_data in folder.
func (p *ProjectService) GetProjectInfo(folder string) (ProjectInfo, error) {
	folder, err := filepath.Abs(folder)
	if err != nil {
		return ProjectInfo{}, err
	}

	name := filepath.Base(folder)
	appDefFileName := name + ".appDef"
	appDefPath := filepath.Join(folder, appDefFileName)
	appDef, err := os.Stat(appDefPath)
	if err != nil {
		if os.IsNotExist(err) {
			return ProjectInfo{}, errors.New("no " + appDefFileName + " file found in " + folder)
		}
		return ProjectInfo{}, err
	}
	if !appDef.Mode().IsRegular() {
		return ProjectInfo{}, errors.New("project definition is not a file: " + appDefPath)
	}

	contentFolderName, err := findContentFolderName(folder, name)
	if err != nil {
		return ProjectInfo{}, err
	}

	var size int64
	err = filepath.WalkDir(folder, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.Type().IsRegular() {
			info, err := d.Info()
			if err != nil {
				return err
			}
			size += info.Size()
		}
		return nil
	})
	if err != nil {
		return ProjectInfo{}, err
	}

	return ProjectInfo{
		Name:              name,
		AppDefFileName:    appDefFileName,
		ContentFolderName: contentFolderName,
		Folder:            folder,
		LastModified:      appDef.ModTime().UnixMilli(),
		FolderSize:        size,
	}, nil
}

func findContentFolderName(folder, projectName string) (string, error) {
	entries, err := os.ReadDir(folder)
	if err != nil {
		return "", err
	}

	expectedName := projectName + "_data"
	for _, entry := range entries {
		if entry.IsDir() && entry.Name() == expectedName {
			return entry.Name(), nil
		}
	}
	return "", nil
}
