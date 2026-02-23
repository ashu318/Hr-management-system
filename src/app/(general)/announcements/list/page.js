import React from "react";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import AnnouncementHeader from "@/components/announcements/AnnouncementHeader";
import ProjectsTwo from "@/components/widgetsTables/ProjectsTwo";
import CreateAnnouncements from "@/components/announcements/CreateAnnouncements";
import ListRecentAnnounements from "@/components/announcements/ListRecentAnnounements";
import AllAnnouncement from "@/components/announcements/AllAnnouncement";

const page = () => {
  return (
    <>
      <div className="main-content">
        <div className="row">
          <AllAnnouncement />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
