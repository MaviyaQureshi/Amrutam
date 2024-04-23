import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page1 />
  },
  {
    path: '/profile',
    element: <Page2 />
  },
])

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
