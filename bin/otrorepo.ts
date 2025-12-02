#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
//import datos from "../utils/datos.json"
import { OtrorepoStack } from '../lib/otrorepo-stack';

const app = new cdk.App();
new OtrorepoStack(app, 'OtrorepoStack', {
  env: {
    account: '210615636037',
    region: 'us-east-2',
  }
});

app.synth();