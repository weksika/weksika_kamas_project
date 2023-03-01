
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import ProfileContainer from './components/profile/profileContainer';
import UsersContainer from './components/users/usersContainer';

function App() {
  return (      

  <BrowserRouter>

    <div className='app-wrapper'>
      <Header/>
      <div className='container'>
          <Nav className= 'nav'/>
          <div className='content'>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer/>}></Route>
          <Route path="/profile" element={<ProfileContainer/>}></Route>
          <Route path="/users" element={<UsersContainer/>}></Route>
        </Routes>
        </div>
    </div>      
      </div>
       

    </BrowserRouter>
  );
}

export default App;
