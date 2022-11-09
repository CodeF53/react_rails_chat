import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Spacer from "./components/Spacer";
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Home from "./pages/Home";
import { LoginSignup } from "./pages/LoginSignup";

function App() {
  // persistent user through local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  useEffect(() => { localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // auto-login (incase cookie expired or something)
  useEffect(() => {fetch("/me").then((r) => {
    if (r.ok) { r.json().then((user) => setUser(user)); }
    else { setUser(null) }
  });}, []);

  return <div id="app" className="col centered">
    <Header user={user} setUser={setUser}/>

    <Routes>
      <Route path="/"  element={<Home/>}/>

      <Route path="/login"  element={<LoginSignup isLogin={true}  user={user} setUser={setUser} />}/>
      <Route path="/signup" element={<LoginSignup isLogin={false} user={user} setUser={setUser} />}/>
    </Routes>

    <Spacer/>

    <Footer/>
  </div>
}

export default App;
