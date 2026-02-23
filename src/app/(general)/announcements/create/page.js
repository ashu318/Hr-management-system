import React from "react";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import AnnouncementHeader from "@/components/announcements/AnnouncementHeader";
import ProjectsTwo from "@/components/widgetsTables/ProjectsTwo";
import CreateAnnouncements from "@/components/announcements/CreateAnnouncements";
import ListRecentAnnounements from "@/components/announcements/ListRecentAnnounements";

const page = () => {
  return (
    <>
      <div className="main-content">
        <div className="row">
          <CreateAnnouncements title={"Create Email's"} className={"col-xxl-8"} />
          <ListRecentAnnounements />
        </div>
      </div>
    </>
  );
};

export default page;
