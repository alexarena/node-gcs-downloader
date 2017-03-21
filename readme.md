# node-gcs-downloader
A simple Node script to download every file in a Google Cloud Storage Bucket.


## Install

`npm install gcs-downloader`

## Usage

1. Get a key.json file from Google and save it into the `gcs-downloader` directory.
2. Set environment variables for `PROJECT_ID` and `PROJECT_NAME`. These can be set in a `.env` file, a sample of which is included as `.env_sample`.
3. Run the script with `npm start`. All files in the specified bucket will be downloaded to the `./output` directory. Downloads happen recursively, one by one, so **this should only be used on your local machine for tasks like a quick one time backup**.
