import chalk from "chalk";

export class LoggerDev {
  static info(message: string) {
    console.log(chalk.blue(`[INFO]:${[Date.now()]} ${message}`));
  }

  static error(message: string) {
    console.error(chalk.red(`[ERROR]:${[Date.now()]} ${message}`));
  }

  static warn(message: string) {
    console.warn(chalk.yellow(`[WARN]:${[Date.now()]} ${message}`));
  }
}
