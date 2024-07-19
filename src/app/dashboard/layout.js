import SideBar from "@/components/sideBar";

export const metadata = {
  title: "Wangsit",
  description: "Dashboard perkembangan penjualan bahan pokok terjangkau di Kota Tasikmalaya",
};

export default function DashboardLayout({ children }) {
  return (
    <>
        <section className="flex md:flex-row flex-col justify-start items-start p-5 gap-4 w-full">            
            <SideBar/>
            <div className="flex-1 w-full">
              {children}
            </div>
        </section>         
    </>
  );
}
