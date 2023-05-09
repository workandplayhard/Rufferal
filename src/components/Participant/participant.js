import React, { useState } from 'react';

const Participant = ({ competitionId, taskMessage }) => {
  const [taskCompleted, setTaskCompleted] = useState(false);

  const completeTask = async () => {
    const response = await fetch('/task_completed/' + competitionId, { method: 'POST' });

    if (response.ok) {
      setTaskCompleted(true);
      alert('Task completed!');
    } else {
      alert('Error completing task.');
    }
  };

  return (
    <div>
      <div>{taskMessage}</div>
      <button onClick={completeTask} disabled={taskCompleted}>
        {taskCompleted ? 'Task completed' : 'I have completed the task'}
      </button>
    </div>
  );
};

export default Participant;
