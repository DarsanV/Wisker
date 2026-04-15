const API_URL = "http://localhost:8080/api/wisker";

async function fetchTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong><br>
                <small>${task.description || ""}</small>
            </div>
            <div class="task-actions">
                <button class="complete" onclick="toggleComplete(${task.id}, ${task.completed})">
                    ${task.completed ? "Undo" : "Done"}
                </button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        if (task.completed) li.style.textDecoration = "line-through";
        taskList.appendChild(li);
    });
}

async function addTask() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;

    if (!title) {
        alert("Please enter a task title!");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, description: desc, completed: false })
    });

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    fetchTasks();
}

async function toggleComplete(id, currentStatus) {
    const res = await fetch(`${API_URL}/${id}`);
    const task = await res.json();

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: task.title,
            description: task.description,
            completed: !currentStatus
        })
    });

    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTasks();
}

window.onload = fetchTasks;
