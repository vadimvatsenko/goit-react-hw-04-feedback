import { useState } from "react";
import Statistics from "./statistics/statistics";
import Section from "./section/section";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "components/notification/notification";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const percentageFeedback = Number.parseInt(good / (good + neutral + bad) * 100);

  const buttonsName = ['good', 'neutral', 'bad']
  
  const buttonChangeStatistics = (e) => {
    const {name} = e.target
    // const { name } = e.target.innerText.toLowerCase()
    if (name === 'good') {
      setGood(prevState => prevState +1)
    }
    if (name === 'bad') {
      setBad(prevState => prevState +1)
    }
    if (name === 'neutral') {
      setNeutral(prevState => prevState +1)
    }

  }

  return (
    
    <Section
      title={'statictics form'}
      subtitle={'Please leave feedback'}>
      <FeedbackOptions options={buttonsName} onLeaveFeedback={buttonChangeStatistics} />
      {totalFeedback ? <Statistics
        title='Statistics'
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        percentage={percentageFeedback}
      /> : <Notification message="There is no feedback" />}
    </Section>
  );
}

export {App}
