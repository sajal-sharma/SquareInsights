/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Dashboard from "pages/Dashboard.js";
import Login from "pages/Login.js";
import Profile from "pages/Profile.js";
import Consulting from "pages/Consulting.js";
import UpdateProfile from "pages/UpdateProfile.js";

var routes = [
	{
		path: "/icons",
		name: "Icons",
		icon: "ni ni-planet text-blue",
		component: Icons,
		layout: "/admin",
	},
	{
		path: "/maps",
		name: "Maps",
		icon: "ni ni-pin-3 text-orange",
		component: Maps,
		layout: "/admin",
	},
	{
		path: "/user-profile",
		name: "User Profile",
		icon: "ni ni-single-02 text-yellow",
		component: Profile,
		layout: "/admin",
	},
	{
		path: "/tables",
		name: "Tables",
		icon: "ni ni-bullet-list-67 text-red",
		component: Tables,
		layout: "/admin",
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-yellow",
		component: Login,
		layout: "/auth",
	},
	{
		path: "/profile",
		name: "Profile",
		icon: "ni ni-single-02 text-red",
		component: Profile,
		layout: "/admin",
	},
	{
		path: "/update-profile",
		name: "Update Profile",
		icon: "ni ni-settings text-red",
		component: UpdateProfile,
		layout: "/admin",
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "ni ni-chart-bar-32 text-primary",
		component: Dashboard,
		layout: "/admin",
	},
	{
		path: "/consulting",
		name: "Consulting",
		icon: "ni ni-briefcase-24 text-green",
		component: Consulting,
		layout: "/admin",
	},
];
export default routes;
