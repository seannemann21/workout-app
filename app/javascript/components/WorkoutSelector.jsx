import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Card = ({ description, icon }) => (
  <div className="flex-col w-72">
    <div className="h-60 bg-gray-50 rounded-t-3xl border-t-2 border-l-2 border-r-2 border-gray-600 flex justify-center items-center">
      <div className="text-7xl text-gray-600">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
    <div className="h-40 bg-gray-600 rounded-b-3xl flex justify-center items-center">
      <div className="text-4xl font-bold text-white">{description}</div>
    </div>
  </div>
);

const WorkoutSelector = () => {
  return (
    <div>
      <div>Workout Selector</div>
      <div className="flex justify-center">
        <div className="m-8">
          <Card icon={faHeart} description="Cardio"/>
        </div>
        <div className="m-8">
          <Card icon={faDumbbell} description="Strength"/>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSelector;
