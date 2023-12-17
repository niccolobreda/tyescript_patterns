interface Logger {
    log(data: { [key: string]: any }): void;
}

export class LogToDatabase implements Logger {
    log(data: { [key: string]: any }): void {
        console.log(`Logging the following data to db:
            ${data}
        `);
    }
}

export class LogToFile implements Logger {
    log(data: { [key: string]: any }): void {
        console.log(`Logging the following data to file:
            ${data}
        `);
    }
}

export class LogToService implements Logger {
    log(data: { [key: string]: any }): void {
        console.log(`Loggeing the following data to Saas:
            ${data}
        `);
    }
}

export class Consumer {
    public log(data: { [key: string]: any }, logger: Logger) {
        logger.log(data);
    }
}
