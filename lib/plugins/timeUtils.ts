import {ConfigType, Dayjs, ManipulateType, OpUnitType} from "dayjs";
import dayjs = require( "dayjs");

export function getCurrentHour(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentHour = function (this: Dayjs) {
        return this.utc().hour();
    }
}

export function getCurrentByUnit(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentByUnit = function (this: Dayjs, startOf: ManipulateType, subtract: number = 0, unit: ManipulateType = "hours") {

        let diff = this.utc();
        if (subtract) {
            diff = diff.subtract(subtract, startOf);
        }

        diff = diff.startOf(startOf);

        return this.utc().diff(diff, unit);

    }
}

export function getCurrentWeek(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentWeek = function (this: Dayjs, unit: ManipulateType = "hours") {
        return this.getCurrentByUnit("week", 0, unit);

    }
}

export function getLastWeek(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getLastWeek = function (this: Dayjs, unit: ManipulateType = "hours") {
        return this.getCurrentByUnit("week", 1, unit);
    }
}

export function getCurrentMonth(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentMonth = function (this: Dayjs, unit: ManipulateType = "hours") {
        return this.getCurrentByUnit("month", 0, unit);
    }
}

export function getLastMonth(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getLastMonth = function (this: Dayjs, unit: ManipulateType = "hours") {
        return this.getCurrentByUnit("month", 1, unit);
    }
}

export function getPastDays(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getPastDays = function (this: Dayjs, days: number = 1, unit: ManipulateType = "hours") {

        return this.getCurrentByUnit("day", days, unit);
    }
}

export function timeZoneUnix(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.timeZoneUnix = function (this: Dayjs, timezone: string) {

        return this.unix() + (this.tsZone(timezone) as any).utcOffset() * 60;
    }
}

export function invertTimeZone(option:any, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsFactory.invertTimeZone = function (timezone: string) {
        return timezone.includes('+') ? timezone.replace('+', '-') : timezone.replace('-', '+');

    }
}

declare module 'dayjs' {

    function invertTimeZone(timezone: string): string

    interface Dayjs {
        getPastDays(days: number, unit?: ManipulateType): number

        getLastMonth(unit?: ManipulateType): number

        getCurrentMonth(unit?: ManipulateType): number

        getLastWeek(unit?: ManipulateType): number

        timeZoneUnix(timezone?: string): number

        getCurrentWeek(unit?: ManipulateType): number

        getCurrentByUnit(startOf: ManipulateType, subtract?: number, unit?: ManipulateType): number

        getCurrentHour(): number

    }
}
