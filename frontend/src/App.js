import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
 import Signup from './Signup/Signup';
 import Login from './Login/Login';
import { Db } from './db/Db';
import Edit from './Edit/Edit';
import { States } from './States';
import AddMovies from './AddMovies/AddMovies';
import { Review } from './Review/Review';
import { Home } from './Home/Home';
import { UserDb } from './UserDb/UserDb';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <States>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Db/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/add" element={<AddMovies/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/user" element={<UserDb/>}/>
        </Routes>
      </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
