import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spacer from "../components/Spacer";
import TextRenderer from "../components/TextRenderer";
import { fetchPost_data } from "../util";

export default function Room({ cable }) {
  const { room_id } = useParams()

  const [roomObj, setRoomObj] = useState({messages:[]})

  useEffect(() => {
    // manually fetch the room to get it's initial state
    fetch(`/rooms/${room_id}`).then(r=>r.json().then(d=>setRoomObj(d)))

    // subscribe to updates for room
    cable.subscriptions.create({ channel: "RoomsChannel", room_id: room_id },
    {
      connected: () => console.log("room connected!"),
      disconnected: () => console.log("room disconnected!"),
      received: (updatedRoom) => setRoomObj(updatedRoom)
    }
  )}, [cable, room_id])

  return <div id="room" className="col">
    <div className="row panel">
      <h2>{roomObj.name}</h2>
    </div>

    <div className="messages panel col spacer">
      <Spacer/>
      {roomObj.messages.map(message=><Message message={message}/>)}
    </div>

    <ChatBox room_id={room_id}/>
  </div>
}


function ChatBox({ room_id }) {
  const [textContent, setTextContent] = useState("")

  // make enter submit
  // and shift+enter do a new line
  function handleKeyDown({code, shiftKey}) {
    if (code === "Enter" && !shiftKey) {submitMessage()}
  }

  function submitMessage(event) {
    if (event) event.preventDefault() // prevent refresh

    const trimmedText = textContent.trim()
    // dont allow empty messages
    if (trimmedText.replace(/\\n/,"") === "") return

    fetchPost_data("/messages", {text_content:textContent, room_id:room_id})
      .then(r=>{if (r.ok) {setTextContent("")}}) // clear text area
  }

  return <form className="panel chat_container row" onSubmit={submitMessage}>
    <textarea className="elev2" type="text" value={textContent} onChange={e=>setTextContent(e.target.value)} autoFocus={true} onKeyDown={handleKeyDown}/>
    <button className="elev2" type="submit">Send</button>
  </form>
}

function Message({ message }) {
  return <div className="message col">
    <span>{message.user.username}</span>
    <TextRenderer value={message.text_content}/>
  </div>
}