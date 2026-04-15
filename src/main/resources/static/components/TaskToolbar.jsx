function TaskToolbar({
    query,
    statusFilter,
    sortBy,
    onQueryChange,
    onStatusChange,
    onSortChange
}) {
    return (
        <div className="toolbar">
            <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search tasks"
            />
            <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
}
