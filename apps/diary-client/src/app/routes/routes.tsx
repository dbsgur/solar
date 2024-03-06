import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import {
  ROUTE_ROOT,
  ROUTE_DIARY,
  ROUTE_DIARY_WRITE,
  ROUTE_DIARY_POEM,
  ROUTE_DIARY_VIDEO,
} from './const';

export const router = createBrowserRouter([
  {
    path: ROUTE_ROOT,
    element: <Hello />,
  },
  {
    path: ROUTE_DIARY,
    element: <div>Diary</div>,
    children: [
      {
        path: ROUTE_DIARY_WRITE,
        element: <div>Write</div>,
      },
      {
        path: ROUTE_DIARY_POEM,
        element: <div>Poem</div>,
      },
      {
        path: ROUTE_DIARY_VIDEO,
        element: <div>Video</div>,
      },
    ],
  },
]);

function Hello() {
  return (
    <>
      <div>Hello world!</div>
      <Link to="/diary"> diary</Link>
    </>
  );
}
