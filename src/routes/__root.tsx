import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Nav from "../components/Nav";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Layout />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  ),
});

function Layout() {
  const router = useRouterState();

  function getHeaderText() {
    switch (router.location.pathname) {
      case "/":
        return "WORK EXPERIENCE";
      case "/education":
        return "EDUCATION";
      case "/about":
        return "ABOUT ME";
      default:
        return "";
    }
  }
  
  return (
    <>
      <header className="relative">
        <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
          <h2 className="text-xl antialiased font-semibold text-black/85 ">
            {getHeaderText()}
          </h2>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </>
  );
}
