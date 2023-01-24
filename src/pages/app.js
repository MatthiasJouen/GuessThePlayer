import { Router, Link } from "@reach/router"
import React from 'react'
import Layout from '../components/Layout'
import MyInfo from '../components/MyInfo'


const App = ({location}) => {
    return (
        <Layout>
            <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
            
            <Link to='/app/info'><button>Show info component</button></Link>
    
            <Router basepath="/app">
                <MyInfo path="/info" />
            </Router>
        </Layout>
    )
}
export default App;