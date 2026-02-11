"use client";
import React, { memo, useEffect, useState } from "react";
import Table from "@/components/shared/table/Table";
import {
  FiAlertOctagon,
  FiArchive,
  FiClock,
  FiEdit3,
  FiEye,
  FiMoreHorizontal,
  FiMoreVertical,
  FiPrinter,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import Dropdown from "@/components/shared/Dropdown";
import SelectDropdown from "@/components/shared/SelectDropdown";
import Select from "react-select";
import { customersTableData } from "@/utils/fackData/customersTableData";
import Link from "next/link";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./style.css";
import Loaders from "@/components/loaders/AllemployeeCardsLoaders";
import toast from "react-hot-toast";

const CustomersTable = () => {
  const [alluser, setallUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/users/all-users-details");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        // IMPORTANT: access data.users
        toast.success(data.message || "Data fetched successfully");
        setallUser(data.users);
        console.log("Fetched users:", data.users);
      } catch (error) {
        toast.error(error.message || "Failed to fetch users");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* 1️⃣ Loading state */}
          {loading && Array.from({ length: 8 }).map((_, index) => <Loaders key={index} />)}

          {/* 2️⃣ No users found */}
          {!loading && alluser.length === 0 && (
            <div className="col-12 text-center py-5">
              <h5 className="text-muted">No users found</h5>
              <p className="small text-secondary">
                There are no employees available for this organization.
              </p>
            </div>
          )}

          {/* 3️⃣ Users list */}
          {!loading &&
            alluser.length > 0 &&
            alluser.map((user) => (
              <div key={user.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="profile-card">
                  {/* Header */}
                  <div className="profile-header"></div>

                  {/* Avatar */}
                  <div className="profile-avatar">
                    <img src="https://i.pravatar.cc/150" alt={user.fullName} />
                  </div>

                  {/* Body */}
                  <div className="profile-body text-center">
                    <h5 className="mb-1">{user.fullName}</h5>
                    <p className="text-muted small">{user.designation}</p>

                    <div className="profile-info">
                      <span>Engineering Head Office</span>
                      <span>
                        <FiPhone /> {user.phone || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CustomersTable;
