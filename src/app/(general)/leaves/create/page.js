import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import CreateLeaves from "@/components/leaves/CreateLeaves";
import LeavesHeader from "@/components/leaves/LeavesHeader";

const page = () => {
  return (
    <>
      <div className="main-content">
        <div className="row">
          <CreateLeaves />
        </div>
      </div>
    </>
  );
};

export default page;
