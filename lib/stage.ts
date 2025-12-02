import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { MyLambdaStack } from './lambda-stack';
import { InfrastructureStack } from "./infrastructure-stack";

export class MyPipelineAppStage extends cdk.Stage {
    
    constructor(scope: Construct, stageName: string, props?: cdk.StageProps) {
      super(scope, stageName, props);
  
      const lambdaStack = new MyLambdaStack(this, 'LambdaStack', stageName);      
      const infraStack = new InfrastructureStack(this, 'InfraStack', {
        stageName: stageName});
    }
}