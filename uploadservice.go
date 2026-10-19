package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"path"
	"time"
)

var httpClient = &http.Client{Timeout: 30 * time.Second}

// UploadToken is the temporary AWS access that Scriptoria gives for uploading support data.
type UploadToken struct {
	AccessKeyID     string    `json:"AccessKeyId"`
	SecretAccessKey string    `json:"SecretAccessKey"`
	SessionToken    string    `json:"SessionToken"`
	Expiration      time.Time `json:"Expiration"`
	Region          string    `json:"Region"`
	// URL is the s3://bucket/folder that the token can upload to.
	URL string `json:"Url"`
}

// UploadService gets access to upload support data to the support system.
type UploadService struct {
	// token is kept here for the upload, so the credentials never reach the frontend.
	token *UploadToken
}

// GetUploadAccess asks Scriptoria for a token to upload to the support request
// that uploadURL links to, e.g. https://app.scriptoria.io/support-data/<id>.
func (s *UploadService) GetUploadAccess(uploadURL string) error {
	u, err := url.Parse(uploadURL)
	if err != nil || u.Host == "" {
		return fmt.Errorf("%q is not a valid upload location", uploadURL)
	}
	tokenURL := u.Scheme + "://" + u.Host + "/support-data/" + path.Base(u.Path) + "/upload/token"

	res, err := httpClient.Post(tokenURL, "application/json", nil)
	if err != nil {
		return fmt.Errorf("could not reach the support system: %w", err)
	}
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		return fmt.Errorf("the support system did not give access to upload (%s)", res.Status)
	}

	var token UploadToken
	if err := json.NewDecoder(res.Body).Decode(&token); err != nil {
		return fmt.Errorf("the support system sent an invalid upload token: %w", err)
	}
	s.token = &token
	return nil
}
