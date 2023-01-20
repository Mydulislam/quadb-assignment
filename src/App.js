import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import MovieSummary from './Components/MovieSummary/MovieSummary';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
    },
    {
      path:'/summary/:id',
      loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`),
      element:<MovieSummary></MovieSummary>
    }
  ])
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
