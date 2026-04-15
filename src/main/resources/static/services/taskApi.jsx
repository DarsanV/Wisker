const API_URL = "/api/wisker";

const TaskApi = {
    async getAll() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Could not load tasks.");
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    },

    async create(task) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            const body = await response.text();
            throw new Error(body || "Could not create task.");
        }
        return response.json();
    },

    async update(id, task) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            const body = await response.text();
            throw new Error(body || "Could not update task.");
        }
        return response.json();
    },

    async remove(id) {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) {
            throw new Error("Could not delete task.");
        }
    }
};
