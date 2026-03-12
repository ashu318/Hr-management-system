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
import { useAnnouncementStore } from '@/store/announcementStore'
import toast from "react-hot-toast";



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
        header: "From",
        meta: {
          className: "fw-bold text-dark",
        },
        cell: ({ row }) => {
          const user = row.original.createdBy;

          return (
            <div className="hstack gap-3">
              <div className="avatar-image avatar-md">
                <img src={user?.profileImageUrl || "https://i.pravatar.cc/150"} alt={user.fullName} className="img-fluid" />
              </div>
              <div>
                <span className="text-truncate-1-line fw-bold"> {user?.fullName}</span>
                <small className="fs-12 fw-normal text-muted d-block">{user?.email}</small>
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


  const [viewMoreOpen, setViewMoreOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const { announcements, loading, fetchAnnouncements } = useAnnouncementStore()

  useEffect(() => {
    fetchAnnouncements()
  }, [])



  return (
    <>
      <Table data={announcements} columns={columns} loading={loading} searchPlaceholder="Search Announcement..." />

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
