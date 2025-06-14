import { PublicLayout } from "@/components/templates/";
import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages";

const routes: RouteObject[] = [
	{
		element: <PublicLayout />,
		children: [
			{
				element: <Home />,
				path: "/",
			}
		],
	}
];

export default routes;

