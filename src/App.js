import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import MovieSummary from './Components/MovieSummary/MovieSummary';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/summary',
          element:<MovieSummary></MovieSummary>
        }
      ]
    }
  ])
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
