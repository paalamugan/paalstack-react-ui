import type { ILogger } from './ILogger';

import { ConsoleLogger } from './ConsoleLogger';
import { LogEnvironment } from './ILogger';
import { MockLogger } from './MockLogger';

const ProdConsoleLogger = ConsoleLogger;

const loggers = {
  [LogEnvironment.Dev]: ConsoleLogger,
  [LogEnvironment.Prod]: ProdConsoleLogger,
  [LogEnvironment.Test]: MockLogger,
};

/**
 * Detects the current runtime environment in a way that is compatible with
 * both server-side (Node.js / Next.js) and client-side (Vite / browser) rendering.
 *
 * Priority: process.env.NODE_ENV (Node.js / Next.js / CRA / Webpack) →
 *           import.meta.env (Vite) → fallback to 'production'.
 */
function detectEnv(): 'test' | 'development' | 'production' {
  // Node.js / Next.js / Webpack / CRA
  if (typeof process !== 'undefined' && process.env?.NODE_ENV) {
    const env = process.env.NODE_ENV;
    if (env === 'test') return 'test';
    if (env === 'development') return 'development';
    return 'production';
  }

  // Vite (import.meta.env may be undefined in Node.js, so use optional chaining)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viteEnv = (typeof import.meta !== 'undefined' ? (import.meta as any).env : undefined) as
    | Record<string, unknown>
    | undefined;
  if (viteEnv?.TEST || viteEnv?.MODE === 'test') return 'test';
  if (viteEnv?.DEV || viteEnv?.MODE === 'development') return 'development';

  return 'production';
}

class Logger {
  private _client: ILogger | undefined;

  constructor() {
    this.init();
  }

  log(...args: Parameters<ILogger['log']>) {
    this.getClient().log(...args);
  }

  debug(...args: Parameters<ILogger['debug']>) {
    this.getClient().debug(...args);
  }

  info(...args: Parameters<ILogger['info']>) {
    this.getClient().info(...args);
  }

  warn(...args: Parameters<ILogger['warn']>) {
    this.getClient().warn(...args);
  }

  error(...args: Parameters<ILogger['error']>) {
    this.getClient().error(...args);
  }

  private getClient(): ILogger {
    if (!this._client) {
      this.init();
    }

    return this._client!;
  }

  private init() {
    if (this._client === undefined) {
      const env = detectEnv();

      if (env === 'test') {
        return (this._client = new loggers[LogEnvironment.Test]());
      }

      if (env === 'development') {
        return (this._client = new loggers[LogEnvironment.Dev]());
      }

      this._client = new loggers[LogEnvironment.Prod]();
    }
  }
}

export const logger = new Logger();
