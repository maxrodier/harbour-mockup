import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Mentor from './pages/Mentor';
import Assessment from './pages/Assessment';
import CodeHealth from './pages/CodeHealth';


const App = () => {
  return (
    <BrowserRouter basename="/harbour-mockup">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/mentor" element={<Mentor />} />
                <Route path="/codehealth" element={<CodeHealth />}></Route>
                <Route path="/assessment" element={<Assessment />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;