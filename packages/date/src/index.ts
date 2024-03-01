import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";

type CalendarDate = string;
type DateTime = string;
type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "AnyDay";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);

export function today(): CalendarDate {
  return dayjs(new Date()).format("YYYY-MM-DD");
}

export function startOfMonth(date: CalendarDate): CalendarDate {
  return dayjs(date).startOf("month").format("YYYY-MM-DD");
}

export function endOfMonth(date: CalendarDate): CalendarDate {
  return dayjs(date).endOf("month").format("YYYY-MM-DD");
}

export function nextCalendarDate(date: CalendarDate): CalendarDate {
  return dayjs(date).add(1, "day").format("YYYY-MM-DD");
}

export function addMonths(date: CalendarDate, count: number): CalendarDate {
  return dayjs(date).add(count, "month").format("YYYY-MM-DD");
}

export function setDate(
  calendarDate: CalendarDate,
  dayOfMonth: number
): CalendarDate {
  const [year, month] = calendarDate.split("-");

  return new Date(Date.UTC(Number(year), Number(month) - 1, dayOfMonth))
    .toISOString()
    .split("T")[0];
}

export function startOfDay(date: CalendarDate, timezone: string): Date {
  return dayjs.tz(date, timezone).startOf("day").toDate();
}

export function endOfDay(date: CalendarDate, timezone: string): Date {
  return dayjs.tz(date, timezone).endOf("day").toDate();
}

/**
 * Date of month
 */
export function date(date: CalendarDate): number {
  return Number(date.split("-")[2]);
}

export function format({
  date,
  format,
}: {
  date: CalendarDate;
  format:
    | "YYYY-MM-DD"
    | "MM/DD/YYYY"
    | "YYYY-MM"
    | "MMM, YYYY"
    | "YYYYMMDD"
    | "MM-DD-YYYY"
    | "MMDDYY"
    | "M/DD/YYYY"
    | "MMDD"
    | "MMMM YYYY"
    | "MMMM, YYYY"
    | "MMMM D"
    | "MMMM"
    | "MMMM-YYYY"
    | "YYYY"
    | "MM/YYYY"
    | "MM/DD/YYYY(ddd)";
}): CalendarDate {
  return dayjs(date).format(format);
}

export function differenceInMonths(
  dateLeft: CalendarDate,
  dateRight: CalendarDate
): number {
  const yearDiff =
    new Date(dateLeft).getFullYear() - new Date(dateRight).getFullYear();
  return (
    new Date(dateLeft).getMonth() +
    12 * yearDiff -
    new Date(dateRight).getMonth()
  );
}

export function addDays(
  calendarDate: CalendarDate,
  count: number
): CalendarDate {
  return dayjs(calendarDate).add(count, "days").format("YYYY-MM-DD");
}

export function differenceInDays(
  dateLeft: CalendarDate,
  dateRight: CalendarDate
): number {
  return (
    (new Date(dateLeft).valueOf() - new Date(dateRight).valueOf()) /
    (1000 * 60 * 60 * 24)
  );
}

export function add(
  date: CalendarDate,
  count: number,
  unit: "day" | "week" | "month" | "year"
): CalendarDate {
  return dayjs(date).add(count, unit).format("YYYY-MM-DD");
}

export function parse(date: string | number, timezone?: string): CalendarDate {
  return dayjs(new Date(date)).tz(timezone).format("YYYY-MM-DD");
}

export function toISOString(
  calendarDate: CalendarDate,
  timezone: string
): DateTime {
  return dayjs.tz(calendarDate, timezone).toISOString();
}

export function isBefore(date1: CalendarDate, date2: CalendarDate): boolean {
  return dayjs(date1).isBefore(date2);
}

/**
 * @returns  0 (Sunday) to 6 (Saturday)
 */
export function dayOfWeek(date: CalendarDate): number {
  return dayjs(date).day();
}

export function toDayOfWeekString(date: CalendarDate): DayOfWeek {
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ] as DayOfWeek[]
  )[dayjs(date).day()];
}

export function day(date: CalendarDate, day: number): string {
  return dayjs(date).day(day).format("YYYY-MM-DD");
}

/**
 * 다음 요일까지 남은 일자를 반환한다.
 */
export function nextDayDiff(
  initialDate: CalendarDate,
  dayOfWeeks: DayOfWeek[]
) {
  const date = dayjs.tz(initialDate, "UTC").toDate();
  const days: DayOfWeek[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const initialDay = days[date.getDay()];
  const sortedDays = [
    ...days.slice(date.getDay()),
    ...days.slice(undefined, date.getDay()),
  ];
  const result = sortedDays.findIndex((day) => {
    return initialDay !== day && dayOfWeeks.includes(day as DayOfWeek);
  });
  return result === -1 ? 7 : result;
}
