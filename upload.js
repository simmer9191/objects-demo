const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
	accessKeyId: 'EDm1qvE2H2bZB7qrvZt_bAXyTfgeo14Q',
	secretAccessKey: '0-VTyEgqYSu4dalXdIAWvliaXPE0_zYC',
	endpoint: 'http://10.38.20.21',
	s3ForcePathStyle: true,
	signatureVersion: 'v4'
});

const uploadFile = (fileName) => {
	const fileContent = fs.readFileSync(fileName);
	const BUCKET_NAME  = 'bucket01';

	const params = {
		Bucket: BUCKET_NAME,
		Key: 'cat.jpg',
		Body: fileContent
	};

	s3.upload(params, function(err, data) {
		if (err) {
			throw err;
		}
		console.log('File uploaded successfully. ${data.Location}');
	});
};

uploadFile('cat.jpg');
