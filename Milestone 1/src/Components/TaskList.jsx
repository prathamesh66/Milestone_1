function TaskList({ tasks, setTasks }) {
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
