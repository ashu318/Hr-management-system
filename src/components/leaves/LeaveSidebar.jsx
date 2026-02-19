"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CardHeader from "@/components/shared/CardHeader";
import CircleProgress from "@/components/shared/CircleProgress";
import { teamMembersList } from "@/utils/fackData/teamMembersList";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import Image from "next/image";
import LeavesBalance from "@/components/loaders/LeavesBalanceLoaders";

const LeaveSidebar = ({ footerShow, title, btnFooter }) => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();
  const [allLeaveBalances, setAllLeaveBalances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeaveBalance = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/leaves/myleaves-balance", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setAllLeaveBalances(data.leaveBalances);
      }
    } catch (error) {
      console.error("Failed to fetch leave balance", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaveBalance();
  }, []);

  useEffect(() => {
    console.log("Updated leave balances:", allLeaveBalances);
  }, [allLeaveBalances]);




  const LEAVE_CONFIG = {
    PAID_LEAVE: { label: "Paid Leave", max: 7, color: "#0d6efd" },
    SICK_LEAVE: { label: "Sick Leave", max: 5, color: "#dc3545" },
    CASUAL_LEAVE: { label: "Casual Leave", max: 3, color: "#198754" },
    // MATERNITY_LEAVE: { label: "Maternity Leave", max: 90, color: "#6f42c1" },
    BEREAVEMENT_LEAVE: { label: "Bereavement Leave", max: 1, color: "#fd7e14" },
    OPTIONAL_LEAVE: { label: "Optional Leave", max: 3, color: "#20c997" },
  };

  return (
    <div className="col-xxl-4">
      <div
        className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}
      >
        {isLoading ? (
          <LeavesBalance rows={4} />
        ) : (
          <>
            {/* Card Header */}
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


            </div>

            {/* Progress section of leaves */}
            <div className="vstack gap-3">
              {allLeaveBalances.map((leave, index) => {
                const config = LEAVE_CONFIG[leave.leaveType];
                if (!config) return null;

                const used = leave.total; // from DB
                const remaining = config.max - used;
                const percentage = Math.round((used / config.max) * 100);
                const displayRemaining = remaining < 0 ? 0 : remaining;

                return (
                  <div key={index} className="position-relative">
                    {/* Main Card */}
                    <div
                      className="hstack justify-content-between text-dark rounded-4 ps-3 pt-2"
                      style={{
                        backgroundColor: config.lightColor,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {/* LEFT SIDE */}
                      <div className="hstack gap-3">
                        {/* Icon Box */}
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            backgroundColor: config.color,
                            width: "48px",
                            height: "48px",
                            borderRadius: "16px",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#fff",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          }}
                        >
                          {config.label.charAt(0)}
                        </div>

                        {/* Label Section */}
                        <div>
                          <div className="fw-semibold fs-6">{config.label}</div>
                          <div className="d-flex align-items-center gap-2 mt-1">
                            <span
                              className="small"
                              style={{ color: config.color, fontWeight: 500 }}
                            >
                              {displayRemaining} left
                            </span>
                            <span className="small text-muted">•</span>
                            <span className="small text-muted">
                              {used}/{config.max}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT SIDE - Circular Progress */}
                      <div className="position-relative" >
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-white"
                          style={{
                            width: "60px",
                            height: "60px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            style={{ position: "absolute" }}
                          >
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
                              stroke={config.color}
                              strokeWidth="4"
                              strokeDasharray={`${percentage * 1.63} 163`}
                              strokeLinecap="round"
                              transform="rotate(-90 30 30)"
                              style={{ transition: "stroke-dasharray 0.3s ease" }}
                            />
                          </svg>

                          <span
                            className="fw-bold"
                            style={{ color: config.color, fontSize: "14px" }}
                          >
                            {percentage}%
                          </span>
                        </div>

                        {percentage >= 80 && (
                          <div
                            className="position-absolute top-0 end-0 bg-danger rounded-circle"
                            style={{
                              width: "12px",
                              height: "12px",
                              transform: "translate(2px, -2px)",
                            }}
                          />
                        )}
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>
          </>



        )}
        {footerShow ? (
          <Link href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">
            Update 30 Min Ago
          </Link>
        ) : (
          ""
        )}
        {btnFooter && (
          <div className="card-footer">
            <Link href="#" className="btn btn-primary">
              Generate Report
            </Link>
          </div>
        )}
        <CardLoader refreshKey={refreshKey} />
      </div>
    </div >
  );
};

export default LeaveSidebar;
