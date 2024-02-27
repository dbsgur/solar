import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";
import duration from "dayjs/plugin/duration";
import customParserFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);
dayjs.extend(duration);
dayjs.extend(customParserFormat);

type DateTime = string;

export function now(): DateTime {
  return dayjs().toISOString();
}

export function format({
  date,
  timezone,
  template,
}: {
  date: DateTime;
  timezone?: string;
  template: string;
}): string {
  return dayjs.utc(date).tz(timezone).format(template);
}

export function startOfDay({
  date,
  timezone,
}: {
  date: DateTime;
  timezone?: string;
}) {
  return dayjs(date).tz(timezone).startOf("day").toISOString();
}

export function endOfDay({
  date,
  timezone,
}: {
  date: DateTime;
  timezone?: string;
}) {
  return dayjs(date).tz(timezone).endOf("day").toISOString();
}

export function startOfMonth({
  date,
  timezone,
}: {
  date: DateTime;
  timezone?: string;
}) {
  return dayjs(date).tz(timezone).startOf("month").toISOString();
}

export function endOfMonth({
  date,
  timezone,
}: {
  date: DateTime;
  timezone?: string;
}) {
  return dayjs(date).tz(timezone).endOf("month").toISOString();
}

export function subtract({
  date,
  value,
  unit,
}: {
  date: DateTime;
  value: number;
  unit: "day";
}) {
  return dayjs(date).subtract(value, unit).toISOString();
}

export function isAfter(date1: DateTime, date2: DateTime): boolean {
  return dayjs(date1).isAfter(date2);
}

export function isBefore(date1: DateTime, date2: DateTime) {
  return dayjs(date1).isBefore(date2);
}

export function getIntervalFromDate(date: DateTime) {
  return Math.floor(new Date(date).valueOf() / (30 * 60 * 1000));
}

export function getDateFromInterval(interval: number) {
  return dayjs.utc(interval * 30 * 60 * 1000).toISOString();
}

/**
 * startDate와 endDate 사이의 기간을 unit 단위로 리턴한다. \
 * range를 [)로 계산한다. ex) 4월 1일 ~ 4월 3일이면 startDate: 2022-04-01T00:00:00.000Z, endDate: 2022-04-04T00:00:00.000Z로 해야함
 */
export function getDateRangeAsTimeUnit(
  startDate: DateTime,
  endDate: DateTime,
  unit: "hour" | "day" | "week" | "month",
  timezone: string = "America/Los_Angeles"
) {
  const startAt = dayjs(startDate).tz(timezone).startOf(unit);
  // XXX: [)로 들어오는 건 일 단위라 주 단위 차이나 월 단위 차이는 계산하기 이상해져서 []로 바꾼다.
  const endAt = dayjs(endDate).tz(timezone).endOf(unit);
  const periodDiff = endAt.diff(startAt, unit) + 1;

  return Array(periodDiff)
    .fill("")
    .map((_, index) => startAt.add(index, unit).startOf(unit));
}

// NOTE: startAt - endAt 사이의 시간을 unit 단위로 리턴
export const getTimeDiff = (
  startAt: DateTime,
  endAt: DateTime,
  unit?: "second" | "minute" | "day"
): number => {
  return dayjs(endAt).diff(startAt, unit);
};

// NOTE: 단위 시간을 지정 포맷으로 변환해서 리턴
export const getDuration = (time: number, unit: "minute", format: "HH:mm") =>
  dayjs.duration(time, unit).format(format);

// NOTE: timezone short name // e.g PDT or PDT (UTC-07:00)
export function formatTimezone(
  timezone: string,
  format: "z" | "z (UTCZ)"
): string {
  return dayjs().tz(timezone).format(format);
}

// NOTE: 특정 포맷은 크롬에서는 잘 동작하지만, Safari 에서는 동작하지 않을 수 있으므로 포맷을 명시해주어야한다.
export const getDateWithTimezone = (
  date: dayjs.ConfigType,
  timezone: string,
  options?: { keepLocalTime?: boolean; format?: string }
) => dayjs(date, options?.format).tz(timezone, options?.keepLocalTime);
