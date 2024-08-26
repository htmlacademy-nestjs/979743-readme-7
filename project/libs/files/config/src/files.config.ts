import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_PORT = 3000;
const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

type Environment = (typeof ENVIRONMENTS)[number];

export interface FilesConfig {
  environment: string;
  port: number;
  uploadDirectory: string;
}

const validationSchema = Joi.object({
  environment: Joi.string()
    .valid(...ENVIRONMENTS)
    .required(),
  port: Joi.number().port().default(DEFAULT_PORT),
  uploadDirectory: Joi.string().required(),
});

function validateConfig(config: FilesConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Files Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): FilesConfig {
  const config: FilesConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.MONGO_PORT || `${DEFAULT_PORT}`, 10),
    uploadDirectory: process.env.UPLOAD_DIRECTORY_PATH,
  };
  console.log(config);
  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
