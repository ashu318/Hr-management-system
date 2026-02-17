import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import CustomersCreateHeader from "@/components/customersCreate/CustomersCreateHeader";
import CustomerCreateContent from "@/components/customersCreate/CustomerCreateContent";
import ProposalEditContent from "@/components/proposalEditCreate/ProposalEditContent";

const page = () => {
  return (
    <>
      <div className="main-content">
        <div className="row">
          <ProposalEditContent />
        </div>
      </div>
    </>
  );
};

export default page;
