import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, posFeedback, isActivated }) => {
    const arr = [{ Good: good }, { Neutral: neutral }, { Bad: bad }, { Total: total }, { 'Positive feedback': posFeedback }];
    return (
        !isActivated ?
            (<p className={s.noGiven}>No feedback given</p> ) :
            ( <ul className={s.list}>
                    {arr.map(item => {
                        return (
                            <li key={ Object.keys(item)} className={s.listItem}>
                                <span>{Object.keys(item)}:</span>
                                {(String(Object.keys(item)) !== 'Positive feedback') ?
                                    <span>{item[Object.keys(item)]}</span> :
                                    <span>{item[Object.keys(item)]}%</span>}   
                            </li> 
                        )
                    })}
                </ul>)
    );
    
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    posFeedback: PropTypes.number,
    isActivated: PropTypes.bool
};

export default Statistics;