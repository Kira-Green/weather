import React from 'react';
import css from './Day.module.css';

const Day = (props) => {
    return(
<div>
    <div className={css.day}>{props.dayOfWeek} </div>
    <div className={css.dayIcon}>{props.dayIcon}</div>
    <div className={css.dayForecast}>{props.dayForecast}</div>
    <div className={css.highTemperature} >{props.highTemperature}</div>
    <div className={css.lowTemperature} >{props.lowTemperature}</div>
</div>)
}

export default Day;