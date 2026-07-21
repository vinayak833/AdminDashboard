function Reports({
  totalUsers,
  revenue,
}) {
  return (
    <div>
      <h2>Reports</h2>

      <p>
        Total Users: {totalUsers}
      </p>

      <p>
        Revenue: ₹{revenue}
      </p>
    </div>
  );
}

export default Reports;
