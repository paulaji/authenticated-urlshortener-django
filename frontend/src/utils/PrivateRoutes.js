import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // setting authenticated variable in such a way that we don't have token at first
  let authenticated = { token: false };
  // if token becomes true, the outlet will be processed, in this case, homepage will be accessible
  return authenticated.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
