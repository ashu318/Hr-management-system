"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import CardHeader from "@/components/shared/CardHeader";
import { projectsData } from "@/utils/fackData/projectsData";
import { FiArrowRight } from "react-icons/fi";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import Image from "next/image";
import CreateForm from "./CreateForm";

const CreateAnnouncements = ({ title, className }) => {
    const data = projectsData.projectsStats;
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
        useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className={className} >
            <div
                className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}
            >
                <CardHeader
                    title={title}
                    refresh={handleRefresh}
                    remove={handleDelete}
                    expanded={handleExpand}
                />
                <CreateForm />


                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    );
};

export default CreateAnnouncements;
