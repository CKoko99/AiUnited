import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#0E76BC',
    },
    secondary: {
      main: '#A05851'
    }
  },
});
function App() {

  const router = createBrowserRouter([
    {
      //parebt route component
      element: <Layout />,
      errorElement: <h1>Not Found</h1>,
      //child routes
      children: [
        {
          path: "/home", element: <Home />
        },
      ]
    },

  ]);
  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
}

export default App;
