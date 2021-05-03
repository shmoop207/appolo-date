"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const index_1 = require("../index");
const moment = require("moment");
require("moment-timezone");
let should = chai.should();
describe("date", function () {
    describe("timezone ", function () {
        it("should get time with timezone", async () => {
            let time = index_1.date().tz("America/New_York").startOf("minute").valueOf();
            let time2 = moment.tz("America/New_York").startOf("minute").valueOf();
            time.should.be.eq(time2);
            let timeFormat = index_1.date().tz("Etc/GMT-12").startOf("minute").format();
            let time2Format = moment.tz("Etc/GMT-12").startOf("minute").format();
            timeFormat.should.be.eq(time2Format);
        });
        it("should get time with zone", async () => {
            let time = index_1.date().tsZone("Africa/Cairo").utcOffset() / 60;
            let time2 = moment.tz.zone("Africa/Cairo").utcOffset(moment().unix()) / 60;
            time.should.be.eq(time2);
        });
        it("should get time add", async () => {
            let time = index_1.date().utc().add(1, "hour").unix();
            let time2 = moment.utc().add(1, "hour").unix();
            time.should.be.eq(time2);
        });
    });
});
//# sourceMappingURL=unit.js.map