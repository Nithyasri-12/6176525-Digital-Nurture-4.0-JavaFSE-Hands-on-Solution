import React from "react";
import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.trainerId === id);

  if (!trainer) {
    return <p>Trainer not found.</p>;
  }

  return (
    <div>
      <h2>{trainer.name} - {trainer.technology}</h2>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(", ")}</p>
    </div>
  );
};

export default TrainerDetail;
