import { IWebsite } from "../website";
import { CONFIG_TYPE_ENUM } from "./config.constant";

export interface IWebsiteConfig {
  code: string;
  type: CONFIG_TYPE_ENUM;
  value: string;
  websiteId: number;
  website?: IWebsite;
}
