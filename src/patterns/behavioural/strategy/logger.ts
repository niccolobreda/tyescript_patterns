export interface Logger {
  log(data: { [key: string]: any }): void;
}
