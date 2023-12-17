import { Logger } from "./logger";

export class LogToFile implements Logger {
  log(data: { [key: string]: any }): void {
    console.log(`Logging the following data to file:
            ${data}
        `);
  }
}
