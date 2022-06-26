/**
 * In calculations, it is assumed, that month has 30 days.
 * This func returns amount of months.
 * @param days 
 */
export const mapDaysToMonths = (days: number): number => {
  return Math.round(days / 30);
};

export const getDateNMonthsFromNow = (months: number): Date => {
  const date = new Date();
  date.setMonth(date.getMonth() + months);
  return date;
};
