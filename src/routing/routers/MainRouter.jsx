import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<DashboardLayout/>}>
                <Route path='testing' element={<div>testing successs</div>}/>
                <Route path='noo' element={<div>successs</div>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter