import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Landingpage/Landing';
import User from './components/User/User';
import UserRegistre from './components/User/UserRegistre';


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route exact path="/" element={ <Landing/>} />
         <Route path="/user" element={<User/>} />
         <Route path="/usercreate" element={<UserRegistre/>} />

        {/*<Route path="/activity" element={<CreateActivity/>} />
        <Route path="/countries/:id" element={<CountryDetail/>} /> */}


        {/* <Route path="" element = {<details/>} /> */}
        
    </Routes>
    </div>
  </Router>   

);
}

export default App;
