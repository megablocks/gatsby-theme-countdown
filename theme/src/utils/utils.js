import moment from 'moment';

export const remainingTime = (targetDate, currentDate) => {
  const remainingDays = moment(targetDate).diff(currentDate, 'days');
  const tomorrow = moment().add(1, 'day').hour(0).minute(0).second(0);
  const remainingHours = tomorrow.diff(currentDate, 'hours');
  const remainingMinutes = tomorrow.diff(currentDate, 'minutes') - remainingHours * 60;
  const remainingSeconds = tomorrow.diff(currentDate, 'seconds') - remainingHours * 60 * 60 - remainingMinutes * 60;
  return { remainingDays, remainingHours, remainingMinutes, remainingSeconds };
}

export const addPadding = value => value < 10 ? "0" + value : value;