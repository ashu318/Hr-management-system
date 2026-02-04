'use client'
import React, { useEffect, useState } from 'react'
import { FiAlertOctagon, FiArchive, FiClock, FiEdit3, FiEye, FiMoreHorizontal, FiPrinter, FiTrash2 } from 'react-icons/fi'
import Dropdown from '@/components/shared/Dropdown';
import { paymentTableData } from '@/utils/fackData/paymentTableData';
import Table from '@/components/shared/table/Table';
import Link from 'next/link';
import dayjs from 'dayjs'
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


const AllLeavesData = () => {

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
                                alt={user.fullName}
                                className="img-fluid"
                            />
                        </div>
                        <div>
                            <span className="text-truncate-1-line fw-bold">
                                {user.fullName}
                            </span>
                            <small className="fs-12 fw-normal text-muted d-block">
                                {user.email}
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
                const res = await fetch("/api/leaves/all-employee-leaves")
                const data = await res.json()

                console.log("Received leaves:", data.leaveApplications)
                setData(data.leaveApplications || [])
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

            <Table data={data} columns={columns} loading={loading} />

            {sidebarOpen && (
                <LeavesSidebar onClose={() => setSidebarOpen(false)} />
            )}
        </>
    )

}

export default AllLeavesData