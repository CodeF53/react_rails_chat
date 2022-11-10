import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../components/Spacer";
import { fetchPost_data } from "../util";

export default function CreateRoom() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [errors, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault() // prevent refresh
    setErrors([]) // clear errors

    if (name.length === 0) { setErrors(["it's gotta have a name ya nitwit"]); return }

    fetchPost_data("/rooms", {name:name}).then(r=>r.json().then(data=>{
      if (r.ok) { navigate(`/room/${data.id}`) }
      else { setErrors(data.errors) }
    }))
  }

  const errorsNode = <div className="errors col">
    {errors.map(error => <span className="error">{error}</span>)}
  </div>

  return <form id="create_room" onSubmit={handleSubmit} className="centered col panel">
    <h1>Create a room</h1>

    <input className="elev2" onChange={e=>{setName(e.target.value)}} value={name} placeholder="Room Name" type="text"/>

    <div className="row">
      {errorsNode}
      <Spacer/>
      <button className="centered elev2" type="submit">Submit</button>
    </div>
  </form>
}