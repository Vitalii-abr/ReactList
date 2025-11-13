import { Link } from "react-router-dom";

export default function ComponentsPage() {
  return (
    <div>
      <h1>Components</h1>

      <ul>
        <li>
          <Link to="/components/counter">Counter</Link>
        </li>
        <li>
          <Link to="/components/user">User</Link>
        </li>
      </ul>
    </div>
  );
}
