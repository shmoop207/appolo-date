"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPastDays = exports.getLastMonth = exports.getCurrentMonth = exports.getLastWeek = exports.getCurrentWeek = exports.getCurrentByUnit = exports.getCurrentHour = void 0;
function getCurrentHour(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getCurrentHour = function () {
        return this.utc().hour();
    };
}
exports.getCurrentHour = getCurrentHour;
function getCurrentByUnit(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getCurrentByUnit = function (startOf, subtract = 0, unit = "hours") {
        let diff = this.utc();
        if (subtract) {
            diff = diff.subtract(subtract, startOf);
        }
        diff = diff.startOf(startOf);
        return this.utc().diff(diff, unit);
    };
}
exports.getCurrentByUnit = getCurrentByUnit;
function getCurrentWeek(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getCurrentWeek = function (unit = "hours") {
        return this.getCurrentByUnit("week", 0, unit);
    };
}
exports.getCurrentWeek = getCurrentWeek;
function getLastWeek(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getLastWeek = function (unit = "hours") {
        return this.getCurrentByUnit("week", 1, unit);
    };
}
exports.getLastWeek = getLastWeek;
function getCurrentMonth(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getCurrentMonth = function (unit = "hours") {
        return this.getCurrentByUnit("month", 0, unit);
    };
}
exports.getCurrentMonth = getCurrentMonth;
function getLastMonth(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getLastMonth = function (unit = "hours") {
        return this.getCurrentByUnit("month", 1, unit);
    };
}
exports.getLastMonth = getLastMonth;
function getPastDays(option, dayjsClass, dayjsFactory) {
    dayjsClass.prototype.getPastDays = function (days = 1, unit = "hours") {
        return this.getCurrentByUnit("day", days, unit);
    };
}
exports.getPastDays = getPastDays;
//# sourceMappingURL=timeUtils.js.map