import React from "react";
import Home from "./pages/Dashboard/Home";
import Login from "./pages/login/login";
import Signup from "./pages/Signup/Signup";
import Chats from "./pages/chats/chats";
import UpdateProfile from "./pages/updateProfile/updateProfile";
import ViewProfile from "./pages/viewProfile/viewProfile";
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import ProtectedRoute from "./pages/protectedRoute";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/chats" element={<Chats/>}/> 
          <Route path='/updateprofile/:id' element={<UpdateProfile/>}/> 
          <Route path='/viewprofile/:id' element={<ViewProfile/>}/> 
          </Route>
          <Route index element={<Signup/>} path="/"/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}
{/* <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Admin/>} path="/home" exact/>
            <Route element={<Users/>} path="/users"/>
            <Route element={<Messages/>} path="/messages"/>
          </Route>
          <Route exact element={<AdminLogin/>} path="/"/>
        </Routes>
      </Router> */}

export default App;
