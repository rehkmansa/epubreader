import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

const routeMatches = import.meta.glob('./pages/**/*.{js,ts,jsx,tsx}', {
  eager: true,
});

type Module = { default: () => JSX.Element };

enum MODULE_TYPE {
  PAGE = 'page',
  LOADER = 'loader',
}

const extractUrl = (route: string) => route.replace('./pages', '').replace('/page.tsx', '');

const getRouteInfo = (route: string) => {
  if (route.includes('page.tsx')) {
    return { type: MODULE_TYPE.PAGE, url: extractUrl(route) };
  }
};

const routes = Object.entries(routeMatches).reduce((acc, curr) => {
  const meta = getRouteInfo(curr[0]);
  const module = curr[1] as Module;

  if (meta?.type === MODULE_TYPE.PAGE) {
    return [...acc, { path: meta.url, element: <module.default /> }];
  }

  return acc;
}, [] as RouteObject[]);

const router = createBrowserRouter(routes);

export const FileRouter = () => {
  return <RouterProvider router={router} />;
};
