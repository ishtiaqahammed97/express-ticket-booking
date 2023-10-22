// import React from 'react';
import "./TrainList.css";

const TrainList = (props) => {
  const { name, time, destination } = props.train;
  return (
    <div>
      <div className="card">
        <div className="train-name">{name}</div>
        <div className="time-destination">Time: {time}</div>
        <div className="time-destination">Destination: {destination}</div>
      </div>
    </div>
  );
};

export default TrainList;
