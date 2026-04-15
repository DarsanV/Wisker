function TaskList({ tasks, loading, error, onToggle, onEdit, onDelete }) {
    if (error) {
        return <p className="error">{error}</p>;
    }

    if (loading) {
        return <p className="muted">Loading tasks...</p>;
    }

    if (tasks.length === 0) {
        return <p className="muted">No tasks match your filter.</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={`task-card ${task.completed ? "done" : ""}`}>
                    <div>
                        <h3>{task.title}</h3>
                        <p>{task.description || "No description"}</p>
                        <div className="meta">
                            <span className={`badge ${(task.priority || "MEDIUM").toLowerCase()}`}>
                                {task.priority || "MEDIUM"}
                            </span>
                            <span>Due: {task.dueDate || "No date"}</span>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="ghost-btn" onClick={() => onToggle(task)}>
                            {task.completed ? "Mark Active" : "Mark Done"}
                        </button>
                        <button className="ghost-btn" onClick={() => onEdit(task)}>Edit</button>
                        <button className="danger-btn" onClick={() => onDelete(task.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
