import { ACCESS_TOKEN_COOKIE } from "@/global/cookies";
import useCookies from "@/hooks/use-cookies";
import { userAtom } from "@/store/atoms/user";
import trpc from "@/trpc";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "sonner";
import Spinner from "../ui/spinner";

const InitializeUser = () => {
  const cookies = useCookies();
  const updateUserData = useSetRecoilState(userAtom);

  const currentUser = trpc.users.getUser.useMutation({
    onError: (error) => {
      toast.error(error.message);
      cookies.remove(ACCESS_TOKEN_COOKIE);
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1000);
    },
    onSuccess: async (data) => {
      updateUserData({ isAuthenticated: true, user: data });
    },
  });

  useEffect(() => {
    const token = cookies.get(ACCESS_TOKEN_COOKIE);
    if (!token) {
      window.location.href = "/signin";
    } else {
      currentUser.mutate();
    }
  }, []);

  return (
    <div className="h-screen w-screen">
      <Spinner />
    </div>
  );
};

export default InitializeUser;
