
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div className="App m-1">
            <Header/>
            <RouterProvider router={appRouter} />
            <Footer/>
      </div>
    </Provider>
  );
}

export default App;
