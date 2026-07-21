function StatsCards({
  totalUsers,
  revenue,
}) {
  return (
    <div className="stats">
      <div className="card">
        <h3>Total Users</h3>
        <p>{totalUsers}</p>
      </div>

      <div className="card">
        <h3>Revenue</h3>
        <p>₹{revenue}</p>
      </div>
    </div>
  );
}

export default StatsCards;
