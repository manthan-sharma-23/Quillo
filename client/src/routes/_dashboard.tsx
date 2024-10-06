import DashboardLayout from "@/app/dashboard/layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard")({
  component: () => <DashboardLayout />,
});
