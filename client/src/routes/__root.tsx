import InitializeUser from "@/components/auth/intialize-user";
import useCookies from "@/hooks/use-cookies";
import { userAtom } from "@/store/atoms/user";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { useRecoilValue } from "recoil";

export const Route = createRootRoute({
  component: () => {
    const router = useRouterState();
    const cookies = useCookies();
    const user = useRecoilValue(userAtom);

    if (
      router.location.pathname === "/login" ||
      router.location.pathname === "/signup"
    ) {
      return <Outlet />;
    }

    if (!cookies.get("hr-at")) {
      window.location.href = `/login?next=${router.location.pathname}`;
      return null;
    }

    if (!user.isAuthenticated) {
      return <InitializeUser />;
    }

    return (
      <>
        <Outlet />
      </>
    );
  },
});
