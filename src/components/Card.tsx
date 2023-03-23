import {Advice} from './Advice';
import {Button} from './Button';
import {useFetchAdvice} from '../utils/useFetchAdvice';

export const Card: React.FC = () => {
  const {fetchNewAdvice, ...adviceProps} = useFetchAdvice();

  return (
    <div className="card">
      <Advice {...adviceProps} />
      <img
        className="divider"
        src="images/pattern-divider-desktop.svg"
        alt="divider"
      />
      <Button onClick={fetchNewAdvice}>
        <img
          src="images/icon-dice.svg"
          alt="advice-button"
          className="button-image"
        />
      </Button>
    </div>
  );
};
