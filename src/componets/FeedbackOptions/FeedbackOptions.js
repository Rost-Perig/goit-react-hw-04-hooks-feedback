import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ keysArr, incrementFoo }) => {
    return (
        <div>
            {keysArr.map(key => {
                return (
                    <button type="button" key={key} className={s.btn} data-type={key} onClick={incrementFoo}>
                        {
                            (function toUpFirstLetter(str) {
                                let arr = str.split('');
                                arr.splice(0, 1, arr[0].toUpperCase())
                                return arr.join('')
                            })(key)
                        }
                    </button>
                )
            })}
        </div>
    )
};

FeedbackOptions.propTypes = {
    key: PropTypes.string,
};

export default FeedbackOptions;