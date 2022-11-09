import { Link } from "react-router-dom";
import Spacer from "../components/Spacer";
import { fetchDelete } from "../util";

export default function Header({ user, setUser }) {
  const handleLogoutClick = e => fetchDelete("/logout").then(r => setUser(null))

  return <nav className="row">
    <button><Link to="/">Home</Link></button>

    <Spacer/>

    {user? <>
      <span>Logged in as {user.username}</span>
      <button onClick={handleLogoutClick}>Log Out</button>
    </>:
    <>
      <button><Link to="/login" >Log In</Link></button>
      <button><Link to="/signup">Sign Up</Link></button>
    </>}
  </nav>
}