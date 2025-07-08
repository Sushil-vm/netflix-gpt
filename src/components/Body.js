import { lazy, Suspense } from "react";
import Login from "../components/auth/Login";
import Browse from "../components/browse/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import useAuthInit from "../utils/useAuthInit";
import ProtectedRoute from "../utils/ProtectedRoute";
import GptSearch from "./gpt/GptSearch";
import Loading from "../utils/Loading";
import MovieDetails from "./movies/MovieDetails";

const TvShows = lazy(() => import("./navbar/TvShows"));
const Movies = lazy(() => import("./navbar/Movies"));

const Body = () => {
  const loading = useAuthInit();

  if (!loading) return <Loading />;

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },

    {
      path: "/shows",
      element: (
        <ProtectedRoute>
          <Suspense fallback={<Loading/>}>
            <TvShows />
          </Suspense>
        </ProtectedRoute>
      ),
    },
    {
      path: "/movies",
      element: (
        <ProtectedRoute>
          <Suspense fallback={<Loading/>}>
            <Movies />
          </Suspense>
        </ProtectedRoute>
      ),
    },
    {
      path: "/webseries",
      element: (
        <ProtectedRoute>
          <Suspense fallback={<Loading/>}>
            <TvShows />
          </Suspense>
        </ProtectedRoute>
      ),
    },
    {
      path: "/gptsearch",
      element: (
        <ProtectedRoute>
          <GptSearch />
        </ProtectedRoute>
      ),
    },
    {
      path: "/movie/:id",
      element: (
        <ProtectedRoute>
          <MovieDetails />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
