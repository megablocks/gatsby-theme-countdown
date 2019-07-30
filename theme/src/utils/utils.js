import moment from 'moment';

export const remainingTime = (targetDate, currentDate) => {
  const remainingDays = moment(targetDate).diff(currentDate, 'days');
  const remainingHours = moment(targetDate).diff(currentDate, 'hours') - (24 * remainingDays);
  const remainingMinutes = moment(targetDate).diff(currentDate, 'minutes') - (24 * 60 * remainingDays) - (60 * remainingHours);
  const remainingSeconds = moment(targetDate).diff(currentDate, 'seconds') % 60;
  return { remainingDays, remainingHours, remainingMinutes, remainingSeconds };
}

export const addPadding = value => value < 10 ? "0" + value : value;