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

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const ProfileHeader = () => {
	return (
		<>
			<div
				className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
				style={{
					minHeight: "600px",
					backgroundImage:
						"url(" +
						require("../../assets/img/theme/new_york.jpg").default +
						")",
					backgroundSize: "cover",
					backgroundPosition: "center top",
				}}
			>
				<span className="mask bg-gradient-default opacity-8" />

				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="7" md="10">
							<h1 className="display-2 text-white">La Val's Pizza</h1>
							<p className="text-white mt-0 mb-5">
								This is how your profile page looks to consultants and other
								businesses.
							</p>
							<Button color="info" href="/admin/update-profile">
								Edit Profile
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default ProfileHeader;
