import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Headbar() {
  return (
    <div className="bg-slate-100 h-[50px] px-2 flex items-center top-0 sticky ">
      <SidebarTrigger className="size-6 [&>*]:!size-5 hover:bg-slate-200" />
      <div className="w-full ms-2">
        <h1 className="font-bold text-xl text-slate-500">App</h1>
      </div>
    </div>
  );
}
