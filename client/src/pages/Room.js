import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spacer from "../components/Spacer";
import { fetchPost_data } from "../util";

export default function Room({ cable }) {
  const { room_id } = useParams()

  const [roomObj, setRoomObj] = useState({})

  useEffect(() => {
    // manually fetch the room to get it's initial state
    fetch(`/rooms/${room_id}`).then(r=>r.json(d=>console.log(d)))

    // subscribe to updates for room
    cable.subscriptions.create({ channel: "RoomsChannel", room_id: room_id },
    {
      connected: () => console.log("room connected!"),
      disconnected: () => console.log("room disconnected!"),
      received: (updatedRoom) => console.log("room updated!")
    }
  )}, [cable, room_id])

  return <div id="room" className="col">
    <Spacer/>
    <ChatBox room_id={room_id}/>
  </div>
}


function ChatBox({ room_id }) {
  const [textContent, setTextContent] = useState("")

  function submitMessage(event) {
    event.preventDefault()

    fetchPost_data("/messages", {text_content:textContent, room_id:room_id})
  }

  return <form className="panel" onSubmit={submitMessage}>
    <input className="elev2" type="text" value={textContent} onChange={e=>setTextContent(e.target.value)}/>
  </form>
}