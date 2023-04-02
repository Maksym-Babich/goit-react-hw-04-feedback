import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Stats, Stat } from 'components/Statistics/Statistics.styled';

export function Statistics(props) {
  return (
    <Stats>
      {Object.keys(props).map(key => {
        return <Stat key={nanoid()}>{`${key}: ${props[key]}`}</Stat>;
      })}
    </Stats>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
