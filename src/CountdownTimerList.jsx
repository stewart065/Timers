import React from 'react';

const CountdownTimerList = ({ countdowntimers, onTimerAction }) => {
  return (
    <div className="countdown-timers">
      <h2>Countdown Timers</h2>
      <ul className="card-list">
        {countdowntimers.map((timer) => (
          <li className="card" key={timer.id}>
            <div className="card-body">
              <p className="card-text">Current Value: {timer.currentvalue}</p>
              <div className="button-container">
                <button
                  className="btn btn-pause"
                  onClick={() => onTimerAction('pause', timer.id)}
                >
                  {timer.isPaused ? 'Resume' : 'Pause'}
                </button>
                <button
                  className="btn btn-reset"
                  onClick={() => onTimerAction('reset', timer.id)}
                >
                  Reset
                </button>
                <button
                  className="btn btn-remove"
                  onClick={() => onTimerAction('remove', timer.id)}
                >
                  X
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountdownTimerList;
