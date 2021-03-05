import React from "react";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Notification from "./Components/Notification";
import Container from "./Components/Container";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeavelFeedback = e => {
    let assessment = e.target.name;
    this.setState(prevState => {
      return {
        [assessment]: prevState[assessment] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  keysState = () => {
    let keysState = Object.keys(this.state);
    return keysState;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good === 0 ? (
      <span>0 %</span>
    ) : (
      <span>{Number.parseInt((good * 100) / (good + neutral + bad))}%</span>
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    let totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.keysState()}
            onLeavelFeedback={this.onLeavelFeedback}
          />
        </Section>
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
export default App;