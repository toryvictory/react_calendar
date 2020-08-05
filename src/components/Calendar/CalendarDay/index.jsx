import React from 'react';
import PropTypes from 'prop-types';

function CalendarDate({ year, month, date, ...restProps }) {
  return <div>{date}</div>;
}

CalendarDate.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
};

export default CalendarDate;
