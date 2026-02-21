"use client";
import React, { useEffect, useState, useMemo, memo } from "react";
import {
    FiAlertOctagon,
    FiArchive,
    FiClock,
    FiEdit3,
    FiEye,
    FiMoreHorizontal,
    FiPrinter,
    FiTrash2,
} from "react-icons/fi";
import Dropdown from "@/components/shared/Dropdown";
import SelectDropdown from "@/components/shared/SelectDropdown";
import { paymentTableData } from "@/utils/fackData/paymentTableData";
import Table from "@/components/shared/table/Table";
import Link from "next/link";
import dayjs from "dayjs";
import getIcon from "@/utils/getIcon";


const actions = [
    { label: "Edit", icon: <FiEdit3 /> },
    { label: "Print", icon: <FiPrinter /> },
    { label: "Remind", icon: <FiClock /> },
    { type: "divider" },
    { label: "Archive", icon: <FiArchive /> },
    { label: "Report Spam", icon: <FiAlertOctagon /> },
    { type: "divider" },
    { label: "Delete", icon: <FiTrash2 /> },
];

const EmployeesTable = () => {



    // helper functsions
    const toTitleCase = (text = "") =>
        text
            .toLowerCase()
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    const STATUS_OPTIONS = [
        {
            label: "active",
            value: "ACTIVE",
            color: "#22c55e", // green
        },
        {
            label: "inactive",
            value: "INACTIVE",
            color: "#ef4444", // red
        },
    ];
    // helper functsions



    //colums of the table
    const columns = useMemo(() => [
        {
            id: "employee",
            header: "Employee Name",
            cell: ({ row }) => {
                const user = row.original;

                return (
                    <div className="d-flex align-items-center gap-3 position-relative">

                        {/* ✅ Status Vertical Bar */}
                        <div
                            style={{
                                width: "4px",
                                height: "40px",
                                borderRadius: "4px",
                                backgroundColor: "#3454d1",
                            }}
                        />

                        {/* ✅ Avatar */}
                        <div className="avatar-image avatar-md">
                            <img
                                src={user?.profileImageUrl || "/default-avatar.png"}
                                alt={user?.fullName}
                                className="img-fluid"
                                style={{
                                    width: 40,
                                    height: 40,
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>

                        {/* ✅ Info */}
                        <div>
                            <span className="fw-bold">
                                {user?.fullName}
                            </span>
                            <small className="fs-12 fw-normal text-muted d-block">
                                {user?.email}
                            </small>
                        </div>

                    </div>
                );
            },
        },

        {
            accessorKey: "employeeId",
            header: "Employee ID",
            meta: {
                className: "fw-bold text-dark",
            },
            cell: ({ row }) => (
                <span className="badge border border-dashed text-primary border-primary">
                    {row.original.employeeId || "—"}
                </span>
            ),
        },

        {
            accessorKey: "phone",
            header: "Contact Info",
            cell: ({ row }) => (
                <div className="hstack gap-2">
                    <div className="avatar-text avatar-sm">{getIcon("feather-phone")}</div>
                    <a href="#">{row.original.phone}</a>
                </div>
            ),
        },

        {
            accessorKey: "department",
            header: "Department",
            cell: ({ row }) => (
                <span className="badge border border-dashed text-danger border-danger">
                    {row.original.department || "—"}
                </span>
            ),
        },
        {
            id: "lastLogin",
            header: "Last Login",
            meta: {
                className: "fw-bold text-dark",
            },
            cell: ({ row }) => {
                const lastLogin = row.original.lastLoginAt;

                return (
                    <span className="badge border border-dashed text-success border-success">
                        {lastLogin
                            ? dayjs(lastLogin).format("DD MMM YYYY, hh:mm A")
                            : "Never"}
                    </span>
                );
            },
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                <div className="hstack gap-2 justify-content-end">
                    <button
                        className="avatar-text avatar-md"
                        onClick={() => {
                            setSelectedUser(row.original);
                            setSidebarOpen(true);
                        }}
                    >
                        <FiEye />
                    </button>
                </div>
            ),
        },
    ], []);
    //colums of the table


    // function to fetch and set the data to the tabel
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedLeave, setSelectedLeave] = useState(null);

    const fetchUsersInfo = async () => {
        try {
            const response = await fetch("/api/users/all-users-details", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            setUsers(data.users);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsersInfo();
    }, []);
    // function to fetch and set the data to the tabel




    return (
        <>
            <Table data={users} columns={columns} loading={loading} />

            {sidebarOpen && selectedLeave && (
                <LeavesSidebar
                    data={selectedLeave}
                    onClose={() => {
                        setSidebarOpen(false);
                        setSelectedLeave(null);
                    }}
                    onStatusUpdated={fetchLeaves}
                />
            )}
        </>
    );
};

export default EmployeesTable;
