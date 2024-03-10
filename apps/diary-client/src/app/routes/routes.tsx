import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import {
  ROUTE_ROOT,
  ROUTE_HOME,
  ROUTE_DIARY,
  ROUTE_DIARY_WRITE,
  ROUTE_DIARY_POEM,
  ROUTE_DIARY_VIDEO,
} from './const';
import {
  HomeScreen,
  DiaryPoemScreen,
  DiaryVideoScreen,
  DiaryWriteScreen,
} from '~screens';
import { Layout } from '~components';
import { UnauthorizedRoute } from '~libs/auth-router';

export const AppRouter = createBrowserRouter([
  {
    path: ROUTE_ROOT,
    element: <UnauthorizedRoute />,
    children: [
      {
        path: ROUTE_HOME,
        element: <HomeScreen />,
      },
      {
        path: ROUTE_DIARY,
        element: <Outlet />, // TODO: Add 공통 background Image
        children: [
          { path: ROUTE_DIARY_WRITE, element: <DiaryWriteScreen /> },
          { path: ROUTE_DIARY_POEM, element: <DiaryPoemScreen /> },
          { path: ROUTE_DIARY_VIDEO, element: <DiaryVideoScreen /> },
        ],
      },
    ],
  },
]);
