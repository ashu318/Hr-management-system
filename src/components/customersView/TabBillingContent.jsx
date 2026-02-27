"use client";
import React from "react";
import { FiAlertOctagon, FiCheck, FiEye, FiMoreVertical, FiSend } from "react-icons/fi";

const TabBillingContent = ({ billingHistoryshow, user }) => {

  return (
    <>
      <div className="alert alert-dismissible m-4 p-4 d-flex align-items-start alert-soft-teal-message" role="alert" style={{ borderRadius: '12px', color: "#3454d1" }}>


        {/* Content */}
        <div className="flex-fill">
          <p className="fw-bold mb-2 text-truncate-1-line">We need your attention!</p>
          <p className="fs-12 fw-medium mb-3">
            Your payment account details are incomplete. To continue using all tools, please review and update your accounts.
          </p>

          {/* Bank Accounts */}
          <div className="mb-3">
            {/* Example bank account */}
            <div className="card shadow-sm mb-2 p-3" style={{
              borderRadius: '10px', backgroundColor: '#f5f5f5', borderColor: "#3454d1"
            }}>
              < div className="d-flex justify-content-between align-items-center mb-2" >
                <span className="fw-bold">State Bank of India</span>
                <img src="/icons/bank.png" alt="bank logo" style={{ height: '28px' }} />
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Account Number</span>
                <span className="fw-semibold">{user?.financialDetails.accountNo || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">IFSC</span>
                <span className="fw-semibold">{user?.financialDetails.ifscCode || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Account Holder</span>
                <span className="fw-semibold">{user?.financialDetails.bankName || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Account Holder</span>
                <span className="fw-semibold">{user?.fullName || "John Doe"}</span>
              </div>
            </div>
          </div>
        </div >

      </div >
      <div className="alert alert-dismissible m-4 p-4 d-flex align-items-start alert-soft-teal-message" role="alert" style={{ borderRadius: '12px', color: "#17c666 " }}>


        {/* Content */}
        <div className="flex-fill">
          <p className="fw-bold mb-2 text-truncate-1-line">  Financial & Statutory Details</p>
          <p className="fs-12 fw-medium mb-3">
            Below are the employee's registered statutory and financial identification details including UAN, ESIC, and PAN information.
          </p>

          {/* Bank Accounts */}
          <div className="mb-3">
            {/* Example bank account */}
            <div className="card shadow-sm mb-2 p-3" style={{
              borderRadius: '10px', backgroundColor: '#f5f5f5', borderColor: "#17c666 "
            }}>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">UNA Number</span>
                <span className="fw-semibold">{user?.financialDetails.uanNo || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">ESIC Number</span>
                <span className="fw-semibold">{user?.financialDetails.esicNo || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">PAN Number</span>
                <span className="fw-semibold">{user?.financialDetails.panNumber || "John Doe"}</span>
              </div>
            </div>
          </div>
        </div >

      </div >








      <hr className="mt-2" />
    </>
  );
};

export default TabBillingContent;
