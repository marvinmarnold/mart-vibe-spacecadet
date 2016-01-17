const UNIT_SESSION_PREFIX = "unit-selected-"
unitSessionId = function(spaceId) {
  return UNIT_SESSION_PREFIX + spaceId
}

HOUR = "hour"
DAY = "day"
MONTH = "month"

const SPACE_DATE_PREFIX = 'space-date-'
spaceDateId = function(spaceId) {
  return SPACE_DATE_PREFIX + spaceId
}

const SPACE_NUM_DAYS_PREFIX = 'space-num-days-'
spaceNumDaysId = function(spaceId) {
  return SPACE_NUM_DAYS_PREFIX + spaceId
}

const SPACE_NUM_HOURS_PREFIX = 'space-num-hours-'
spaceNumHoursId = function(spaceId) {
  return SPACE_NUM_HOURS_PREFIX + spaceId
}

const SPACE_START_HOUR_PREFIX = 'space-start-hour-'
spaceStartHourId = function(spaceId) {
  return SPACE_START_HOUR_PREFIX + spaceId
}

const SPACE_START_MINUTE_PREFIX = 'space-start-minute-'
spaceStartMinuteId = function(spaceId) {
  return SPACE_START_MINUTE_PREFIX + spaceId
}

const SPACE_START_AMPM_PREFIX = 'space-start-ampm-'
spaceStartAMPMId = function(spaceId) {
  return SPACE_START_AMPM_PREFIX + spaceId
}
