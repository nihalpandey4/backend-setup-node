import logger from "../utilities/logger";

declare global {
  namespace NodeJS {
    interface Global {
      __LOGGER__: logger;
    }
  }
}