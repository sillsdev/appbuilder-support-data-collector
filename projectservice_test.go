package main

import (
	"os"
	"path/filepath"
	"testing"
	"time"
)

func TestGetProjectInfo(t *testing.T) {
	folder := filepath.Join(t.TempDir(), "test")
	if err := os.Mkdir(folder, 0o755); err != nil {
		t.Fatal(err)
	}
	appDef := filepath.Join(folder, "test.appDef")
	if err := os.WriteFile(appDef, []byte("<app-definition/>"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.MkdirAll(filepath.Join(folder, "test_data"), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.MkdirAll(filepath.Join(folder, "another_project_data"), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(folder, "test_data", "book.usfm"), make([]byte, 1000), 0o644); err != nil {
		t.Fatal(err)
	}
	modified := time.Date(2026, 10, 2, 9, 20, 21, 0, time.UTC)
	if err := os.Chtimes(appDef, modified, modified); err != nil {
		t.Fatal(err)
	}

	info, err := (&ProjectService{}).GetProjectInfo(folder)
	if err != nil {
		t.Fatal(err)
	}

	if info.Name != "test" {
		t.Errorf("Name = %q, want %q", info.Name, "test")
	}
	if info.AppDefFileName != "test.appDef" {
		t.Errorf("AppDefFileName = %q, want %q", info.AppDefFileName, "test.appDef")
	}
	if info.ContentFolderName != "test_data" {
		t.Errorf("ContentFolderName = %q, want %q", info.ContentFolderName, "test_data")
	}
	if info.LastModified != modified.UnixMilli() {
		t.Errorf("LastModified = %d, want %d", info.LastModified, modified.UnixMilli())
	}
	if want := int64(len("<app-definition/>") + 1000); info.FolderSize != want {
		t.Errorf("FolderSize = %d, want %d", info.FolderSize, want)
	}
}

func TestGetProjectInfoDoesNotUseUnrelatedContentFolder(t *testing.T) {
	folder := filepath.Join(t.TempDir(), "test")
	if err := os.Mkdir(folder, 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(folder, "test.appDef"), []byte("<app-definition/>"), 0o644); err != nil {
		t.Fatal(err)
	}
	for _, name := range []string{"another_data", "test_project_data", "Test_data"} {
		if err := os.Mkdir(filepath.Join(folder, name), 0o755); err != nil {
			t.Fatal(err)
		}
	}

	info, err := (&ProjectService{}).GetProjectInfo(folder)
	if err != nil {
		t.Fatal(err)
	}
	if info.ContentFolderName != "" {
		t.Errorf("ContentFolderName = %q, want empty when test_data is missing", info.ContentFolderName)
	}
}

func TestGetProjectInfoUsesProjectFolderName(t *testing.T) {
	folder := filepath.Join(t.TempDir(), "selected")
	if err := os.Mkdir(folder, 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(folder, "selected.appDef"), []byte("<app-definition/>"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.Mkdir(filepath.Join(folder, "selected_data"), 0o755); err != nil {
		t.Fatal(err)
	}

	info, err := (&ProjectService{}).GetProjectInfo(folder)
	if err != nil {
		t.Fatal(err)
	}
	if info.Name != "selected" || info.AppDefFileName != "selected.appDef" || info.ContentFolderName != "selected_data" {
		t.Errorf("GetProjectInfo() = (%q, %q, %q), want (%q, %q, %q)",
			info.Name, info.AppDefFileName, info.ContentFolderName,
			"selected", "selected.appDef", "selected_data")
	}
}

func TestGetProjectInfoRejectsDirectory(t *testing.T) {
	folder := filepath.Join(t.TempDir(), "test")
	if err := os.Mkdir(folder, 0o755); err != nil {
		t.Fatal(err)
	}
	if _, err := (&ProjectService{}).GetProjectInfo(folder); err == nil {
		t.Error("expected an error when the project definition file is missing")
	}
}

func TestGetStartupFolder(t *testing.T) {
	folder := filepath.Join(t.TempDir(), "test")
	service := &ProjectService{projectFolder: folder}
	if got := service.GetStartupFolder(); got != folder {
		t.Errorf("GetStartupFolder() = %q, want %q", got, folder)
	}
}
