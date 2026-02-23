"use client";
import React, { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FiX, FiEye } from "react-icons/fi";
import dayjs from "dayjs";
import "./sidebar.css";

const ViewmoreSection = ({ data, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);



  console.log("The sidebar Data is : ", data);


  return (
    <>
      {/* Overlay */}
      <div className="sidebar-overlay" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="theme-customizer theme-customizer-open email-sidebar">
        <div className="customizer-sidebar-wrapper d-flex flex-column h-100">
          {/* Header */}
          <div className="p-4 border-bottom d-flex justify-content-between align-items-center">
            <h5 className="mb-2 fw-bold ">Announcement Details</h5>
            {/* <button className="avatar-text avatar-md" onClick={onClose}>
              <FiX />
            </button> */}
          </div>

          {/* Body */}
          <div className="flex-grow-1 overflow-hidden">
            <PerfectScrollbar>
              <div className="p-4">
                {/* Sender Section */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="avatar-image avatar-md">
                    <img
                      src={data?.createdBy.profileImageUrl || "/images/avatar/1.png"}
                      alt="User"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div>
                    <div className="fw-bold text-dark">{data?.createdBy.fullName || "Admin"}</div>
                    <small className="text-muted">{data?.createdBy.email || "no-reply@company.com"}</small>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h5 className="fw-bold email-title">{data?.title}</h5>
                </div>

                {/* Meta Info */}
                <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
                  {/* Send Type Badge */}
                  <span
                    className={`badge ${data?.sendType === "ALL"
                      ? "bg-soft-primary text-primary"
                      : "bg-soft-success text-success"
                      }`}
                  >
                    {data?.sendType === "ALL" ? "All Employees" : "Individual"}
                  </span>

                  {/* Created Date Badge */}
                  <span className="badge text-success border border-success border-dashed">
                    {dayjs(data?.createdAt).format("DD MMM, YYYY hh:mm A")}
                  </span>
                </div>

                {/* Email Styled Message Body */}
                <div className="email-body p-4 rounded border bg-light-subtle dark:bg-dark-subtle">
                  {/* Greeting */}
                  <p className="mb-0 fw-semibold">
                    Dear {data?.sendType === "ALL" ? "All" : "Team"},
                  </p>

                  <p className="mb-3">Greetings of the day!</p>

                  {/* Main Message */}
                  <div className="mb-4">
                    <p className="mb-0 text-muted lh-lg text-justify" style={{ whiteSpace: "pre-line" }}>
                      {data?.message}
                    </p>
                  </div>

                  {/* Closing */}
                  <p className="mb-0">Thanks & Regards,</p>
                  <p className="fw-semibold mb-1">{data?.createdByName || "Admin Team"}</p>
                  <img
                    src="/company-logo.webp"
                    alt="CRS Fares Logo"
                    className="img-fluid"
                    style={{ maxHeight: "40px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </PerfectScrollbar>
          </div>

          {/* Footer Close Button */}
          <div className="p-2 border-top text-end">
            <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
              <FiX size={16} className="me-2" />
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewmoreSection;
