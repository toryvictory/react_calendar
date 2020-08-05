import React, { Component } from 'react';
import styles from './Calendar.module.scss';
import * as dateFns from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;

    return (
      <article>
        <div className={styles.container}>{currentDate.toLocaleString()}</div>
        <button
          onclick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                years: 1,
              }),
            });
          }}
        >
          Add year
        </button>
      </article>
    );
  }
}
