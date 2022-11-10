import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../components/Spacer";

export default function FindRoom() {
  const navigate = useNavigate()

  const [rooms, setRooms] = useState([])
  const getRooms = e=> fetch("rooms").then(r=>r.json().then(d=>setRooms(d)))
  // get rooms when page first loads
  useEffect(() => { getRooms() }, [])

  return <div id="find_room" className="col centered panel">
    <div className="row">
      <h1>Rooms</h1>
      <Spacer/>
      <button className="elev2">Refresh</button>
    </div>
    <div className="col rooms">
      {rooms.map(room=><Room room={room} key={room.id} navigate={navigate}/>)}
    </div>
  </div>
}

function Room({ room, navigate }) {

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/room/${room.id}`)
  }

  return <form className="row room panel elev2" onSubmit={handleSubmit}>
    <span>{room.name}</span>
    <Spacer/>
    <button type="submit" className="elev3">Join room</button>
  </form>
}