const PRIORITIES = ["LOW", "MEDIUM", "HIGH"];

function TaskForm({
    form,
    editingId,
    onSubmit,
    onCancelEdit,
    onChange
}) {
    return (
        <section className="panel">
            <h2>{editingId ? "Edit Task" : "Create Task"}</h2>
            <form onSubmit={onSubmit} className="form-grid">
                <input
                    value={form.title}
                    onChange={(e) => onChange({ ...form, title: e.target.value })}
                    placeholder="Task title"
                    maxLength={120}
                    required
                />
                <textarea
                    value={form.description}
                    onChange={(e) => onChange({ ...form, description: e.target.value })}
                    placeholder="Description (optional)"
                    rows={4}
                />
                <div className="row">
                    <select
                        value={form.priority}
                        onChange={(e) => onChange({ ...form, priority: e.target.value })}
                    >
                        {PRIORITIES.map((priority) => (
                            <option key={priority} value={priority}>{priority}</option>
                        ))}
                    </select>
                    <input
                        type="date"
                        value={form.dueDate}
                        onChange={(e) => onChange({ ...form, dueDate: e.target.value })}
                    />
                </div>
                <div className="row">
                    <button type="submit">{editingId ? "Update Task" : "Add Task"}</button>
                    {editingId && (
                        <button type="button" className="ghost-btn" onClick={onCancelEdit}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </section>
    );
}
