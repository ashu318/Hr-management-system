import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import LeadsHeader from "@/components/leads/LeadsHeader";
import AllLeavesData from "@/components/leaves/AllLeavesData";
import Footer from "@/components/shared/Footer";

const page = () => {
  return (
    <>
      <PageHeader>
        <LeadsHeader />
      </PageHeader>
      <div className="main-content">
        <div className="row">
          <AllLeavesData />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
