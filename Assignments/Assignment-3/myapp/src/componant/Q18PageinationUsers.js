import React, { useEffect, useState } from "react";

export default function Q18PaginationUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  const start = page * 5;
  const end = start + 5;
  const visible = users.slice(start, end);

  return (
    <div>
      <h2>Users Pagination</h2>
      <ul>
        {visible.map(u => (
          <li key={u.id}>{u.firstName} {u.lastName}</li>
        ))}
      </ul>
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
      <button disabled={end >= users.length} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
