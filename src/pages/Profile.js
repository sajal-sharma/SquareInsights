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
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
	return (
		<>
			<UserHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/theme/team-4-800x800.jpg")
														.default
												}
											/>
										</a>
									</div>
								</Col>
							</Row>
							<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
								<div className="d-flex justify-content-between">
									<Button
										className="mr-4"
										color="info"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
									>
										Connect
									</Button>
									<Button
										className="float-right"
										color="default"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
									>
										Message
									</Button>
								</div>
							</CardHeader>
							<CardBody className="pt-0 pt-md-4">
								<Row>
									<div className="col">
										<div className="card-profile-stats d-flex justify-content-center mt-md-5">
											<div>
												<span className="heading">22</span>
												<span className="description">Years</span>
											</div>
											<div>
												<span className="heading">50000</span>
												<span className="description">Customers</span>
											</div>
											<div>
												<span className="heading">3</span>
												<span className="description">Locations</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>La Val's Pizza</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										1834 Euclid Ave
									</div>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Berkeley, CA 94709
									</div>
									<hr className="my-4" />
									<p>UC Berkeley's premier pizzeria.</p>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Profile;
