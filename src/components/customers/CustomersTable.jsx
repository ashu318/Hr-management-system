"use client";
import React, { memo, useEffect, useState } from "react";
import Dropdown from "@/components/shared/Dropdown";
import SelectDropdown from "@/components/shared/SelectDropdown";
import Select from "react-select";
import { customersTableData } from "@/utils/fackData/customersTableData";
import Link from "next/link";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./style.css";
import Loaders from "@/components/loaders/AllemployeeCardsLoaders";
import { useAllUsersStore } from '@/store/useAllUserStore';
import toast from "react-hot-toast";

const CustomersTable = () => {

  // fetching the users from the stote
  const { users, loading, fetchUsers } = useAllUsersStore();


  useEffect(() => {
    fetchUsers();
  }, []);

  // fetching the users from the stote



  return (
    <>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* 1️⃣ Loading state */}
          {loading && Array.from({ length: 8 }).map((_, index) => <Loaders key={index} />)}

          {/* 2️⃣ No users found */}
          {!loading && users.length === 0 && (
            <div className="col-12 text-center py-5">
              <h5 className="text-muted">No users found</h5>
              <p className="small text-secondary">
                There are no employees available for this organization.
              </p>
            </div>
          )}

          {/* 3️⃣ Users list */}
          {!loading &&
            users.length > 0 &&
            users.map((user) => (

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 mb-4" key={user.id}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                  {/* Status Badge */}
                  <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 2 }}>
                    <span className="badge bg-success px-2 py-1 rounded-pill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      Active
                    </span>
                  </div>

                  {/* Header with gradient background */}
                  <div
                    className="profile-header py-4"
                    style={{
                      background: 'linear-gradient(135deg, #3454d1 0%, #2342a1 100%)',
                      height: '80px'
                    }}
                  />

                  {/* Avatar - centered overlapping */}
                  <div className="text-center" style={{ marginTop: '-40px' }}>
                    <div className="position-relative d-inline-block">
                      <img
                        src={user.profileImageUrl || "https://i.pravatar.cc/150"} alt={user.fullName}
                        className="rounded-circle border border-4 border-white shadow-sm"
                        width="90"
                        height="90"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body pt-2 px-4 pb-4">
                    {/* Employee Name & Designation */}
                    <div className="text-center mb-3">
                      <h5 className="fw-semibold mb-1" style={{ color: '#1e293b' }}>
                        {user.fullName}
                      </h5>
                      <p className="text-muted small mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3454d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        {user.designation?.name || "No Designation"}
                      </p>

                    </div>

                    {/* <div className="text-center mb-3">
                      <p className="text-muted small mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3454d1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="me-1"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="M22 6l-10 7L2 6"></path>
                        </svg>
                        {user.email}
                      </p>
                      <p className="text-muted small mb-0">
                        {user.department}
                      </p>
                    </div> */}

                    <div className="text-center mb-3">
                      <div className="profile-info">
                        <span> {user.department?.name || "No Department"} Head Office</span>
                        <span>
                          <FiMail /> {user.email || "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Department & Employee ID - Fixed positioning with consistent gap */}
                    {/* <div className="d-flex justify-content-between align-items-center bg-light rounded-3 p-3 mb-4">
                      <div className="text-start" style={{ minWidth: '100px' }}>
                        <small className="text-muted d-block">Department</small>
                        <span className="fw-medium">{user.department}</span>
                      </div>
                      <div className="text-end" style={{ minWidth: '100px' }}>
                        <small className="text-muted d-block">Employee ID</small>
                        <span className="fw-medium" style={{ color: '#3454d1' }}>
                          {user.employeeId}
                        </span>
                      </div>
                    </div> */}

                    {/* View Button */}
                    {/* <div className="d-grid">
                      <button
                        className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 py-2"
                        style={{ borderColor: '#3454d1', color: '#3454d1' }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        View Profile
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CustomersTable;
