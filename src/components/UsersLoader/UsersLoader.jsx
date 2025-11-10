import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import "./UsersLoader.scss";

function UsersLoader() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [count]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=${count}`
      );
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Помилка при завантаженні користувачів:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="users-loader">
      <h2 className="users-loader__title">Список користувачів</h2>

      <div className="users-loader__controls">
        <label>
          Кількість користувачів:
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </label>
        <button onClick={fetchUsers}>Оновити</button>
      </div>

      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <div className="users-loader__list">
          {users.map((user, index) => (
            <UserCard key={user.login.uuid || index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersLoader;
