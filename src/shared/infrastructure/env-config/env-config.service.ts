import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    const propertyPath = 'PORT';
    return Number(this.configService.get<number>(propertyPath));
  }

  getNodeEnv(): string {
    const propertyPath = 'NODE_ENV';
    return this.configService.get<string>(propertyPath);
  }
}
