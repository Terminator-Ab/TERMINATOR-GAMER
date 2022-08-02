import Header from "./Components/Header";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";

function App() {
   return(
    <div className="App">
    <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Team" element={<Team/>} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
   
    </div>
   );    
}




export default App;