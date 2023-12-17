import { Logger } from "./logger";

export class Consumer {
  public log(data: { [key: string]: any }, logger: Logger) {
    logger.log(data);
  }
}
