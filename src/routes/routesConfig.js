import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage/PeoplePage";
// import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import SearchPage from "@containers/SearchPage";
import NotFoundPage from "@containers/NotFoundPage";
import FavoritesPage from "@containers/FavoritesPage";

import ErrorMessage from "@components/ErrorMessage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/people",
    exact: true,
    element: <PeoplePage />,
  },
  {
    path: "/people/:id",
    exact: true,
    element: <PersonPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/not-found",
    exact: true,
    element: <NotFoundPage />,
  },
  {
    path: "*",
    exact: false,
    element: <NotFoundPage />,
  },
  // {
  //   path: "/people/:id",
  //   element: <PersonPage />,
  // },
  {
    path: "/search",
    element: <SearchPage />,
  },
  //
  //   {
  //     path: "/fail",
  //     element: <ErrorMessage />,
  //   },
  //   {
  //     path: "/not-found",
  //     element: <NotFoundPage />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFoundPage />,
  //   },
];

export default routesConfig;
