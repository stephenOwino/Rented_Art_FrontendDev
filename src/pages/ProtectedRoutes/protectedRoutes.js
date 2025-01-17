import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
	const { user } = useSelector((state) => state.auth);
	const location = useLocation();

	// Public routes: Home ("/"), Login, and Signup
	const publicRoutes = ["/", "/login", "/signup"];

	// Allow access to public routes or protect others based on authentication
	if (publicRoutes.includes(location.pathname)) {
		return <Outlet />;
	}

	// Redirect to login if not authenticated and trying to access protected routes
	return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
