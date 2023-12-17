import { Logger } from "./logger";

export class LogToService implements Logger {
  log(data: { [key: string]: any }): void {
    console.log(`Loggeing the following data to Saas:
            ${data}
        `);
  }
}
