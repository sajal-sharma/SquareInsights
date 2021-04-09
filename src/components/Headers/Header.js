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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
	return (
		<>
			<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
				<Container fluid>
					<div className="header-body">
						{/* Card stats */}
						<Row>
							<Col lg="6" xl="3">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Sales
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">
													$29,103.20
												</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
													<i className="fas fa-chart-bar" />
												</div>
											</Col>
										</Row>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span className="text-success mr-2">
												<i className="fa fa-arrow-up" /> 3.48%
											</span>{" "}
											<span className="text-nowrap">Month to date</span>
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg="6" xl="3">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Customers
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">2,780</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
													<i className="ni ni-single-02" />
												</div>
											</Col>
										</Row>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span className="text-danger mr-2">
												<i className="fas fa-arrow-down" /> 0.56%
											</span>{" "}
											<span className="text-nowrap">Month to date</span>
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg="6" xl="3">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Average Order
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">$10.47</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
													<i className="ni ni-credit-card" />
												</div>
											</Col>
										</Row>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span className="text-success mr-2">
												<i className="fas fa-arrow-up" /> 4.28%
											</span>{" "}
											<span className="text-nowrap">Month to date</span>
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg="6" xl="3">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Units Sold
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">2,780</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-info text-white rounded-circle shadow">
													<i className="ni ni-bag-17" />
												</div>
											</Col>
										</Row>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span className="text-warning mr-2">
												<i className="fas fa-arrow-down" /> 0.79%
											</span>{" "}
											<span className="text-nowrap">Month to date</span>
										</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Header;
