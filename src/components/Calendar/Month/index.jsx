import React from 'react';
import Week from './../Week';
import DateFns, { getWeeksInMonth } from 'date-fns';

function Month(props) {
  const { year, month } = props;

  const getWeeks = () => {
    const weeks = [];
    const firstWeek = getWeek(date);
    const weeksNumber = getWeeksInMonth(date);
    for (let i = firstWeek; i < firstWeek + weeksNumber; i++) {
      weeks.push(<Week year={year} week={i} />);
    }

    return weeks;
  };

  return <div> {getWeeks()} </div>;
}

export default Month;
