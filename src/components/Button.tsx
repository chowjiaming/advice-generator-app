import {useState, useEffect} from 'react';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({onClick, children}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [spinClass, setSpinClass] = useState('');

  useEffect(() => {
    let timer: number | undefined;
    if (isPressed) {
      setSpinClass('spin');
      timer = setTimeout(() => {
        setIsPressed(false);
        setSpinClass('');
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isPressed]);

  const handleClick = () => {
    if (!isPressed) {
      onClick();
      setIsPressed(true);
    }
  };

  return (
    <button
      className={`button ${spinClass}`}
      onClick={handleClick}
      disabled={isPressed}
    >
      {children}
    </button>
  );
};
