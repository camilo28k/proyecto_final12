import Activity from "@/modules/activity/components/activity.component";
import Layout from "@/modules/layouts/layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-black no-scrollbar">
        <h1>Home</h1>
      </section>
      <section className="mt-5">
        <h2 className="text-black font-semibold text-2xl">What do these campaigns do?</h2>
        <div className="grid grid-cols-2 gap-3 mt-5"></div>
        <Activity />
      </section>  
      
    </Layout>
  );
}
