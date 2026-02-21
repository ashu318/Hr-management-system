import React from "react";
import EmployeesTable from "@/components/customers/EmployeesTable";

const page = () => {
    return (
        <>
            <div className="main-content">
                <div className="row">
                    <EmployeesTable />
                </div>
            </div>
        </>
    );
};

export default page;
