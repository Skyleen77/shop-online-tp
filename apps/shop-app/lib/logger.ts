import axios from "axios";

type LogLevel = "error" | "info" | "warn" | "debug";

class Logger {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async log(level: LogLevel, message: string) {
    try {
      await axios.post(`${this.baseURL}/log`, { level, message });
    } catch (error) {
      console.error("Erreur lors de l'envoi du log:", error);
    }
  }

  public error(message: string) {
    this.log("error", message);
  }

  public info(message: string) {
    this.log("info", message);
  }

  public warn(message: string) {
    this.log("warn", message);
  }

  public debug(message: string) {
    this.log("debug", message);
  }
}

export const logger = new Logger("http://localhost:5001");
