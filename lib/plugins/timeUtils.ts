import {ConfigType, Dayjs, OpUnitType} from "dayjs";
import dayjs = require( "dayjs");

export function getCurrentHour(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentHour = function (this: Dayjs) {
        return this.utc().hour();
    }
}

export function getCurrentByUnit(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentByUnit = function (this: Dayjs, startOf: OpUnitType, subtract: number = 0, unit: OpUnitType = "hours") {

        let diff = this.utc();
        if (subtract) {
            diff = diff.subtract(subtract, startOf);
        }

        diff = diff.startOf(startOf);

        return this.utc().diff(diff, unit);

    }
}

export function getCurrentWeek(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentWeek = function (this: Dayjs, unit: OpUnitType = "hours") {
        return this.getCurrentByUnit("week", 0, unit);

    }
}

export function getLastWeek(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getLastWeek = function (this: Dayjs, unit: OpUnitType = "hours") {
        return this.getCurrentByUnit("week", 1, unit);
    }
}

export function getCurrentMonth(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getCurrentMonth = function (this: Dayjs, unit: OpUnitType = "hours") {
        return this.getCurrentByUnit("month", 0, unit);
    }
}

export function getLastMonth(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getLastMonth = function (this: Dayjs, unit: OpUnitType = "hours") {
        return this.getCurrentByUnit("month", 1, unit);
    }
}

export function getPastDays(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.getPastDays = function (this: Dayjs, days: number = 1, unit: OpUnitType = "hours") {

        return this.getCurrentByUnit("day", days, unit);
    }
}

export function timeZoneUnix(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsClass.prototype.timeZoneUnix = function (this: Dayjs, timezone: string) {

        return this.unix() + (this.tsZone(timezone) as any).utcOffset() * 60;
    }
}

export function invertTimeZone(option, dayjsClass: typeof Dayjs, dayjsFactory: typeof dayjs) {
    dayjsFactory.invertTimeZone = function (timezone: string) {
        return timezone.includes('+') ? timezone.replace('+', '-') : timezone.replace('-', '+');

    }
}

declare module 'dayjs' {

    function invertTimeZone(timezone: string): string

    interface Dayjs {
        getPastDays(days: number, unit?: OpUnitType): number

        getLastMonth(unit?: OpUnitType): number

        getCurrentMonth(unit?: OpUnitType): number

        getLastWeek(unit?: OpUnitType): number

        timeZoneUnix(timezone?: string): number

        getCurrentWeek(unit?: OpUnitType): number

        getCurrentByUnit(startOf: OpUnitType, subtract?: number, unit?: OpUnitType): number

        getCurrentHour(): number

    }
}
