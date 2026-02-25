import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import Footer from "@/components/shared/Footer";
import CalenderView from "@/components/holidays/CalenderView";

const page = () => {
  return (
    <>
      <div className="main-content">
        <CalenderView />
      </div>
    </>
  );
};

export default page;
