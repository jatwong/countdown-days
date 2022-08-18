import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/verification">Verification</Link>
      </li>
      <li>
        <Link to="/entries">List of Entries</Link>
      </li>
      <li>
        <Link to="/add-entry">Add Entry</Link>
      </li>
      <li>
        <Link to="/view-entry">View Entry (hard-coded exampe)</Link>
      </li>
    </ul>
  );
};

export default Home;
