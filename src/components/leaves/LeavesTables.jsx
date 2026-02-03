// 'use client'
// import React, { useEffect, useState } from 'react'
// import CardHeader from '@/components/shared/CardHeader'
// import HolidayTableSkeleton from "@/components/loaders/HolidayTableSkeleton"
// import { FiCalendar, FiFileText } from 'react-icons/fi'

// const LeavesTables = () => {
//     const [leaves, setLeaves] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         const fetchLeaves = async () => {
//             try {
//                 setLoading(true)
//                 const res = await fetch("/api/leaves/myleaves")
//                 const data = await res.json()

//                 console.log("Received leaves:", data.allLeaveApplictaions)
//                 setLeaves(data.allLeaveApplictaions || [])
//             } catch (err) {
//                 console.error("Error fetching leaves:", err)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchLeaves()
//     }, [])

//     const getStatusBadge = (status) => {
//         const base = "badge px-3 py-2 rounded-pill fw-medium"
//         switch (status) {
//             case "APPROVED":
//                 return <span className={`${base} bg-success-subtle text-success`}>Approved</span>
//             case "REJECTED":
//                 return <span className={`${base} bg-danger-subtle text-danger`}>Rejected</span>
//             default:
//                 return <span className={`${base} bg-warning-subtle text-warning`}>Pending</span>
//         }
//     }

//     const formatDate = (date) =>
//         date ? new Date(date).toLocaleDateString() : "-"

//     return (
//         <div className="col-lg-12">
//             <div className="card stretch stretch-full">
//                 <CardHeader title="Leave Applications" />

//                 <div className="card-body custom-card-action p-0">
//                     <div className="table-responsive">
//                         <table className="table table-hover mb-0 align-middle">
//                             <thead className="table-light">
//                                 <tr>
//                                     <th>Leave Type</th>
//                                     <th>Duration</th>
//                                     <th>Reason</th>
//                                     <th>Applied On</th>
//                                     <th>Status</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {loading ? (
//                                     <HolidayTableSkeleton rows={6} />
//                                 ) : leaves.length === 0 ? (
//                                     <tr>
//                                         <td colSpan={5} className="text-center py-4 text-muted">
//                                             No leave applications found
//                                         </td>
//                                     </tr>
//                                 ) : (
//                                     leaves.map((leave) => (
//                                         <tr key={leave.id}>
//                                             {/* Leave Type */}
//                                             <td>
//                                                 <div className="hstack gap-2">
//                                                     <div className="avatar-text bg-soft-primary text-primary">
//                                                         <FiCalendar size={14} />
//                                                     </div>
//                                                     <span className="fw-semibold">
//                                                         {leave.leaveType.replaceAll("_", " ")}
//                                                     </span>
//                                                 </div>
//                                             </td>

//                                             {/* Duration */}
//                                             <td>
//                                                 <span className="fw-medium">
//                                                     {formatDate(leave.startDate)}
//                                                 </span>
//                                                 <span className="mx-1 text-muted">→</span>
//                                                 <span className="fw-medium">
//                                                     {formatDate(leave.endDate)}
//                                                 </span>
//                                             </td>

//                                             {/* Reason */}
//                                             <td style={{ maxWidth: 280 }}>
//                                                 <div className="hstack gap-2">
//                                                     <FiFileText className="text-muted" />
//                                                     <span className="text-truncate d-inline-block">
//                                                         {leave.reason || "-"}
//                                                     </span>
//                                                 </div>
//                                             </td>

//                                             {/* Applied On */}
//                                             <td className="text-muted">
//                                                 {formatDate(leave.createdAt)}
//                                             </td>

//                                             {/* Status */}
//                                             <td>
//                                                 {getStatusBadge(leave.status)}
//                                             </td>
//                                         </tr>
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LeavesTables;




'use client'
import React, { useEffect, useState } from 'react'
import { FiAlertOctagon, FiArchive, FiClock, FiEdit3, FiEye, FiMoreHorizontal, FiPrinter, FiTrash2 } from 'react-icons/fi'
import Dropdown from '@/components/shared/Dropdown';
import { paymentTableData } from '@/utils/fackData/paymentTableData';
import Table from '@/components/shared/table/Table';
import Link from 'next/link';
import dayjs from 'dayjs'
import HolidayTableSkeleton from "@/components/loaders/HolidayTableSkeleton"
import LeavesSidebar from './LeavesSidebar';



