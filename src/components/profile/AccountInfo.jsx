"use client";
import React from "react";
import { FiAlertOctagon, FiCheck, FiEye, FiMoreVertical, FiSend } from "react-icons/fi";
import { FiCreditCard, FiShield } from "react-icons/fi";

const AccountInfo = ({ user }) => {

    return (
        <>
            <div className="tab-pane fade" id="billingTab" role="tabpanel">

                {/* Bank Details */}
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-white d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <FiCreditCard size={18} className="text-primary" />
                            <h6 className="mb-0 fw-bold">Bank Account Details</h6>
                        </div>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <p className="text-muted small mb-1">Bank Name</p>
                                <h6 className="fw-semibold">
                                    {user?.financialDetails?.bankName || "State Bank of India"}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <p className="text-muted small mb-1">Account Holder</p>
                                <h6 className="fw-semibold">
                                    {user?.fullName || "John Doe"}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <p className="text-muted small mb-1">Account Number</p>
                                <h6 className="fw-semibold">
                                    {user?.financialDetails?.accountNo || "XXXXXX1234"}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <p className="text-muted small mb-1">IFSC Code</p>
                                <h6 className="fw-semibold">
                                    {user?.financialDetails?.ifscCode || "SBIN0001234"}
                                </h6>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Statutory Details */}
                <div className="card border-0 shadow-sm">
                    <div className="card-header bg-white d-flex align-items-center gap-2">
                        <FiShield size={18} className="text-success" />
                        <h6 className="mb-0 fw-bold">Financial & Statutory Details</h6>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-4">
                                <p className="text-muted small mb-1">UAN Number</p>
                                <h6 className="fw-semibold">
                                    {user?.financialDetails?.uanNo || "Not Provided"}
                                </h6>
                            </div>

                            <div className="col-md-4">
                                <p className="text-muted small mb-1">ESIC Number</p>
                                <h6 className="fw-semibold">
                                    {user?.financialDetails?.esicNo || "Not Provided"}
                                </h6>
                            </div>

                            <div className="col-md-4">
                                <p className="text-muted small mb-1">PAN Number</p>
                                <h6 className="fw-semibold">
                                    {user?.financialDetails?.panNumber || "Not Provided"}
                                </h6>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <hr className="mt-2" />
        </>
    );
};

export default AccountInfo;
