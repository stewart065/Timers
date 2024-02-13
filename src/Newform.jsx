import React, { useState, useEffect } from 'react';
import Formtimer from './Formtimer.jsx';
import CountdownTimerList from './CountdownTimerList';

const Newform = () => {
  const [countdowntimers, setCountdowntimers] = useState([]);

  const handleInputSubmit = (time) => {
    setCountdowntimers((currentCountdownTimers) => [
      ...currentCountdownTimers,
      {
        id: crypto.randomUUID(),
        time,
        currentvalue: time,
        isPaused: false,
      },
    ]);
  };

  const handleTimerAction = (action, timerId) => {
    setCountdowntimers((currentCountdownTimers) => {
      return currentCountdownTimers.map((timer) => {
        if (timer.id === timerId) {
          if (action === 'pause') {
            return {
              ...timer,
              isPaused: !timer.isPaused,
            };
          } else if (action === 'reset') {
            return {
              ...timer,
              currentvalue: timer.time,
              isPaused: false,
            };
          }
        }
        return timer;
      });
    });

    if (action === 'remove') {
      setCountdowntimers((currentCountdownTimers) =>
        currentCountdownTimers.filter((timer) => timer.id !== timerId)
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdowntimers((currentCountdownTimers) => {
        return currentCountdownTimers.map((timer) => {
          if (timer.currentvalue > 0 && !timer.isPaused) {
            return {
              ...timer,
              currentvalue: timer.currentvalue - 1,
            };
          }
          return timer;
        });
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdowntimers]);

  return (
    <>
      <Formtimer onSubmit={handleInputSubmit} />

      <CountdownTimerList
        countdowntimers={countdowntimers}
        onTimerAction={handleTimerAction}
      />
    </>
  );
};

export default Newform;
