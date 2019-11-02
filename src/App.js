import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      (
        <div className="wrapper">
          <Navbar/>
          <Sidebar/>
          <Home/>
          <Footer/>
        </div>
      )
    )
  }
}

export default App