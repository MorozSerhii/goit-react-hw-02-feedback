import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = name =>
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handelClick}
            options={this.state}
          />

          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
