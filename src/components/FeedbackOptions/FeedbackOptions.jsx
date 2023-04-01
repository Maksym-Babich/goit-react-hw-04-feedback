import PropTypes from 'prop-types';
import { Button, Options } from 'components/FeedbackOptions/FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Options>
      <Button onClick={onLeaveFeedback}>{options[0]}</Button>
      <Button onClick={onLeaveFeedback}>{options[1]}</Button>
      <Button onClick={onLeaveFeedback}>{options[2]}</Button>
    </Options>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
