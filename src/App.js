
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import UsersContainer from './components/users/usersContainer';

function App() {
  return (      

  <BrowserRouter>

    <div className='app-wrapper'>
      <Header/>
      <div className='container'>
        <div className='content'>
          <Nav/>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/users" element={<UsersContainer/>}></Route>
        </Routes>
        </div>
    </div>      
      </div>
       

    </BrowserRouter>
  );
}

export default App;
