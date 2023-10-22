import "./Schedule.css";
import trainsSchedule from "../../../data.json";
import TrainList from "../TrainList/TrainList";

const Schedule = () => {
  const { trains } = trainsSchedule;
  // console.log(trains);
  return (
    <div className="schedule-container">
      {trains.map((train) => (
        <TrainList train={train} key={train.id}></TrainList>
      ))}
    </div>
  );
};

export default Schedule;
