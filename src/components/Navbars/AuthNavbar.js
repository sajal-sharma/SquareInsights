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
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const AdminNavbar = () => {
	return (
		<>
			<Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
				<Container className="px-4">
					<NavbarBrand to="/admin/profile" tag={Link}>
						<img
							alt="..."
							src={require("../../assets/img/brand/header2.png").default}
						/>
					</NavbarBrand>
					<button className="navbar-toggler" id="navbar-collapse-main">
						<span className="navbar-toggler-icon" />
					</button>
					<UncontrolledCollapse navbar toggler="#navbar-collapse-main">
						<div className="navbar-collapse-header d-md-none">
							<Row>
								<Col className="collapse-brand" xs="6">
									<Link to="/">
										<img
											alt="..."
											src={
												require("../../assets/img/brand/argon-react.png")
													.default
											}
										/>
									</Link>
								</Col>
								<Col className="collapse-close" xs="6">
									<button className="navbar-toggler" id="navbar-collapse-main">
										<span />
										<span />
									</button>
								</Col>
							</Row>
						</div>
					</UncontrolledCollapse>
				</Container>
			</Navbar>
		</>
	);
};

export default AdminNavbar;
