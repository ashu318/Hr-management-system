'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import CardHeader from '@/components/shared/CardHeader'
import CircleProgress from '@/components/shared/CircleProgress';
import { teamMembersList } from '@/utils/fackData/teamMembersList'
import CardLoader from '@/components/shared/CardLoader';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import Image from 'next/image';
import LeavesBalance from "@/components/loaders/LeavesBalanceLoaders";

const LeaveSidebar = ({ footerShow, title, btnFooter }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
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
        PAID_LEAVE: { label: "Paid Leave", max: 20, color: "#0d6efd" },
        SICK_LEAVE: { label: "Sick Leave", max: 10, color: "#dc3545" },
        CASUAL_LEAVE: { label: "Casual Leave", max: 10, color: "#198754" },
        // MATERNITY_LEAVE: { label: "Maternity Leave", max: 90, color: "#6f42c1" },
        BEREAVEMENT_LEAVE: { label: "Bereavement Leave", max: 5, color: "#fd7e14" },
        // OPTIONAL_LEAVE: { label: "Optional Leave", max: 5, color: "#20c997" },
    };

    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title="Leaves Status" refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                {isLoading ? (
                    <LeavesBalance rows={4} />
                ) : (
                    <div className="card-body custom-card-action">

                        {allLeaveBalances.map((leave, index) => {
                            const config = LEAVE_CONFIG[leave.leaveType];

                            if (!config) return null;

                            const used = leave.total;          // from DB
                            const remaining = config.max - used;
                            const percentage = Math.round((used / config.max) * 100);

                            return (
                                <div
                                    key={index}
                                    className="hstack justify-content-between border border-dashed rounded-3 p-2 team-card"
                                >
                                    {/* LEFT SIDE */}
                                    <div className="hstack gap-3">
                                        <div
                                            className="text-white avatar-text user-avatar-text"
                                            style={{ backgroundColor: config.color }}
                                        >
                                            {config.label.charAt(0)}
                                        </div>

                                        <div>
                                            <div className="fw-semibold">{config.label}</div>
                                            <div className="fs-11 text-muted">
                                                Remaining: {remaining} / {config.max}
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE */}
                                    <div className="team-progress">
                                        <CircleProgress
                                            value={percentage}
                                            text_sym="%"
                                            path_width="6px"
                                            path_color={config.color}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {
                    footerShow ?
                        <Link href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Update 30 Min Ago</Link>
                        :
                        ""
                }
                {
                    btnFooter && <div className="card-footer">
                        <Link href="#" className="btn btn-primary">Generate Report</Link>
                    </div>
                }
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default LeaveSidebar
