import { Outlet } from "react-router-dom";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Headbar from "./Headbar";

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <main className="hidden min-[350px]:block w-full">
        <Headbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
