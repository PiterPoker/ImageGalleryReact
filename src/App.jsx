import React, { Suspense, lazy } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));

import { getIsAccept } from './slices/termsOfUseSlice'
import { useSelector } from 'react-redux'

import constants from './common/constatnts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const isAccept = useSelector(getIsAccept)
  console.log(isAccept)
  return (
    <BrowserRouter>
      <Navbar routes={constants.arrayRoutes}></Navbar>
      <Routes>
        <Route path={constants.routes.Home}  element={<Home isAccept={isAccept}/>} />
        <Route path={constants.routes.Gallery} element={<Gallery isAccept={isAccept}/>} />
        <Route path={constants.routes.TremsOfUse} element={<TermsOfUse />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
