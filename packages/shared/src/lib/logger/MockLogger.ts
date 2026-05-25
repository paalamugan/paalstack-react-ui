import type { ILogger, LogLevel, LogParams } from './ILogger';

export type SpyFn = {
  (...args: unknown[]): void;
  calls: unknown[][];
  reset(): void;
};

/**
 * Creates a lightweight spy function that records calls without depending on
 * Jest or Vitest globals. Works in any environment including SSR / Node.js.
 * In test environments Jest/Vitest will automatically replace this with their
 * own mock when using `jest.spyOn` / `vi.spyOn`.
 */
function createSpy(): SpyFn {
  const calls: unknown[][] = [];
  const spy = (...args: unknown[]) => {
    calls.push(args);
  };
  spy.calls = calls;
  spy.reset = () => {
    calls.length = 0;
  };
  return spy;
}

export class MockLogger implements ILogger {
  readonly name = 'MockLogger';
  readonly log: SpyFn = createSpy();

  debug(message: string, params?: LogParams) {
    this.log('DEBUG', message, params);
  }

  info(message: string, params?: LogParams) {
    this.log('INFO', message, params);
  }

  warn(message: string, params?: LogParams) {
    this.log('WARN', message, params);
  }

  error(message: string, params?: LogParams) {
    this.log('ERROR', message, params);
  }

  /** Convenience: assert on recorded calls in tests. */
  get calls(): [LogLevel, string, LogParams?][] {
    return this.log.calls as [LogLevel, string, LogParams?][];
  }

  reset() {
    this.log.reset();
  }
}
