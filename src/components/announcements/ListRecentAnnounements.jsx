"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CardHeader from "@/components/shared/CardHeader";
import { upcomingScheduleList } from "@/utils/fackData/upcomingScheduleList";
import ImageGroup from "@/components/shared/ImageGroup";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import LeavesBalance from "@/components/loaders/LeavesBalanceLoaders";
import { useAnnouncementStore } from "@/store/announcementStore"
import toast from "react-hot-toast";

const ListRecentAnnounements = ({ title }) => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();

  if (isRemoved) {
    return null;
  }

  // Fecth Announcements list
  // const [announcements, setAnnouncements] = useState([]);
  const COLORS = ["primary", "success", "warning", "info", "danger"];
  // const [isLoading, setIsLoading] = useState(true);
  const team_memberss = [
    {
      id: 1,
      user_name: "Janette Dalton",
      user_img: "/images/avatar/2.png",
    },
    {
      id: 2,
      user_name: "Mikal Bon",
      user_img: "/images/avatar/3.png",
    },
    {
      id: 3,
      user_name: "Socrates Itumay",
      user_img: "/images/avatar/4.png",
    },
    {
      id: 4,
      user_name: "Jakson Jak",
      user_img: "/images/avatar/6.png",
    },
  ];

  // const formatAnnouncementForUI = (announcement, index) => {
  //   const dateObj = new Date(announcement.createdAt);

  //   return {
  //     id: announcement.id,
  //     title: announcement.title,
  //     message: announcement.message,

  //     date: {
  //       day: dateObj.getDate(),
  //       month: dateObj.toLocaleString("en-US", { month: "short" }),
  //       time: dateObj.toLocaleTimeString("en-US", {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       }),
  //     },

  //     createdAt: dateObj.getDate(),
  //     color: COLORS[index % COLORS.length], // ✅ now works
  //     team_members: team_memberss,
  //   };
  // };

  // const fetchRecentEmails = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch("/api/announcements");
  //     const data = await response.json();

  //     if (!response.ok) {
  //       toast.error(data.message || "Something went wrong");
  //       return;
  //     }

  //     const formatted = data.announcements.map(formatAnnouncementForUI);
  //     setAnnouncements(formatted);
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchRecentEmails();
  // }, []);




  const { recentAnnouncements, fetchRecentAnnouncements, loading } = useAnnouncementStore()

  useEffect(() => {
    fetchRecentAnnouncements();
  }, [])


  const formattedAnnouncements = recentAnnouncements.map((announcement, index) => {
    const dateObj = new Date(announcement.createdAt);

    return {
      id: announcement.id,
      title: announcement.title,
      date: {
        month: dateObj.toLocaleString("en-US", { month: "short" }),
        time: dateObj.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      createdAt: dateObj.getDate(),
      color: COLORS[index % COLORS.length],
      team_members: team_memberss,
    };
  });

  return (
    <div className="col-xxl-4">
      <div
        className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}
      >
        <CardHeader
          title="Recent Email's"
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />
        {loading ? (
          <LeavesBalance rows={4} />
        ) : (
          <>
            <div className="card-body">
              {formattedAnnouncements.map(({ date, id, team_members, color, title, createdAt }) => {
                return (
                  <div key={id} className="p-3 border border-dashed rounded-3 schedule-card">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className={`wd-50 ht-50 lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 bg-soft-${color} text-${color} schedule-date`}
                        >
                          <span className="fs-18 fw-bold mb-1 d-block">{createdAt}</span>
                          <span className="fs-10 fw-semibold text-uppercase d-block">
                            {date.month}
                          </span>
                        </div>
                        <div className="text-dark">
                          <Link href="#" className="fw-bold mb-2 text-truncate-1-line">
                            {title}
                          </Link>
                          <span className="fs-11 fw-normal text-muted text-truncate-1-line">
                            {date.time}
                          </span>
                        </div>
                      </div>
                      <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                        <ImageGroup data={team_members} avatarSize="avatar-md" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListRecentAnnounements;
