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

const UpdateProfile = () => {
	return (
		<>
			<UserHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h3 className="mb-0">My Account</h3>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Form>
									<h6 className="heading-small text-muted mb-4">
										User Information
									</h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-username"
													>
														Username
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="berkeley-lavals"
														id="input-username"
														placeholder="Username"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-email"
													>
														Email Address
													</label>
													<Input
														className="form-control-alternative"
														id="input-email"
														placeholder="example@gmail.com"
														type="email"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="12">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-first-name"
													>
														Business Name
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="La Val's Pizza"
														id="input-first-name"
														placeholder="First name"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									{/* Address */}
									<h6 className="heading-small text-muted mb-4">
										Contact Information
									</h6>
									<div className="pl-lg-4">
										<Row>
											<Col md="12">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-address"
													>
														Address
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="1834 Euclid Ave"
														id="input-address"
														placeholder="Home Address"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="4">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-city"
													>
														City
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Berkeley"
														id="input-city"
														placeholder="City"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="4">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-country"
													>
														State
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="CA"
														id="input-country"
														placeholder="State"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="4">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-country"
													>
														Postal code
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="94709"
														id="input-postal-code"
														placeholder="Postal code"
														type="number"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									{/* Description */}
									<h6 className="heading-small text-muted mb-4">About me</h6>
									<div className="pl-lg-4">
										<FormGroup>
											<label>About Us</label>
											<Input
												className="form-control-alternative"
												placeholder="UC Berkeley's premier pizzeria."
												rows="4"
												defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
												type="textarea"
											/>
										</FormGroup>
									</div>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default UpdateProfile;