const actions = [
    { label: "Edit", icon: <FiEdit3 /> },
    { label: "Print", icon: <FiPrinter /> },
    { label: "Remind", icon: <FiClock /> },
    { type: "divider" },
    { label: "Archive", icon: <FiArchive /> },
    { label: "Report Spam", icon: <FiAlertOctagon />, },
    { type: "divider" },
    { label: "Delete", icon: <FiTrash2 />, },
];


const LeavesTables = () => {

    // helper functsions
    const toTitleCase = (text = "") =>
        text
            .toLowerCase()
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    const LEAVE_STATUS_MAP = {
        PENDING: {
            content: "Pending",
            color: "bg-soft-warning text-warning",
        },
        APPROVED: {
            content: "Approved",
            color: "bg-soft-success text-success",
        },
        REJECTED: {
            content: "Rejected",
            color: "bg-soft-danger text-danger",
        },
    };


    // helper functsions


    const columns = [
        {
            id: "employee",
            header: "Employee",
            cell: ({ row }) => {
                const user = row.original.user;

                return (
                    <div className="hstack gap-3">
                        <div className="avatar-image avatar-md">
                            <img
                                src="https://i.pravatar.cc/150"
                                className="img-fluid"
                            />
                        </div>
                        <div>
                            <span className="text-truncate-1-line fw-bold">
                                Shitansu Kumar ...
                            </span>
                            <small className="fs-12 fw-normal text-muted d-block">
                                john_doe@gmail.com
                            </small>
                        </div>
                    </div>
                );
            },
        },
        {
            accessorKey: 'leaveType',
            header: 'Leave Type',
            meta: {
                className: "fw-bold text-dark"
            },
            cell: ({ row }) =>
                toTitleCase(row.original.leaveType)
        },
        {
            accessorKey: 'startDate',
            header: 'Start Date',
            cell: ({ row }) =>
                dayjs(row.original.startDate).format('DD MMM , YYYY')
        },
        {
            accessorKey: 'endDate',
            header: 'End Date',
            cell: ({ row }) =>
                dayjs(row.original.endDate).format('DD MMM , YYYY')
        },
        {
            accessorKey: 'status',
            id: 'status',
            header: () => 'Status',
            cell: ({ row }) => {
                const status = row.original.status
                const badge = LEAVE_STATUS_MAP[status]

                return (
                    <div className={`badge ${badge?.color}`}>
                        {badge?.content}
                    </div>
                )
            },
        }, {
            accessorKey: 'CreatedAt',
            header: 'Created At',
            cell: ({ row }) =>
                dayjs(row.original.createdAt).format('DD MMM , YYYY')
        },
        {
            accessorKey: 'reason',
            header: 'Actions',
            cell: info => (
                <div className="hstack gap-2 justify-content-end">
                    <button
                        className="avatar-text avatar-md"
                        onClick={() => {
                            // setSelectedLeave(row.original)
                            setSidebarOpen(true)
                        }}
                    >
                        <FiEye />
                    </button>
                    <Dropdown dropdownItems={actions} triggerIcon={<FiMoreHorizontal />} triggerClass='avatar-md' triggerPosition={"0,21"} />
                </div>
            ),
        }
    ]




    // function to fetch and set the data to the tabel
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                setLoading(true)
                const res = await fetch("/api/leaves/myleaves")
                const data = await res.json()

                console.log("Received leaves:", data.allLeaveApplictaions)
                setData(data.allLeaveApplictaions || [])
            } catch (err) {
                console.error("Error fetching leaves:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchLeaves()
    }, [])
    // function to fetch and set the data to the tabel

    return (
        <>
            {loading ? (
                <HolidayTableSkeleton />
            ) : (
                <Table data={data} columns={columns} />
            )}
            {sidebarOpen && (
                <LeavesSidebar onClose={() => setSidebarOpen(false)} />
            )}
        </>
    )

}

export default LeavesTables