
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/dialogsContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import Nav from './components/nav/nav';
import ProfileContainer from './components/profile/profileContainer';
import UsersContainer from './components/users/usersContainer';

function App() {
  return (      

  <BrowserRouter>

    <div className='app-wrapper'>
      <HeaderContainer/>
      <div className='container'>
          <Nav className= 'nav'/>
          <div className='content'>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer/>}></Route>
          <Route path='/profile/:userId' element={<ProfileContainer/>}></Route>
          <Route path='/profile' element={<ProfileContainer/>}></Route>
          <Route path="/users" element={<UsersContainer/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </div>
    </div>      
      </div>
       

    </BrowserRouter>
  );
}

export default App;
