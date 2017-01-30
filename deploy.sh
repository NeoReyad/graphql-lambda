#!/bin/sh
aws --profile ottolearn cloudformation package --template-file api-template.yaml --output-template-file output.yaml --s3-bucket graphqlservertest2
aws --profile ottolearn cloudformation deploy --template-file output.yaml --stack-name prod --capabilities CAPABILITY_IAM
