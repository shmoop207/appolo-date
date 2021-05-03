"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
const dayjs = require("dayjs");
const AdvancedFormat = require("dayjs/plugin/advancedFormat");
const duration = require("dayjs/plugin/duration");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const relativeTime = require("dayjs/plugin/relativeTime");
const zone_1 = require("./plugins/zone");
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);
dayjs.extend(AdvancedFormat);
dayjs.extend(zone_1.zone);
exports.date = dayjs;
//# sourceMappingURL=date.js.map