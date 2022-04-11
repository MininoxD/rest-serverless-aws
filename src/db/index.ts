import { DynamoDB } from 'aws-sdk'
const IS_OFFLINE = process.env.IS_OFFLINE
let clientDb:DynamoDB.DocumentClient
if (IS_OFFLINE === 'true') {
	clientDb = new DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: 'http://localhost:8000'
	})
} else {
	clientDb = new DynamoDB.DocumentClient()
}

export default clientDb