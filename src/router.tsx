import { createBrowserRouter, Outlet } from 'react-router-dom';
// import { PublicLayout } from '@/components/templates/PublicLayout/index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet /> ,
		
		// children: [
		// 	{
		// 		path: '/login'
		// 	},
		// 	{
		// 		path: '/register'
		// 	}
		// ]
	}
]);

export default router;
