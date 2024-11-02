export interface EnvConfig {
  getAppPort(): number;
  getAppHost(): string;
  getNodeEnv(): string;
}
