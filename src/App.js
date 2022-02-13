import React from 'react'
import { Home } from './Component/Home'
import { Navbar } from './Component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import { Preview } from '@mui/icons-material';
import User from './users/User';

export const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/users/add" element={<AddUser/>} />

           <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="/user/:id" element={<User/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
