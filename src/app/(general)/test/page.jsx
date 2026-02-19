"use client";
import React from "react";
import Link from "next/link";
import CardHeader from "@/components/shared/CardHeader";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";

const LeaveSidebar = ({ footerShow, title, btnFooter }) => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();

  // Static leave data with icons
  const leaveData = [
    {
      type: "PAID_LEAVE",
      label: "Paid Leave",
      used: 8,
      total: 20,
      color: "#4361ee",
      lightColor: "#eef2ff",
      icon: "🏖️"
    },
    {
      type: "SICK_LEAVE",
      label: "Sick Leave",
      used: 3,
      total: 10,
      color: "#f72585",
      lightColor: "#ffe0f0",
      icon: "🤒"
    },
    {
      type: "CASUAL_LEAVE",
      label: "Casual Leave",
      used: 5,
      total: 10,
      color: "#4cc9f0",
      lightColor: "#e1f5fe",
      icon: "😊"
    },
    {
      type: "BEREAVEMENT_LEAVE",
      label: "Bereavement",
      used: 1,
      total: 5,
      color: "#f8961e",
      lightColor: "#fff0d9",
      icon: "💔"
    },
  ];

  // Calculate totals
  const totalUsed = leaveData.reduce((acc, item) => acc + item.used, 0);
  const totalMax = leaveData.reduce((acc, item) => acc + item.total, 0);
  const totalRemaining = totalMax - totalUsed;

  if (isRemoved) {
    return null;
  }

  // Function to create circular progress conic gradient
  // const getProgressStyle = (percentage, color) => {
  //   return {
  //     background: conic - gradient(${ color } ${ percentage * 3.6}deg, #e9ecef ${ percentage * 3.6}deg 360deg),
  //   };
  // };

  return (
    <div className="col-xxl-4">
      <div className="card stretch stretch-full border-0 shadow-sm">
        <CardHeader
          title={
            <div className="d-flex align-items-center gap-2">
              <span>📊</span>
              <span>My Leave Status</span>
            </div>
          }
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />

        <div className="card-body custom-card-action p-3">
          {/* Total Summary Card - Static UI Only */}
          <div
            className="rounded-4 p-4 mb-4"
            style={{
              background: "linear-gradient(145deg, #4361ee 0%, #3a0ca3 100%)",
              boxShadow: "0 10px 30px rgba(67, 97, 238, 0.2)"
            }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="small text-white text-opacity-75">
                <span className="me-2">📊</span>
                Total Leave Balance
              </span>

              <span className="badge bg-white bg-opacity-20 text-dark px-3 py-1 rounded-pill fw-normal">
                17/45 Used
              </span>
            </div>

            <div className="d-flex align-items-end justify-content-between">
              <div>
                <div className="display-3 fw-bold text-white mb-1">
                  28
                </div>
                <div className="text-white text-opacity-75 small">
                  days remaining
                </div>
              </div>

              <div className="text-end">
                <div className="h2 fw-bold text-white mb-1">
                  38%
                </div>
                <div className="text-white text-opacity-75 small">
                  utilized
                </div>
              </div>
            </div>

            {/* Static Progress Bar */}
            <div className="mt-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small text-white text-opacity-75">Progress</span>
                <span className="small text-white fw-medium">
                  17/45 days
                </span>
              </div>

              <div
                className="progress bg-white bg-opacity-20"
                style={{ height: "10px", borderRadius: "10px" }}
              >
                <div
                  className="progress-bar bg-success"
                  style={{
                    width: "38%",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(255,255,255,0.3)"
                  }}
                />
              </div>
            </div>

            {/* Static Warning Example */}
            <div className="mt-3 d-flex align-items-center gap-2 bg-white bg-opacity-10 rounded-3 p-2">
              <span className="text-warning">⚠️</span>
              <span className="small text-white">
                Low balance: Only 5 days left
              </span>
            </div>
          </div>

          {/* Leave Type List - Enhanced with circular progress */}
          <div className="vstack gap-3">
            {leaveData.map((leave, index) => {
              const remaining = leave.total - leave.used;
              const percentage = Math.round((leave.used / leave.total) * 100);
              const displayRemaining = remaining < 0 ? 0 : remaining;

              return (
                <div
                  key={index}
                  className="position-relative"
                >
                  {/* Main Card */}
                  <div
                    className="hstack justify-content-between text-dark rounded-4 p-3"
                    style={{
                      backgroundColor: leave.lightColor,

                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    {/* LEFT SIDE */}
                    <div className="hstack gap-3">
                      {/* Icon Circle */}
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: leave.color,
                          width: "48px",
                          height: "48px",
                          borderRadius: "16px",
                          fontSize: "24px",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        }}
                      >
                        <span>{leave.icon}</span>
                      </div>

                      {/* Label Section */}
                      <div>
                        <div className="fw-semibold fs-6">{leave.label}</div>
                        <div className="d-flex align-items-center gap-2 mt-1">
                          <span className="small" style={{ color: leave.color, fontWeight: "500" }}>
                            {displayRemaining} left
                          </span>
                          <span className="small text-muted">•</span>
                          <span className="small text-muted">{leave.used}/{leave.total}</span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE - Circular Progress */}
                    <div className="position-relative">
                      {/* Circular Progress */}
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle bg-white"
                        style={{
                          width: "60px",
                          height: "60px",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                          position: "relative",
                          zIndex: 2
                        }}
                      >
                        {/* Background Circle */}
                        <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: "absolute" }}>
                          <circle
                            cx="30"
                            cy="30"
                            r="26"
                            fill="none"
                            stroke="#e9ecef"
                            strokeWidth="4"
                          />
                          <circle
                            cx="30"
                            cy="30"
                            r="26"
                            fill="none"
                            stroke={leave.color}
                            strokeWidth="4"
                            // strokeDasharray={${percentage * 1.63} 163}
                            strokeDashoffset="0"
                            strokeLinecap="round"
                            transform="rotate(-90 30 30)"
                            style={{ transition: "stroke-dasharray 0.3s ease" }}
                          />
                        </svg>

                        {/* Percentage Text */}
                        <span className="fw-bold" style={{ color: leave.color, fontSize: "14px" }}>
                          {percentage}%
                        </span>
                      </div>

                      {/* Status Indicator */}
                      {percentage >= 80 && (
                        <div
                          className="position-absolute top-0 end-0 bg-danger rounded-circle"
                          style={{ width: "12px", height: "12px", transform: "translate(2px, -2px)" }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Usage Bar */}
                  <div
                    className="position-absolute bottom-0 start-0 rounded-bottom-4"
                    style={{
                      height: "4px",
                      width: `${percentage}%`,
                      backgroundColor: leave.color,
                      transition: "width 0.3s ease",
                      zIndex: 2
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Status Summary */}
          <div className="d-flex align-items-center justify-content-between mt-4 pt-2 border-top">
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-1">
                <div className="bg-success rounded-circle" style={{ width: "8px", height: "8px" }} />
                <span className="small text-muted">Available</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="bg-warning rounded-circle" style={{ width: "8px", height: "8px" }} />
                <span className="small text-muted">Low (≤30%)</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="bg-danger rounded-circle" style={{ width: "8px", height: "8px" }} />
                <span className="small text-muted">Critical (≤10%)</span>
              </div>
            </div>

            {/* Last Updated */}
            <span className="small text-muted">
              <span className="opacity-50">🕒</span> Today 10:30
            </span>
          </div>
        </div>

        {/* <CardLoader refreshKey={refreshKey} /> */}
      </div>
    </div>
  );
};

export default LeaveSidebar;