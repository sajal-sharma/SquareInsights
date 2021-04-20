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
import ConsultingHeader from "components/Headers/ConsultingHeader.js";

const Consulting = () => {
	return (
		<>
			<ConsultingHeader />

			<Container className="mt--7" fluid>
				<Row className="mb-7">
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/headshots/ken.jpeg").default
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
												<span className="heading">18</span>
												<span className="description">Clients</span>
											</div>
											<div>
												<span className="heading">4.8</span>
												<span className="description">Rating</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>Ken Sandy</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Product Manager at MasterClass
									</div>
									<hr className="my-4" />
									<p>
										With over 20 years of experience, I've helped companies of
										all sizes successfully launch new products.
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/headshots/sajal.jpeg").default
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
												<span className="heading">3</span>
												<span className="description">Years</span>
											</div>
											<div>
												<span className="heading">2</span>
												<span className="description">Clients</span>
											</div>
											<div>
												<span className="heading">4.6</span>
												<span className="description">Rating</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>Sajal Sharma</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Engineering Manager at Square Insights
									</div>
									<hr className="my-4" />
									<p>
										A recent grad of UC Berkeley, I'm always looking to work on
										challenging and rewarding projects.
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/headshots/felipe.jpeg").default
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
												<span className="heading">2</span>
												<span className="description">Years</span>
											</div>
											<div>
												<span className="heading">5</span>
												<span className="description">Clients</span>
											</div>
											<div>
												<span className="heading">4.9</span>
												<span className="description">Rating</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>Felipe Barragan</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										CEO at Square Insights
									</div>
									<hr className="my-4" />
									<p>
										A true Renaissance man, I have lead numerous teams to
										success.
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/headshots/khushi.jpeg").default
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
												<span className="heading">2</span>
												<span className="description">Years</span>
											</div>
											<div>
												<span className="heading">4</span>
												<span className="description">Clients</span>
											</div>
											<div>
												<span className="heading">4.6</span>
												<span className="description">Rating</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>Khushi Malde</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Head of Marketing at Square Insights
									</div>
									<hr className="my-4" />
									<p>
										With over 20 years of experience, I've helped companies of
										all sizes successfully launch new products.
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/headshots/apurva.jpeg").default
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
												<span className="heading">3</span>
												<span className="description">Years</span>
											</div>
											<div>
												<span className="heading">3</span>
												<span className="description">Clients</span>
											</div>
											<div>
												<span className="heading">4.6</span>
												<span className="description">Rating</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>Apurva Rastogi</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Head of Product Research at Square Insights
									</div>
									<hr className="my-4" />
									<p>
										A recent grad of UC Berkeley, I'm always looking to work on
										challenging and rewarding projects.
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../assets/img/headshots/james.jpeg").default
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
												<span className="heading">3</span>
												<span className="description">Years</span>
											</div>
											<div>
												<span className="heading">3</span>
												<span className="description">Clients</span>
											</div>
											<div>
												<span className="heading">4.6</span>
												<span className="description">Rating</span>
											</div>
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>James Cheng</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Product Manager at Square Insights
									</div>
									<hr className="my-4" />
									<p>
										A true Renaissance man, I have successfully lead numerous
										teams to success.
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Consulting;
