import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Discover from './pages/Discover/Discover'
import Bookmarks from './pages/Bookmarks/Bookmarks'
import Lists from './pages/Lists/Lists'
import Messages from './pages/Messages/Messages'
import Notifications from './pages/Notifications/Notifications'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Verified from './pages/Verified/Verified'
import MainLayout from './layouts'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'discover',
                element: <Discover />
            },
            {
                path: 'bookmarks',
                element: <Bookmarks />,

            },
            {
                path: 'lists',
                element: <Lists />,

            },
            {
                path: 'messages',
                element: <Messages />,

            },
            {
                path: 'notifications',
                element: <Notifications />,

            },
            {
                path: 'profilePage',
                element: <ProfilePage />,

            },
            {
                path: 'verified',
                element: <Verified />,

            }
        ]
    }


])


export default routes
