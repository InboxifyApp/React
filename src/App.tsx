import * as React from 'react'
import * as DOMRouter from 'react-router-dom'
import * as Pages from './pages/pages'

const App = () =>{
  return (
    <DOMRouter.BrowserRouter>
      <DOMRouter.Routes>
        <DOMRouter.Route path="/" element={<Pages.Home/>} />
      </DOMRouter.Routes>
    </DOMRouter.BrowserRouter>
  )
}

export default App