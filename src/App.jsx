import Main from './components/Main';
import Service from './components/Service';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "services/:id",
        element: <Service />,
      },
    ],
  },
]);

function App() {

  return (
    <div className='font-poppins'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
