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
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
} from "reactstrap";

const AdminNavbar = (props) => {
	return (
		<>
			<Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
				<Container fluid>
					<Link
						className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
						to="/"
					>
						{props.brandText}
					</Link>
					<Nav className="align-items-center d-none d-md-flex" navbar>
						<UncontrolledDropdown nav>
							<DropdownToggle className="pr-0" nav>
								<Media className="align-items-center">
									<span className="avatar avatar-sm rounded-circle">
										<img
											alt="..."
											src={
												require("../../assets/img/theme/team-4-800x800.jpg")
													.default
											}
										/>
									</span>
									<Media className="ml-2 d-none d-lg-block">
										<span className="mb-0 text-sm font-weight-bold">
											La Val's Pizza
										</span>
									</Media>
								</Media>
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-arrow" right>
								<DropdownItem className="noti-title" header tag="div">
									<h6 className="text-overflow m-0">Welcome!</h6>
								</DropdownItem>
								<DropdownItem to="/admin/profile" tag={Link}>
									<i className="ni ni-single-02" />
									<span>My Profile</span>
								</DropdownItem>
								<DropdownItem to="/admin/update-profile" tag={Link}>
									<i className="ni ni-settings" />
									<span>Update Profile</span>
								</DropdownItem>
								<DropdownItem to="/auth/login" tag={Link}>
									<i className="ni ni-button-power" />
									<span>Sign Out</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default AdminNavbar;
