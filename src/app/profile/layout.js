"use client";
import React from "react";
import NavigationManu from "@/components/shared/navigationMenu/NavigationMenu";
import useBootstrapUtils from "@/hooks/useBootstrapUtils";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import Header from "@/components/shared/header/Header";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();
  useBootstrapUtils(pathName);

  return (
    <>
      <Header />
      <NavigationManu />

      <main className="nxl-container apps-container">
        <div className="nxl-content without-header nxl-full-content">
          <div className="main-content d-flex">
            <ProfileSidebar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default layout;
