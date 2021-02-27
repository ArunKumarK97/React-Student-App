
import Dashboard from "views/Dashboard.jsx";
import Login from "views/Login";
import StudentsInfo from "views/StudentProfile";
import StudentList from "views/StudentList";
import Message from "views/Message";

const dashboardRoutes = [
  {
    path: "/",
    name: "login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
    isPrivate: true,
  },
  {
    path: "/Info",
    name: "Student Profile",
    icon: "pe-7s-user",
    component: StudentsInfo,
    layout: "/admin",
    isPrivate: true,
  },
  {
    path: "/studentList",
    name: "Student List",
    icon: "pe-7s-note2",
    component: StudentList,
    layout: "/admin",
    isPrivate: true,
  },
  {
    path: "/message",
    name: "Message",
    icon: "pe-7s-bell",
    component: Message,
    layout: "/admin",
    isPrivate: true,
  }
];

export default dashboardRoutes;
