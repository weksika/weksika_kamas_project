import { connect } from "react-redux";
import { Component, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from "react";
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import Nav from './components/nav/nav';

import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";

const DialogsContainer = React.lazy(() => import ('./components/dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/profile/profileContainer'));
const UsersContainer = React.lazy(() => import ('./components/users/usersContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <div className='container'>
              <Nav className='nav' />
              <div className='content'>
                <Suspense fallback={<div><Preloader/></div>}>
                  <Routes>
                  <Route path="/dialogs" element={<DialogsContainer />}></Route>
                  <Route path='/profile/:userId' element={<ProfileContainer />}></Route>
                  <Route path='/profile' element={<ProfileContainer />}></Route>
                  <Route path="/users" element={<UsersContainer />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                </Routes>
                </Suspense>             
              </div>
            </div>
          </div>
        </BrowserRouter >
      )
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
