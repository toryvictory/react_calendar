import React from 'react';
import CalendarDate from '../CalendarDay';
import { getDayOfYear } from 'date-fns';

function Week(props) {
  const { week, year } = this.props;

  const getCalendarDays = () => {
    const days = [];
    const firstDay = getDayOfYear(date);
    for (let i = firstDay; i < firstDay + 7; i++) {
      days.push(<CalendarDate year={year} month={month} date={date} />);
    }
    return days;
  };

  return <div> {getCalendarDays()} </div>;
}

export default Week;
