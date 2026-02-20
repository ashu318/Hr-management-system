"use client";
import React from "react";
import { FiX, FiSend, FiSmile } from "react-icons/fi";
// import "react-quill/dist/quill.snow.css";

const LeavesSidebar = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div className="sidebar-backdrop" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="custom-sidebar d-flex flex-column">

        {/* Header */}
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="HR"
              className="rounded-circle"
              style={{ width: 40, height: 40, objectFit: "cover" }}
            />
            <div>
              <h6 className="mb-0 fw-semibold">HR Department</h6>
              <small className="text-success">● Online</small>
            </div>
          </div>

          <button className="btn btn-sm" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="sidebar-body flex-grow-1 p-3 overflow-auto">

          {/* HR Message */}
          <div className="d-flex mb-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              className="rounded-circle me-2"
              style={{ width: 36, height: 36, objectFit: "cover" }}
              alt="HR"
            />
            <div className="bg-light p-3 rounded-4" style={{ maxWidth: "75%" }}>
              <div className="small fw-semibold mb-1">HR Manager</div>
              <p className="mb-0 small">
                Your leave request has been received and is being processed.
              </p>
              <small className="text-muted">10:30 AM</small>
            </div>
          </div>

          {/* User Message */}
          <div className="d-flex justify-content-end mb-3">
            <div
              className="bg-primary text-white p-3 rounded-4"
              style={{ maxWidth: "75%" }}
            >
              <div className="small fw-semibold mb-1">You</div>
              <p className="mb-0 small">
                Thank you! When can I expect an update?
              </p>
              <small className="text-white-50">10:32 AM</small>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sidebar-footer p-3 border-top">

          {/* Toolbar */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <button className="btn btn-sm btn-light rounded-circle">
              <FiSmile size={16} />
            </button>

            <small className="text-muted">
              <span className="badge bg-light text-dark me-1">Bold</span>
              <span className="badge bg-light text-dark me-1">Italic</span>
              <span className="badge bg-light text-dark me-1">List</span>
            </small>
          </div>

          {/* Textarea */}
          <textarea
            className="form-control rounded-4"
            rows="3"
            placeholder="Type your message..."
          ></textarea>

          {/* Send Button */}
          <div className="d-flex justify-content-end mt-2">
            <button className="btn btn-primary px-4 d-flex align-items-center gap-2">
              <FiSend size={16} />
              Send
            </button>
          </div>

          <small className="text-muted mt-2 d-block text-center">
            Press Enter to send
          </small>
        </div>
      </div>
    </>
  );
};

export default LeavesSidebar;