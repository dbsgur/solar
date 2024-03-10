import { Layout } from '~components';
import { Outlet } from 'react-router-dom';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useUser } from '@libs/auth';

function AuthorizedRoute() {
  // const [user] = useUser({ canBeUnauthenticated: true });
  // const location = useLocation();

  if (false) {
    // !user
    // return <Navigate to={'ROUTE_SIGN_IN'} state={{ from: location }} replace />;
  }

  // return <Outlet />;
}

// NOTE: 현재는 로그인이 필요한 기능이 없기 때문에 UnauthorizedRoute만 사용합니다.
function UnauthorizedRoute() {
  // const [user] = useUser({ canBeUnauthenticated: true });
  // const [user] = [false];
  // const location = useLocation();

  // if (user) {
  // const state = location.state as { from?: string } | null;
  // return <Navigate to={state?.from || 'ROUTE_ROOT'} state={{ from: location }} replace />;
  // }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export { AuthorizedRoute, UnauthorizedRoute };
