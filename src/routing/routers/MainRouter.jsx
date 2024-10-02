import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import ErrorPage from '../../components/general/ErrorPage'
import Products from '../../screens/Products'
import AddProductCategory from '../../screens/AddProductCategory'

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/products'/>}/>
            <Route path='/' element={<DashboardLayout/>}>
                <Route path='products' element={<Products/>}/>
                <Route path='products/add-products/category' element={<AddProductCategory/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter