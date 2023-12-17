import { Logger } from "./logger";

export class LogToDatabase implements Logger {
    log(data: { [key: string]: any }): void {
        console.log(`Logging the following data to db:
            ${data}
        `);
    }
}
