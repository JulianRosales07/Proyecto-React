import React from  'react';
import Mainpage from  './componentes/mainpage/mainpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage } from './componentes/homepage/homepage';
import { Celularespage } from './componentes/Celulares/Celularespage';
import { Juegospage } from './componentes/juegos/Juegospage';
import { Avionespage } from './componentes/Avionespage/Avionespage';


const router= createBrowserRouter([
  {
    path: "/",
    element: <Mainpage/>
  },
  {
    path: "/home",
    element: <Homepage/>
  },
  {
    path:"/celulares",
    element:<Celularespage/>
  },
  {
    path:"/juegos",
    element:<Juegospage/>
  },
  {
    path:"/aviones",
    element:<Avionespage/>
  }

]);

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  )
}
export default App
