import { Injectable } from '@angular/core';

/**
 * Service to record navigation and sidenav events for visual logging.
 */
@Injectable({ providedIn: 'root' })
export class NavLogService {
  /** Collected log entries */
  public logs: string[] = [];

  /** Add a log entry */
  add(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`${timestamp} - ${message}`);
  }

  /** Clear all logs */
  clear(): void {
    this.logs = [];
  }
}
