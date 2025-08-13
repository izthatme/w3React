import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homes from './components/Homes'
import Abouts from './components/Abouts'
import Dashboards from './components/Dashboards'
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  [
    {path:"/",
      element : <div>
        <Navbar/>
        <Homes/>
      </div>
    },
    {path:"/Abouts",
      element :  <div>
        <Navbar/>
        <Abouts/>
      </div>
    },
    {path:"/Dashboards",
      element :  <div>
        <Navbar/>
        <Dashboards/>
      </div>
    },
  ]

)



function App() {
  

  return (
    <div>
      <RouterProvider  router={router} />
    </div>
  )
}

export default App
