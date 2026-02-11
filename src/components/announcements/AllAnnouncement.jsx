"use client";
import React, { useEffect, useState, useMemo } from "react";
import {
  FiAlertOctagon,
  FiArchive,
  FiClock,
  FiEdit3,
  FiEye,
  FiMoreHorizontal,
  FiPrinter,
  FiTrash2,
  FiTrash,
} from "react-icons/fi";
import Dropdown from "@/components/shared/Dropdown";
import { paymentTableData } from "@/utils/fackData/paymentTableData";
import Table from "@/components/shared/table/Table";
import Link from "next/link";
import dayjs from "dayjs";
import LeavesSidebar from "@/components/leaves/LeaveSidebar";
import ViewmoreSection from "./ViewmoreSection";
import toast from "react-hot-toast";

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

const AllAnnouncement = () => {
  // helper functsions

  const ANNOUNCEMENT_TYPE_MAP = {
    ALL: {
      label: "All Employees",
      color: "bg-soft-primary text-primary",
    },
    INDIVIDUAL: {
      label: "Individual",
      color: "bg-soft-success text-success",
    },
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "from",
        header: "From",
        meta: {
          className: "fw-bold text-dark",
        },
        cell: ({ row }) => {
          const user = row.original.createdById;

          return (
            <div className="hstack gap-3">
              <div className="avatar-image avatar-md">
                <img src="https://i.pravatar.cc/150" alt={user.fullName} className="img-fluid" />
              </div>
              <div>
                <span className="text-truncate-1-line fw-bold">{row.original.createdById}</span>
                <small className="fs-12 fw-normal text-muted d-block">shitansu.cts@gmail.com</small>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "title",
        header: "Title",
        meta: {
          className: "fw-bold text-dark",
        },
        cell: ({ row }) => (
          <span className="text-truncate-1-line fw-semibold">{row.original.title}</span>
        ),
      },
      {
        accessorKey: "sendType",
        header: "Send Type",
        cell: ({ row }) => {
          const type = row.original.sendType;
          const badge = ANNOUNCEMENT_TYPE_MAP[type];

          if (!badge) return null;

          return <span className={`badge ${badge.color}`}>{badge.label}</span>;
        },
      },
      {
        accessorKey: "message",
        header: "Message",
        cell: ({ row }) => (
          <span className="text-truncate-2-line text-muted fs-12">{row.original.message}</span>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
          const formattedDate = dayjs(row.original.createdAt).format("DD MMM, YYYY hh:mm A");

          return (
            <span className="badge text-success border border-success border-dashed">
              {formattedDate}
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
              type="button"
              className="avatar-text avatar-md"
              onClick={() => {
                setSelectedAnnouncement(row.original);
                setSidebarOpen(true);
              }}
            >
              <FiEye />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  // helper functsions

  // function to fetch and set the data to the tabel
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMoreOpen, setViewMoreOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/users/all-announcements");
        const data = await res.json();

        setAnnouncements(data.announcements || []);
        console.log("Received leaves:", data.announcements);
      } catch (err) {
        console.error("Error fetching leaves:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);
  // function to fetch and set the data to the tabel

  return (
    <>
      <Table data={announcements} columns={columns} loading={loading} />
      {sidebarOpen && selectedAnnouncement && (
        <ViewmoreSection
          data={selectedAnnouncement}
          onClose={() => {
            setSidebarOpen(false);
            setSelectedAnnouncement(null);
          }}
        />
      )}
    </>
  );
};

export default AllAnnouncement;
