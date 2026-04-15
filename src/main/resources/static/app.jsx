const { useEffect, useMemo, useState } = React;

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [darkMode, setDarkMode] = useState(localStorage.getItem("wisker-theme") === "dark");
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "MEDIUM",
        dueDate: ""
    });

    useEffect(() => {
        document.documentElement.dataset.theme = darkMode ? "dark" : "light";
        localStorage.setItem("wisker-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        setLoading(true);
        setError("");
        try {
            const data = await TaskApi.getAll();
            setTasks(data);
        } catch (e) {
            setError(e.message || "Unexpected error.");
        } finally {
            setLoading(false);
        }
    }

    async function saveTask(e) {
        e.preventDefault();
        if (!form.title.trim()) {
            setError("Task title is required.");
            return;
        }

        const payload = {
            title: form.title.trim(),
            description: form.description.trim(),
            priority: form.priority,
            dueDate: form.dueDate || null,
            completed: false
        };

        if (editingId) {
            const existing = tasks.find((task) => task.id === editingId);
            payload.completed = existing ? existing.completed : false;
        }

        try {
            setError("");
            if (editingId) {
                await TaskApi.update(editingId, payload);
            } else {
                await TaskApi.create(payload);
            }
            clearForm();
            await fetchTasks();
        } catch (e) {
            setError(e.message || "Unexpected error while saving.");
        }
    }

    async function removeTask(id) {
        try {
            await TaskApi.remove(id);
            await fetchTasks();
        } catch (e) {
            setError(e.message || "Unexpected error while deleting.");
        }
    }

    async function toggleTask(task) {
        try {
            await TaskApi.update(task.id, {
                title: task.title,
                description: task.description || "",
                priority: task.priority || "MEDIUM",
                dueDate: task.dueDate || null,
                completed: !task.completed
            });
            await fetchTasks();
        } catch (e) {
            setError(e.message || "Unexpected error while updating.");
        }
    }

    function startEdit(task) {
        setEditingId(task.id);
        setForm({
            title: task.title || "",
            description: task.description || "",
            priority: task.priority || "MEDIUM",
            dueDate: task.dueDate || ""
        });
    }

    function clearForm() {
        setEditingId(null);
        setForm({
            title: "",
            description: "",
            priority: "MEDIUM",
            dueDate: ""
        });
    }

    const filteredTasks = useMemo(() => {
        let list = [...tasks];

        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter((task) =>
                `${task.title} ${task.description || ""}`.toLowerCase().includes(q)
            );
        }

        if (statusFilter === "active") {
            list = list.filter((task) => !task.completed);
        } else if (statusFilter === "completed") {
            list = list.filter((task) => task.completed);
        }

        list.sort((a, b) => {
            if (sortBy === "newest") {
                return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
            }
            if (sortBy === "oldest") {
                return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
            }
            if (sortBy === "priority") {
                const score = { HIGH: 3, MEDIUM: 2, LOW: 1 };
                return (score[b.priority] || 0) - (score[a.priority] || 0);
            }
            return 0;
        });

        return list;
    }, [tasks, query, statusFilter, sortBy]);

    const stats = useMemo(() => {
        const total = tasks.length;
        const completed = tasks.filter((task) => task.completed).length;
        const active = total - completed;
        return { total, completed, active };
    }, [tasks]);

    return (
        <div className="page">
            <header className="topbar">
                <div>
                    <h1>Wisker Task Dashboard</h1>
                    <p>Modern React task manager with Spring Boot + MySQL.</p>
                </div>
                <button className="ghost-btn" onClick={() => setDarkMode((value) => !value)}>
                    {darkMode ? "Light mode" : "Dark mode"}
                </button>
            </header>

            <StatsGrid stats={stats} />

            <main className="layout">
                <TaskForm
                    form={form}
                    editingId={editingId}
                    onSubmit={saveTask}
                    onCancelEdit={clearForm}
                    onChange={setForm}
                />

                <section className="panel">
                    <TaskToolbar
                        query={query}
                        statusFilter={statusFilter}
                        sortBy={sortBy}
                        onQueryChange={setQuery}
                        onStatusChange={setStatusFilter}
                        onSortChange={setSortBy}
                    />
                    <TaskList
                        tasks={filteredTasks}
                        loading={loading}
                        error={error}
                        onToggle={toggleTask}
                        onEdit={startEdit}
                        onDelete={removeTask}
                    />
                </section>
            </main>
        </div>
    );
}
