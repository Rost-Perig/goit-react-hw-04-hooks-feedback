
import { useState } from 'react';
import './App.css';
import Section from './componets/Section';
import Statistics from './componets/Statistics';
import FeedbackOptions from './componets/FeedbackOptions';

export default function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  const [isActivated, setIsActivated] = useState(false);
  let [total, setTotal] = useState(0);
  let [posFeedback, setPosFeedback] = useState(0);

  const originalKeys = ['good', 'neutral', 'bad'];

  const valueIncrement = event => {
    const btnType = event.target.dataset.type;
    switch (btnType) {
      case 'good':
        setGood(good += 1);
        setTotal(total += 1);
        break;
      case 'neutral':
        setNeutral(neutral += 1);
        setTotal(total += 1);
        break;
      case 'bad':
        setBad(bad += 1);
        setTotal(total += 1);
        break;
      default:
        break;
    };
    setPosFeedback(total === 0 ?
      0 :
      Math.round(good / total * 100));
    setIsActivated(true);
  };


  return (
    <div className="App">

      <Section title={"Please leave feedback"}>
        <FeedbackOptions keysArr={originalKeys} incrementFoo={valueIncrement} />
      </Section>

      <Section title={"Statistics"}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          posFeedback={posFeedback}
          isActivated={isActivated}/>
      </Section>
      
    </div>
  );
};
