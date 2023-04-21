import * as React from 'react'
import * as DOMRouter from 'react-router-dom'
import * as Pages from './pages/pages'
import * as Toast from 'react-hot-toast'


console.log(JSON.stringify(import.meta.env.VITE_API))
const App = () =>{
  return (
    <DOMRouter.BrowserRouter>
      <DOMRouter.Routes>
        <DOMRouter.Route path="/" element={<Pages.Home/>} />
        <DOMRouter.Route path="/signin" element={<Pages.SignIn/>} />
        <DOMRouter.Route path='/signup' element={<Pages.SignUp/>} />
      </DOMRouter.Routes>

      <Toast.Toaster
        position="top-right"
        reverseOrder={false}
    />
    </DOMRouter.BrowserRouter>
  )
}

export default App