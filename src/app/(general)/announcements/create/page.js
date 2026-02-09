import React from "react";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PageHeaderWidgets from "@/components/shared/pageHeader/PageHeaderWidgets";
import ProjectsTwo from "@/components/widgetsTables/ProjectsTwo";
import CreateAnnouncements from "@/components/announcements/CreateAnnouncements";
import ListRecentAnnounements from "@/components/announcements/ListRecentAnnounements";

const page = () => {
    return (
        <>
            <PageHeader>
                <PageHeaderWidgets />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <CreateAnnouncements title={"Create Email's"} className={"col-xxl-8"} />
                    <ListRecentAnnounements />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
