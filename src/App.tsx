import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './Compo/Effect'
import { Routes , Route } from 'react-router-dom'
import Post from './Compo/Post'

function App() {

  return (
   <>
<Routes>
  <Route path="/" element={<Post/>}></Route>
 

</Routes>
  
   </>
  )
}

export default App
