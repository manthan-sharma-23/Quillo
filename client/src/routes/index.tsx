import { userAtom } from "@/store/atoms/user";
import { createFileRoute } from "@tanstack/react-router";
import { useRecoilValue } from "recoil";

export const Route = createFileRoute("/")({
  component: () => {
    const user = useRecoilValue(userAtom);

    return <div>{JSON.stringify(user)}</div>;
  },
});
