import {Dayjs} from "dayjs";
import dayjs = require('dayjs')

export class Utils {
    public static getDateRange(from: Dayjs, to: Dayjs): Dayjs[] {
        let current = from.clone();
        let dates: Dayjs[] = [];
        while (current.unix() < to.unix()) {
            dates.push(current.clone());
            current.add(1, "hour");
        }

        return dates;
    }

    public static convertUnixHourToMoment(hour: number): Dayjs {
        return dayjs.utc(hour * 1000).second(0).minute(0).millisecond(0)
    }

    public static daysInCurrentMonth(): number {
        const d = new Date();
        d.setDate(0); // goes back to end of previous month
        return d.getDate();
    }
}
