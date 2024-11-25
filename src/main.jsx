import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/Users/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    //sandwiching all the pages in other, wherever you want to put other link just put that route inside content of parent route
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>  
      <Route path='user/' element = {<User/>}>
         <Route path=':userId' element = {<User/>}/>
      </Route>
      <Route 
      loader = {githubInfoLoader}
      path='github' 
      element = {<Github/>}/>
      <Route path='*' element = {<div>Not Found</div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
