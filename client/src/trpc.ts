import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../server/src/app";

const trpc = createTRPCReact<AppRouter>();

export default trpc;
