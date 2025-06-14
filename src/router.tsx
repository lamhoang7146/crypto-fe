import { createBrowserRouter, Outlet } from 'react-router-dom';
import { privateRouter, publicRouter } from '@/routes/index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		errorElement: <div>Not Found</div>,
		children: [
			...publicRouter,
			...privateRouter
		]
	}
]);

export default router;
