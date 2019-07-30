/** @jsx jsx */
import { jsx, css, Flex } from "theme-ui"
import useClock from 'use-clock';
import { remainingTime, addPadding } from '../utils/utils';
import CountNumber from './count-number';

const CountdownContainer = ({ 
  targetDate, 
  showSeconds, 
  showMinutes,
  showHours,
  showDays,
  secondsLabel,
  minutesLabel,
  hoursLabel,
  daysLabel,
}) => {
  const { raw: currentDate } = useClock();
  const isOver = currentDate.isAfter(targetDate);
  const { 
    remainingDays, 
    remainingHours, 
    remainingMinutes, 
    remainingSeconds 
  } = remainingTime(targetDate, currentDate);
  console.log(remainingHours)
  return (
    <Flex css={css({
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "border",
      flexDirection: ["column", "row"],
      "& > *": {
        borderRightWidth: [0, "1px"],
        borderRightStyle: [0, "solid"],
        borderBottomWidth: ["1px", 0],
        borderBottomStyle: ["solid", 0],
        borderColor: 'border',
      },
      "& > *:last-child": {
        border: 0
      }
    })}>
      {showDays && <CountNumber 
        value={addPadding(isOver ? 0 : remainingDays)}
        label={daysLabel}
      />}
      {showHours && <CountNumber 
        value={addPadding(isOver ? 0 : remainingHours)}
        label={hoursLabel}
      />}
      {showMinutes && <CountNumber 
        value={addPadding(isOver ? 0 : remainingMinutes)}
        label={minutesLabel}
      />}
      {showSeconds && <CountNumber 
        value={addPadding(isOver ? 0 : remainingSeconds)}
        label={secondsLabel}
      />}
    </Flex>
  );
};

export default CountdownContainer;
