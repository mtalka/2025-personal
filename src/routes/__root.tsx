import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Nav from "../components/Nav";
import FAQSchema from "../components/FAQSchema";

export const Route = createRootRoute({
  component: () => (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#navigation" className="skip-link">
        Skip to navigation
      </a>
      
      <FAQSchema />
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
    <main id="main-content" tabIndex={-1} role="main">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h2 className="text-xl antialiased font-semibold text-black/85">
            {getHeaderText()}
          </h2>
        </header>
        <Outlet />
      </div>
    </main>
  );
}
