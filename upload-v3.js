const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

// Create an S3 client (uses IAM role on EC2 automatically)
const s3 = new S3Client({ region: 'us-east-2' });

const filePath = 'C:/cloudserver/server.js'; // local file
const fileStream = fs.createReadStream(filePath);
const fileName = 'hello-v3.txt'; // filename in S3

const uploadParams = {
  Bucket: 'cloudsuite-filesone',     // your bucket
  Key: fileName,
  Body: fileStream,
};

const uploadFile = async () => {
  try {
    const command = new PutObjectCommand(uploadParams);
    const response = await s3.send(command);
    console.log(`✅ File uploaded using SDK v3: ${fileName}`);
  } catch (err) {
    console.error('❌ Upload failed:', err);
  }
};

uploadFile();
