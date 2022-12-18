import { useState } from "react";
import Statistics from "./statistics/statistics";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
    <Statistics
              title='Statistics'
              good={good}
              neutral={neutral}
              bad={bad}
              total={0}
              percentage={0}
    />
      <button type='button' onClick={() => setGood(good + 1)}>good</button>
      <button type='button' onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button type='button' onClick={() => setBad(bad + 1) }>bad</button>
      </>
  )
};

export {App}


// import React, { Component } from "react";
// import Section from './section/section';
// import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
// import Statistics from "./statistics/statistics";
// import Notification from "components/notification/notification";
// import PropTypes from 'prop-types';


// export class App extends Component {
//     static defaultProps = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     }

//     static propTypes = {
//       good: PropTypes.number.isRequired,
//       neutral: PropTypes.number.isRequired,
//       bad: PropTypes.number.isRequired,
//     }

//     state = {
//         good: this.props.good,
//         neutral: this.props.neutral,
//         bad: this.props.bad,
//   }
    
//   onLeaveFeedback = (e) => {
// 		const name = e.target.name;
// 		this.setState((prevState) => ({
// 			[name]: prevState[name] + 1
// 		}));
// 	};

//     countTotalFeedback = () => 
//          this.state.good + this.state.neutral + this.state.bad
        
    

//     countPositiveFeedbackPercentage = () =>
//         Number.parseInt(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
       
    
    

//   render() {
//     const { good, neutral, bad } = this.state;

//     const objKey = Object.keys(this.state);
  
        
//       return (
//         <Section
//           title={'statictics form'}
//           subtitle={'Please leave feedback'}>
//           <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />

//           {this.countTotalFeedback() ?
//             <Statistics
//               title='Statistics'
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             /> :
                
//             <Notification message="There is no feedback" />
//           }
               

//         </Section>
//       );
//   }
// }

