import CustomersTable from "@/components/customers/CustomersTable";
import Footer from "@/components/shared/Footer";
import DesignationSection from "@/components/designations/DesignationSection";
import React from "react";

const page = () => {
    return (
        <>
            <div className="main-content">
                <div className="row">
                    <DesignationSection />
                </div>
            </div>
        </>
    );
};

export default page;
