function StatCard({ label, value }) {
    return (
        <article className="stat-card">
            <p>{label}</p>
            <h3>{value}</h3>
        </article>
    );
}

function StatsGrid({ stats }) {
    return (
        <section className="stats-grid">
            <StatCard label="Total Tasks" value={stats.total} />
            <StatCard label="Active" value={stats.active} />
            <StatCard label="Completed" value={stats.completed} />
        </section>
    );
}
