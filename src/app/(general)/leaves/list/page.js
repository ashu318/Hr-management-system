import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import LeadsHeader from "@/components/leads/LeadsHeader";
import LeavesTables from "@/components/leaves/LeavesTables";
import Footer from "@/components/shared/Footer";

const page = () => {
  return (
    <>
      <PageHeader>
        <LeadsHeader />
      </PageHeader>
      <div className="main-content">
        <div className="row">
          <LeavesTables />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
