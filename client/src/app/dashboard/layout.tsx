import { Outlet } from "@tanstack/react-router";
import Sidebar from "./_components/sidebar/sidebar";
import { Separator } from "@/components/ui/separator";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Sidebar />
      <Separator orientation="vertical" className="bg-zinc-300" />
      <main className="w-5/6 h-full ">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
