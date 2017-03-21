'use strict'

//Download All Files in a Google Cloud Storage Bucket

let dotenv = require('dotenv').config()
let fs = require('fs')
let https = require('https')

let gcs = require('@google-cloud/storage')({
  projectId: process.env.PROJECT_ID,
  keyFilename: 'key.json'
})

let files = null
let bucket = gcs.bucket(process.env.BUCKET_NAME)

bucket.getFiles((err, res)=> {
  files = res
  download(0)
})

function download(index){
  let file = files[index]
  let out = fs.createWriteStream('./output/' + file.name)

  https.get(file.metadata.mediaLink, (res,err) =>{
    res.pipe(out)
    res.on('end', ()=>{
      console.log('Downloaded: ' + file.name)
      index++
      if(index< files.length){
        download(index)
      }
    })
  })
}
