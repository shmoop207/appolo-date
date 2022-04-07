"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const dayjs = require("dayjs");
class Utils {
    static getDateRange(from, to) {
        let current = from.clone();
        let dates = [];
        while (current.unix() < to.unix()) {
            dates.push(current.clone());
            current.add(1, "hour");
        }
        return dates;
    }
    static convertUnixHourToMoment(hour) {
        return dayjs.utc(hour * 1000).second(0).minute(0).millisecond(0);
    }
    static daysInCurrentMonth() {
        const d = new Date();
        d.setDate(0); // goes back to end of previous month
        return d.getDate();
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map