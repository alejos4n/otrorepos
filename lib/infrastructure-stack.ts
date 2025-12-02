// lib/infrastructure-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { RemovalPolicy } from 'aws-cdk-lib';

interface InfrastructureProps extends cdk.StackProps {
  stageName: string;
}

export class InfrastructureStack extends cdk.Stack {
  public readonly dataBucket: Bucket; // 👈 Exportamos el Bucket para otros Stacks

  constructor(scope: Construct, id: string, props: InfrastructureProps) {
    super(scope, id, props);

    this.dataBucket = new Bucket(this, 'DataBucket', {
      bucketName: `bck-infra-${props.stageName.toLowerCase()}-data`,
      removalPolicy: RemovalPolicy.DESTROY, 
      encryption: BucketEncryption.S3_MANAGED,
    });
  }
}