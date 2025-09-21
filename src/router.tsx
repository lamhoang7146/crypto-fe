import { createBrowserRouter, Outlet } from 'react-router-dom';
import { privateRouters, publicRouters } from '@/routes/index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		errorElement: <div>Not Found</div>,
		children: [
			...publicRouters,
			...privateRouters
		]
	}
]);

export default router;
