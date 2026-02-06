"use client";
import React from "react";
import { FiX } from "react-icons/fi";
import "./leavessidebar.css";

const LeavesSidebar = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div className="sidebar-backdrop" onClick={onClose} />

      {/* Sidebar */}
      <div className="custom-sidebar">
        <div className="sidebar-header">
          <h5 className="mb-0">Storage Details</h5>
          <button className="close-btn" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        <div className="sidebar-body">
          <h6 className="fw-bold mb-3">Statistics</h6>

          <p className="text-muted">
            Files: 2,258 <br />
            Used: 53.64 GB
          </p>

          <hr />

          <h6 className="fw-bold mb-3">Comments</h6>

          <textarea className="form-control mb-3" rows={4} placeholder="Comment" />

          <button className="btn btn-primary w-100">POST COMMENT</button>
        </div>
      </div>
    </>
  );
};

export default LeavesSidebar;
