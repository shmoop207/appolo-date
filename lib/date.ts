import dayjs = require('dayjs')

import AdvancedFormat = require('dayjs/plugin/advancedFormat')
import duration = require('dayjs/plugin/duration')
import utc = require('dayjs/plugin/utc')
import timezone = require('dayjs/plugin/timezone')
import relativeTime = require('dayjs/plugin/relativeTime')
import {zone} from './plugins/zone'
import {
    getCurrentByUnit,
    getCurrentHour,
    getCurrentMonth,
    getCurrentWeek,
    getLastMonth,
    getLastWeek,
    getPastDays, invertTimeZone, timeZoneUnix
} from './plugins/timeUtils'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(duration)
dayjs.extend(timezone)
dayjs.extend(AdvancedFormat)
dayjs.extend(zone)
dayjs.extend(getCurrentByUnit)
dayjs.extend(getCurrentHour)
dayjs.extend(getCurrentMonth)
dayjs.extend(getCurrentWeek)
dayjs.extend(getLastMonth)
dayjs.extend(getLastWeek)
dayjs.extend(getPastDays)
dayjs.extend(timeZoneUnix)
dayjs.extend(invertTimeZone)

export const date = dayjs;
