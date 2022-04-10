import { DynamoDB } from 'aws-sdk'
const IS_OFFLINE = process.env.IS_OFFLINE
let clientDb
if (IS_OFFLINE === 'true') {
	clientDb = new DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: 'http://localhost:8000'
	})
	console.log(clientDb)
} else {
	clientDb = new DynamoDB.DocumentClient()
}

export default clientDb