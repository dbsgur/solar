// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useUser } from '@libs/auth';

function AuthorizedRoute() {
  // const [user] = useUser({ canBeUnauthenticated: true });
  // const location = useLocation();

  if (false) { // !user
    // return <Navigate to={'ROUTE_SIGN_IN'} state={{ from: location }} replace />;
  }

  // return <Outlet />;
}

function UnauthorizedRoute() {
  // const [user] = useUser({ canBeUnauthenticated: true });
  const [user] = [false];
  // const location = useLocation();

  if (user) {
    // const state = location.state as { from?: string } | null;
    // return <Navigate to={state?.from || 'ROUTE_ROOT'} state={{ from: location }} replace />;
  }

  // return <Outlet />;
}

export { AuthorizedRoute, UnauthorizedRoute };
