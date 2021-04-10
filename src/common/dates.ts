/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {differenceInMinutes} from "date-fns";
import format from 'date-fns/format';

const StandardDateTimeFormat = "yyyy-LL-dd";

const getTimePastIfLessThanDay = (compTime: any): string => {
  const dateFormatted = new Date(Date.parse(compTime));

  if (!compTime) return "";

  const now = new Date();
  const diffInMinutes = differenceInMinutes(now, dateFormatted);

  if (diffInMinutes > 60) {
    if (diffInMinutes > 24 * 60) {
      return format(dateFormatted, StandardDateTimeFormat);
    }
    return Math.round(diffInMinutes / 60) + "h ago";
  }
  return Math.round(diffInMinutes) + "m ago";
};

export {getTimePastIfLessThanDay};