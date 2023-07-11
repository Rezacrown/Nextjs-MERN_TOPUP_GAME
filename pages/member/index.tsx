import OverviewContent from "@/components/complex/Overview-Content";
import Sidebar from "@/components/complex/Sidebar";
import React from "react";

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu='overview' />
        <OverviewContent />
      </section>
    </>
  );
}
