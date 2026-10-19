package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

const testRequestID = "0f8fad5b-d9cb-469f-a165-70867728950e"

func TestGetUploadAccess(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost || r.URL.Path != "/support-data/"+testRequestID+"/upload/token" {
			http.NotFound(w, r)
			return
		}
		w.Write([]byte(`{"AccessKeyId": "ASIAEXAMPLE", "SecretAccessKey": "secret", "SessionToken": "session",
			"Expiration": "2026-10-19T21:00:00.000Z", "Region": "us-east-1", "Url": "s3://bucket/folder"}`))
	}))
	defer server.Close()

	service := &UploadService{}
	if err := service.GetUploadAccess(server.URL + "/support-data/" + testRequestID); err != nil {
		t.Fatal(err)
	}
	if service.token == nil || service.token.SecretAccessKey != "secret" {
		t.Error("the upload token was not kept for the upload")
	}

	if err := service.GetUploadAccess(server.URL + "/support-data/unknown"); err == nil {
		t.Error("expected an error for an unknown support request")
	}
}
