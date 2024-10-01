import React from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../components/Layout'

function ProtectedRoute({ children }) {
    const isAuth = localStorage.getItem('isAuth')

    if (isAuth){
        return <Layout>{children}</Layout>
    }else {
        return <Navigate to={'/login'} replace/>
    }
}

export default ProtectedRoute