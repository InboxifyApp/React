import * as React from 'react'
import * as DOMRouter from 'react-router-dom'
import * as Pages from './pages/pages'



console.log(JSON.stringify(import.meta.env.VITE_API))
const App = () =>{
  return (
    <DOMRouter.BrowserRouter>
      <DOMRouter.Routes>
        <DOMRouter.Route path="/" element={<Pages.Home/>} />
        <DOMRouter.Route path="/signin" element={<Pages.SignIn/>} />
        <DOMRouter.Route path='/signup' element={<Pages.SignUp/>} />
      </DOMRouter.Routes>
    </DOMRouter.BrowserRouter>
  )
}

export default App