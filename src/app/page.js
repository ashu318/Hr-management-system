
import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PageHeaderDate from "@/components/shared/pageHeader/PageHeaderDate";
import SiteOverviewStatistics from "@/components/widgetsStatistics/SiteOverviewStatistics";
import PaymentRecordChart from "@/components/widgetsCharts/PaymentRecordChart";
import LeadsOverviewChart from "@/components/widgetsCharts/LeadsOverviewChart";
import TasksOverviewChart from "@/components/widgetsCharts/TasksOverviewChart";
import Project from "@/components/widgetsList/Project";
import Schedule from "@/components/widgetsList/Schedule";
import SalesMiscellaneous from "@/components/widgetsMiscellaneous/SalesMiscellaneous";
import LatestLeads from "@/components/widgetsTables/LatestLeads";
import TeamProgress from "@/components/widgetsList/Progress";
import { projectsDataTwo } from "@/utils/fackData/projectsDataTwo";
import DuplicateLayout from "./duplicateLayout";
// import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";

const Home = () => {
  // const router = useRouter();


  // useEffect(() => {
  //   fetch("/api/auth/me")
  //     .then(res => res.json())
  //     .then(data => {
  //       if (!data.user) {
  //         router.push("/authentication/login/minimal");
  //       } else if (data.user.role === "ADMIN") {
  //         router.push("/dashboard/admin/");
  //       } else {
  //         router.push("/dashboard/user/");
  //       }
  //     });
  // }, []);


  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <LoaderIcon className="mb-3" size={40} style={{ animation: "spin 1s linear infinite" }} />
      <h2 className="fw-bold mb-2">Welcome to Your HRMS</h2>
      <p className="text-muted">Preparing your dashboard...</p>

      {/* Custom spin animation */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
