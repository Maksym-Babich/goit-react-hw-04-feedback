import React, { useState, useEffect, Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

const defaultOptions = ['good', 'neutral', 'bad'];

export const App = function () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() ? `${((good / countTotalFeedback()) * 100).toFixed(0)}%` : `0%`;
  };

  const leaveFeedback = (event) => {
    switch (event.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={defaultOptions} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
