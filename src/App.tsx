import * as React from 'react'
import * as DOMRouter from 'react-router-dom'
import * as Pages from './pages/pages'
import * as Toast from 'react-hot-toast'


const App = () =>{
  return (
    <DOMRouter.BrowserRouter>
      <DOMRouter.Routes>
        <DOMRouter.Route path="/" element={<Pages.Home/>} />
        <DOMRouter.Route path="/signin" element={<Pages.SignIn/>} />
        <DOMRouter.Route path='/signup' element={<Pages.SignUp/>} />
        <DOMRouter.Route path='/me' element={<Pages.Me/>} />
        <DOMRouter.Route path='/send' element={<Pages.SendErr/>} />
        <DOMRouter.Route path='/send/:id' element={<Pages.Send/>} />
      </DOMRouter.Routes>

      <Toast.Toaster
        position="top-right"
        reverseOrder={false}
    />
    </DOMRouter.BrowserRouter>
  )
}

export default App