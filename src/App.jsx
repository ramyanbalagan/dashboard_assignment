import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './utils/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Connections from './pages/Connections'

function App() {

  return (
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path='/connections' element={<ProtectedRoute><Connections /></ProtectedRoute>}/>
        <Route path='/*' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>

      </Routes>
  )
}

export default App
