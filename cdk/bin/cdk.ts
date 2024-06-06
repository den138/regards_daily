#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
new CdkStack(app, 'RegardsStack', {
  env: { account: process.env.CDK_ACCOUNT, region: process.env.CDK_REGION },
});
