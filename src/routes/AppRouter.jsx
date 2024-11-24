import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import App from '../App'
import SidebarContact from '../components/SidebarContact'
import PostContainer from '../components/PostContainer'
import SidebarMenu from '../components/SidebarMenu'
import useUserStore from '../Stores/userStore'


const guestRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '*', element: <Navigate to='/' /> }
])

const userRouter = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            {
                path: '', element: <>
                    {/* left */}
                    <SidebarMenu />


                    {/* center */}
                    <PostContainer />


                    {/* right */}
                    <SidebarContact />

                </>
            },
            { path: 'friends', element: <p>Friends Page</p> },
            { path: '*', element: <Navigate to='/' /> }
        ]

    },
]
)

export default function AppRouter() {
    const user = useUserStore(state => state.user)
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}