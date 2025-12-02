#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import datos from "../utils/datos.json"
import { OtrorepoStack } from '../lib/otrorepo-stack';

const app = new cdk.App();
new OtrorepoStack(app, 'OtrorepoStack', {
  env: {
    account: datos.accountId,
    region: datos.region,
  }
});

app.synth();