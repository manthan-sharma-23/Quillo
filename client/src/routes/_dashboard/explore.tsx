import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/explore")({
  component: () => <div>Hello /_dashboard/explore!</div>,
});
