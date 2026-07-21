function Users({
  users,
  deleteUser,
}) {
  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}

            <button
              onClick={() =>
                deleteUser(user.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
