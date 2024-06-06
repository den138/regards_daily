import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }

  lambda = new cdk.aws_lambda.Function(this, 'SendRegards', {
    runtime: cdk.aws_lambda.Runtime.PROVIDED_AL2023,
    handler: 'index.handler',
    code: cdk.aws_lambda.Code.fromAsset('lambda'),
  });
}
