import { users } from "./users";
import UserListItem from "./UserListItem";

function UsersList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>

      {users.map((user) => (
        <UserListItem
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          age={user.age}
          imgSrc={user.imgSrc}
        />
      ))}
    </div>
  );
}

export default UsersList;
