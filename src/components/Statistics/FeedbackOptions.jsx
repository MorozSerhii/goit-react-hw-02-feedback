import { Btn, Wraper } from './FeedbackOptions.styled';

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
