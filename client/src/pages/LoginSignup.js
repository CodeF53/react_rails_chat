import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Spacer from "../components/Spacer"
import { fetchPost_data } from "../util"

export function LoginSignup({ isLogin, user, setUser }) {
  const navigate = useNavigate()
  if (user) navigate("/")

  const [username, setUsername]   = useState("")
  const [password, setPassword]   = useState("")
  const [errors, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault() // prevent refresh
    setErrors([]) // clear errors

    fetchPost_data(isLogin?"/login":"/signup", { username: username, password: password })
    .then(r => { r.json().then( data => {
      if (r.ok) {
        setUser(data) // save user details
        navigate("/") // send user back to home
      } else {
        setErrors(data.errors)
      }
    })})
  }

  const errorsNode = <div className="errors">
    {errors.map(error => <span className="error">{error}</span>)}
  </div>

  return <form onSubmit={handleSubmit} className="centered col panel" id="login_signup">
    <h1>{isLogin? "Log In": "Sign Up"}</h1>

    <input className="elev2" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="username" type="text"/>
    <input className="elev2" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="password" type="password"/>

    <div className="row">
      <button className="centered elev2" type="submit">Submit</button>
      <Spacer/>
      <span className="centered"> {isLogin? "New? ":"Not New? "}
        <Link className="link" to={isLogin? "/signup":"/login"}>{isLogin? "Sign Up":"Log In"}</Link>
      </span>
    </div>
    {errorsNode}
  </form>
}