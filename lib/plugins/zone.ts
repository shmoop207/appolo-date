import {ConfigType} from "dayjs";

export function zone(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.tsZone = function (timezone, keepLocalTime) {
        const oldOffset = this.utcOffset()
        const date = this.toDate()
        const target = date.toLocaleString('en-US', {timeZone: timezone})
        const diff = Math.round((date.valueOf() - new Date(target).valueOf()) / 1000 / 60);
        const diff2 = ((-Math.round(date.getTimezoneOffset() / 15) * 15) - diff) * -1
        let ins = dayjsFactory(target).$set("millisecond", this.$ms)
            .utcOffset(diff2, true)
        if (keepLocalTime) {
            const newOffset = ins.utcOffset()
            ins = ins.add(oldOffset - newOffset, "minute")
        }
        ins.$x.$timezone = timezone
        return ins
    }
}

declare module 'dayjs' {
    interface Dayjs {
        tsZone(timezone?: string, keepLocalTime?: boolean): Dayjs

    }
}
