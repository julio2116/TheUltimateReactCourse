import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, { action as CreateOrderAction } from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error'

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/menu',
          element: <Menu />,
          errorElement: <Error />,
          loader: menuLoader
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/order/new',
          action: CreateOrderAction,
          element: <CreateOrder />
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          errorElement: <Error />,
          loader: orderLoader
        }
      ]
    }

  ])

function app() {
  return <RouterProvider router={router} />
}

export default app