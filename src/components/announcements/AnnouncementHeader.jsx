import React from "react";
import { FiFilter, FiEye } from "react-icons/fi";
import Checkbox from "@/components/shared/Checkbox";
import Link from "next/link";

const filterItems = ["Role", "Team", "Email", "Member", "Recommendation"];

const AnnouncementHeader = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
        <a href="/announcements/list" className="btn btn-primary">
          <FiEye size={16} className="me-2" />
          <span>View All</span>
        </a>
      </div>
    </>
  );
};

export default AnnouncementHeader;
