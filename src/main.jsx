import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuContainer from './component/MenuContainer.jsx';
import WatchPage from './component/WatchPage.jsx';
import Body from './component/Body.jsx'
import { Provider } from 'react-redux';
import Header from "./component/Header.jsx"
import store from './utils/store'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MenuContainer />
      },
      {
        path: "watch",
        element: <WatchPage />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <Header/>
    <RouterProvider router={appRouter} />
  </StrictMode>
  </Provider>

)
