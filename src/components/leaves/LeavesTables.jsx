'use client'
import React, { useEffect, useState } from 'react'
import CardHeader from '@/components/shared/CardHeader'
import HolidayTableSkeleton from "@/components/loaders/HolidayTableSkeleton"
import { FiCalendar, FiFileText } from 'react-icons/fi'

const LeavesTables = () => {
    const [leaves, setLeaves] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                setLoading(true)
                const res = await fetch("/api/leaves/myleaves")
                const data = await res.json()

                console.log("Received leaves:", data.allLeaveApplictaions)
                setLeaves(data.allLeaveApplictaions || [])
            } catch (err) {
                console.error("Error fetching leaves:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchLeaves()
    }, [])

    const getStatusBadge = (status) => {
        const base = "badge px-3 py-2 rounded-pill fw-medium"
        switch (status) {
            case "APPROVED":
                return <span className={`${base} bg-success-subtle text-success`}>Approved</span>
            case "REJECTED":
                return <span className={`${base} bg-danger-subtle text-danger`}>Rejected</span>
            default:
                return <span className={`${base} bg-warning-subtle text-warning`}>Pending</span>
        }
    }

    const formatDate = (date) =>
        date ? new Date(date).toLocaleDateString() : "-"

    return (
        <div className="col-lg-12">
            <div className="card stretch stretch-full">
                <CardHeader title="Leave Applications" />

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Leave Type</th>
                                    <th>Duration</th>
                                    <th>Reason</th>
                                    <th>Applied On</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <HolidayTableSkeleton rows={6} />
                                ) : leaves.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="text-center py-4 text-muted">
                                            No leave applications found
                                        </td>
                                    </tr>
                                ) : (
                                    leaves.map((leave) => (
                                        <tr key={leave.id}>
                                            {/* Leave Type */}
                                            <td>
                                                <div className="hstack gap-2">
                                                    <div className="avatar-text bg-soft-primary text-primary">
                                                        <FiCalendar size={14} />
                                                    </div>
                                                    <span className="fw-semibold">
                                                        {leave.leaveType.replaceAll("_", " ")}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Duration */}
                                            <td>
                                                <span className="fw-medium">
                                                    {formatDate(leave.startDate)}
                                                </span>
                                                <span className="mx-1 text-muted">→</span>
                                                <span className="fw-medium">
                                                    {formatDate(leave.endDate)}
                                                </span>
                                            </td>

                                            {/* Reason */}
                                            <td style={{ maxWidth: 280 }}>
                                                <div className="hstack gap-2">
                                                    <FiFileText className="text-muted" />
                                                    <span className="text-truncate d-inline-block">
                                                        {leave.reason || "-"}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Applied On */}
                                            <td className="text-muted">
                                                {formatDate(leave.createdAt)}
                                            </td>

                                            {/* Status */}
                                            <td>
                                                {getStatusBadge(leave.status)}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeavesTables
