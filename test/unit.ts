"use strict";
import chai = require('chai');
import {date} from "../index";
import * as moment from 'moment'
import "moment-timezone";
import {invertTimeZone} from "dayjs";

let should = chai.should();

describe("date", function () {


    describe("timezone ", function () {
        it("should get time with timezone", async () => {
            let time = date().tz("America/New_York").startOf("minute").valueOf()
            let time2 = moment.tz("America/New_York").startOf("minute").valueOf()
            time.should.be.eq(time2);

            let timeFormat = date().tz("Etc/GMT-12").startOf("minute").format()
            let time2Format = moment.tz("Etc/GMT-12").startOf("minute").format()
            timeFormat.should.be.eq(time2Format);

        })

        it("should get time with zone", async () => {
            let time = date().tsZone("Africa/Cairo").utcOffset() / 60;
            let time2 = moment.tz.zone("Africa/Cairo").utcOffset(moment().unix()) / 60;
            time.should.be.eq(time2);


        })

        it("should timeZoneUnix", async () => {
            let time = date().timeZoneUnix("America/New_York");
            let mom = moment();
            let time2 = mom.unix() + (moment.tz.zone("America/New_York") as any).utcOffset(mom) * 60;
            time.should.be.eq(time2);


        })

        it("should invertTimeZone", async () => {
            date.invertTimeZone("Etc/GMT-12").should.be.eq("Etc/GMT+12");



        })

        it("should get time add", async () => {
            let time = date().utc().add(1, "hour").unix();
            let time2 = moment.utc().add(1, "hour").unix();
            time.should.be.eq(time2);


        })


    })

    describe("time utils ", function () {
        it("should get last week", function () {
            let lastWeek = date().getLastWeek();
            let testWeek = date().utc().diff(date().utc().subtract(1, "week").startOf("week"), "hours")

            lastWeek.should.be.eq(testWeek)
        })
    })


});
