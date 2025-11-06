import Image from "next/image";
import Link from "next/link";
import { dashboardStats, quickActions, analyticsReports } from "./lib/mockApi";

export default function Home() {
  const stats = [
    {
      title: "Total Users",
      value: dashboardStats.totalUsers.value.toLocaleString(),
      change: `↑ ${dashboardStats.totalUsers.change} ${dashboardStats.totalUsers.period}`,
      changeColor: "text-green-600"
    },
    {
      title: "Placeholder menu 1 ",
      value: dashboardStats.activeCourses.value.toLocaleString(),
      change: `↑ ${dashboardStats.activeCourses.change} ${dashboardStats.activeCourses.period}`,
      changeColor: "text-green-700"
    },
    {
      title: "Placement menu 2",
      value: dashboardStats.completedMasterclasses.value.toLocaleString(),
      change: `↑ ${dashboardStats.completedMasterclasses.change} ${dashboardStats.completedMasterclasses.period}`,
      changeColor: "text-green-600"
    },
    {
      title: "Placeholder menu 3",
      value: dashboardStats.publishedBlogPosts.value.toLocaleString(),
      change: `↓ ${dashboardStats.publishedBlogPosts.change} ${dashboardStats.publishedBlogPosts.period}`,
      changeColor: "text-red-500"
    }
  ];

  return (
    <div className="font-sans bg-[#F8FAFC] min-h-screen">
      <main className="flex-1  pl-7 pr-10">
        <h1 className="text-2xl font-semibold text-[#18181B] mb-5">Dashboard Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-7">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-xl bg-white p-5 flex flex-col gap-1 border border-[#F1F3F5] shadow-sm">
              <div className="text-[#171A1FFF] text-[15px] font-medium">{stat.title}</div>
              <div className="text-2xl text-[#171A1FFF] font-bold">{stat.value}</div>
              <div className={`${stat.changeColor} text-[14px] font-medium`}>{stat.change}</div>
            </div>
          ))}
        </div>
        {/* Quick Actions */}
        {/* <div className="mb-10">
          <div className="text-lg text-[#171A1FFF] font-semibold mb-3">Quick Actions</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#2563eb0d] rounded-2xl p-5">
            {quickActions.map((action, index) => {
              const getIcon = (iconType: string) => {
                switch (iconType) {
                  case "users":
                    return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10"/><path d="M15 9h.01"/><path d="M9 9h.01"/><path d="M9 15c1.5 1 3.5 1 5 0"/></svg>;
                  case "plus-square":
                    return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8z"/></svg>;
                  case "grid":
                    return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>;
                  case "credit-card":
                    return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 6V4h8v2"/><path d="M8 18v2h8v-2"/></svg>;
                  default:
                    return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10"/></svg>;
                }
              };

              return (
                <div key={action.id} className="rounded-xl bg-white p-6 shadow-sm flex flex-col border border-[#E5E9F2] min-h-[160px]">
                  <span className="mb-2 text-[#2563eb] text-2xl">
                    {getIcon(action.icon)}
                  </span>
                  <div className="text-lg text-[#171A1FFF] font-semibold mb-2">{action.title}</div>
                  <div className="text-[15px] text-[#6B7280] mb-4">{action.description}</div>
                  <Link 
                    href={action.href}
                    className="mt-auto bg-[#2563eb] hover:bg-[#1d4ed8] transition rounded-md text-white px-4 py-2 text-sm font-medium text-center block"
                  >
                    {action.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Analytics Reports */}
        <div>
          <div className="text-lg text-[#171A1FFF] font-semibold mb-3">Analytics Reports</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Active Users */}
            <div className="bg-white border border-[#F1F3F5] rounded-xl p-6 shadow-sm min-h-[250px] flex flex-col items-center justify-center">
              <div className="font-semibold text-lg text-[#171A1FFF] mb-2">{analyticsReports.activeUsers.title}</div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-[#EFF6FF] h-[120px] w-[120px] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#2563eb] font-bold">{analyticsReports.activeUsers.value}</span>
                </div>
                <div className="text-[#818594] text-md">{analyticsReports.activeUsers.description}</div>
              </div>
            </div>
            {/* Masterclass Attendance Rate */}
            <div className="bg-white border border-[#F1F3F5] rounded-xl p-6 shadow-sm min-h-[250px] flex flex-col items-center justify-center">
              <div className="font-semibold text-lg text-[#171A1FFF] mb-2">{analyticsReports.masterclassAttendance.title}</div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-[#EFF6FF] h-[120px] w-[120px] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#2563eb] font-bold">{analyticsReports.masterclassAttendance.value}</span>
                </div>
                <div className="text-[#818594] text-md">{analyticsReports.masterclassAttendance.description}</div>
                <div className="text-[#818594] text-md">{analyticsReports.masterclassAttendance.subDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
