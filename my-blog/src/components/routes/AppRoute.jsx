import React from 'react'
import Header from '../header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'

const AppRoute = () => {
  return <Router>
  <Routes>
      <Route path="/" element={<Home />}></Route>
  </Routes>
</Router>
}

export default AppRoute