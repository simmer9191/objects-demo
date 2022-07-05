const AWS = require('aws-sdk');

const ID = 'EDm1qvE2H2bZB7qrvZt_bAXyTfgeo14Q';
const SECRET = '0-VTyEgqYSu4dalXdIAWvliaXPE0_zYC';

const BUCKET_NAME = 'bucket01';

const s3 = new AWS.S3({
	accessKeyId: ID,
	secretAccessKey: SECRET,
	endpoint: 'http://10.38.20.21',
	s3ForcePathStyle: true,
	signatureVersion: 'v4'
});

const params = {
	Bucket: BUCKET_NAME,
	CreateBucketConfiguration: {
		LocationConstraint: "us-east-1"
	}
};

s3.createBucket(params, function(err, data) {
	if (err) console.log(err, err.stack);
	else console.log('Bucket Created Successfully', data.Location);
});
