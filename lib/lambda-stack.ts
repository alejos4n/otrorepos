import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, InlineCode, Runtime, Code} from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3'; // 👈 Importamos Bucket S3
import { RemovalPolicy } from 'aws-cdk-lib'; // 👈 Importamos RemovalPolicy

export class MyLambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, stageName: string, props?: cdk.StackProps) {
      super(scope, id, props);

      // 1. Crear el Bucket S3
      const myBucket = new Bucket(this, 'MyProjectBucket', {
        bucketName: `alejosan-data-${stageName.toLowerCase()}-bucket`,
        versioned: true,
        removalPolicy: RemovalPolicy.DESTROY, // Solo para entornos de prueba/dev
        encryption: BucketEncryption.S3_MANAGED,
      });

      new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_20_X, //using node for this, but can easily use python or other
        handler: 'handler.handler',
        code: Code.fromAsset(path.join(__dirname, 'lambda')), //resolving to ./lambda directory
        environment: { "stageName": stageName } //inputting stagename
      });
    }
    
    
}