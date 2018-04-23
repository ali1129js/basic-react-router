/**
 * @Author: Ali Ismail
 * @Date:   2018-04-15T16:34:41+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-23T15:43:50+02:00
 */
 import React, { Component } from 'react'
 import About from './components/About'
 import Topics from './components/Topics'
 import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom'

 const Home = () => (
   <div>
     <h2>Home</h2>
   </div>
 )

 class App extends Component {
   render() {
     return (

         <Router>
           <div>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/topics">Topics</Link></li>
             </ul>
             <hr/>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/topics" component={Topics}/>
           </div>
         </Router>

     )
   }
 }

 export default App
