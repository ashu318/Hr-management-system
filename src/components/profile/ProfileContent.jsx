'use client';
import React from "react";
import { useParams } from "next/navigation";
import TabOverviewContent from "@/components/customersView/TabOverviewContent";
import TabBillingContent from "@/components/customersView/TabBillingContent";
import TabActivityContent from "@/components/customersView/TabActivityContent";
import TabNotificationsContent from "@/components/customersView/TabNotificationsContent";
import TabConnections from "@/components/customersView/TabConnections";
import TabSecurity from "@/components/customersView/TabSecurity";
import Profile from "@/components/widgetsList/Profile";
import { useState, useEffect } from "react";

const ProfileContent = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `/api/auth/my-profile`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch user");
                }

                const data = await res.json();

                if (data.success) {
                    setUser(data.user);
                    console.log("Received user details:", data.user);
                }
            } catch (err) {
                console.error("Error fetching user:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <>
            <div className="col-xxl-4 col-xl-6">
                <Profile user={user} />

            </div>
            <div className="col-xxl-8 col-xl-6">
                <div className="card border-top-0">
                    <div className="card-header p-0">
                        <ul
                            className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item flex-fill border-top" role="presentation">
                                <a
                                    href="#"
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    data-bs-target="#overviewTab"
                                    role="tab"
                                >
                                    Overview
                                </a>
                            </li>
                            {/* <li className="nav-item flex-fill border-top" role="presentation">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#billingTab"
                                    role="tab"
                                >
                                    Account Info
                                </a>
                            </li> */}
                            {/* <li className="nav-item flex-fill border-top" role="presentation">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#notificationsTab"
                                    role="tab"
                                >
                                    Documents
                                </a>
                            </li> */}
                            <li className="nav-item flex-fill border-top" role="presentation">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#activityTab"
                                    role="tab"
                                >
                                    Activity
                                </a>
                            </li>

                            {/* <li className="nav-item flex-fill border-top" role="presentation">
                <a
                  href="#"
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#connectionTab"
                  role="tab"
                >
                  Connection
                </a>
              </li>
              <li className="nav-item flex-fill border-top" role="presentation">
                <a
                  href="#"
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#securityTab"
                  role="tab"
                >
                  Security
                </a>
              </li> */}
                        </ul>
                    </div>
                    <div className="tab-content">
                        <TabOverviewContent user={user} />
                        {/* <div className="tab-pane fade" id="billingTab" role="tabpanel">
                            <TabBillingContent billingHistoryshow={true} user={user} />
                        </div> */}
                        <TabActivityContent />
                        <TabNotificationsContent employeeId={user?.employeeId} />
                        <TabConnections />
                        <TabSecurity />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileContent;
