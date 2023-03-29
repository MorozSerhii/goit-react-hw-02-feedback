import { Btn, Wraper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const keys = Object.keys(options);
  return (
    <Wraper>
      {keys.map(key => (
        <Btn
          key={nanoid()}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key}
        </Btn>
      ))}
    </Wraper>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
