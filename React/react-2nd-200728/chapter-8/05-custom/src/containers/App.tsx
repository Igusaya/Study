import React, { FC, useState, useRef, useEffect } from 'react';

import AppComponent from '../components/App';

const cycle = [25, 5, 25, 5, 25, 5, 25, 15, 15];

const useTimer = (): [number, () => void, () => void, () => void] => {
  const [timerId, setTimerId] = useState(0);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(cycle[cycleIndex]);

  const refCycleIndex = useRef(cycleIndex);

  useEffect(() => {
    refCycleIndex.current = cycleIndex;
  }, [cycleIndex]);

  const tick = () => {
    setTimeLeft(prevTime => {
      if (prevTime === 0) {
        setCycleIndex(refCycleIndex.current + 1);

        return cycle[(refCycleIndex.current + 1) % cycle.length];
      }

      return prevTime - 1;
    });
  };

  const reset = () => {
    // setTimeLeft(cycle[cycleIndex]);
    console.log('index', cycleIndex);
  };

  const start = () => {
    const id = setInterval(tick, 1000);
    if (typeof id === 'number') setTimerId(id);
  };

  const stop = () => {
    clearInterval(timerId);
  };

  return [timeLeft, reset, start, stop];
};

const AppContainer: FC = () => {
  const [timeLeft, reset, start, stop] = useTimer();

  return (
    <AppComponent timeLeft={timeLeft} reset={reset} start={start} stop={stop} />
  );
};

export default AppContainer;
