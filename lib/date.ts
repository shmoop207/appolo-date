import dayjs = require('dayjs')

import AdvancedFormat = require('dayjs/plugin/advancedFormat')
import duration = require('dayjs/plugin/duration')
import utc = require('dayjs/plugin/utc')
import timezone = require('dayjs/plugin/timezone')
import relativeTime = require('dayjs/plugin/relativeTime')
import {zone} from './plugins/zone'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(duration)
dayjs.extend(timezone)
dayjs.extend(AdvancedFormat)
dayjs.extend(zone)

export const date = dayjs;
