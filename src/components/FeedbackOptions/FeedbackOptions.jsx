import { Btn, Wraper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Wraper>
      {options.map(({ id, name }) => (
        <Btn
          key={id}
          onClick={() => {
            onLeaveFeedback(name);
          }}
        >
          {name}
        </Btn>
      ))}
    </Wraper>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
