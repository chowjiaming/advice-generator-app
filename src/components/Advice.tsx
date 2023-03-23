import {type Advice as AdviceType} from '../utils/types';

type Props = {
  advice: AdviceType | null;
  isLoading: boolean;
  error?: Error;
};
export const Advice: React.FC<Props> = ({advice, isLoading, error}) => {
  if (error) {
    return (
      <>
        <div className="card-title">Error...</div>
        <div className="advice">Error....</div>
      </>
    );
  }
  return (
    <>
      {isLoading ? (
        <>
          <div className="card-title">Loading...</div>
          <div className="advice">Loading....</div>
        </>
      ) : (
        <>
          <div className="card-title">Advice # {advice?.slip.id}</div>
          <div className="advice">{`"${advice?.slip.advice}"`}</div>
        </>
      )}
    </>
  );
};
