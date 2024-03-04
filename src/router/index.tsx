import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from '../components/Home';
import ConfirmEmail from '../components/ConfirmEmail';
import EmailVerificationPage from '../components/EmailVerificationPage';

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/email" element={<ConfirmEmail />}></Route>
      <Route path="/email-verification" element={<EmailVerificationPage />}></Route>

    </Routes>
  )
}

export default MyRouter