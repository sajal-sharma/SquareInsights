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
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	NavItem,
	NavLink,
	Nav,
	Progress,
	Table,
	Container,
	Row,
	Col,
} from "reactstrap";

// core components
import {
	chartOptions,
	parseOptions,
	sales,
	orders,
	timeOfDay,
	items,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const CategoryDashboard = (props) => {
	const [activeNav, setActiveNav] = useState(1);
	const [salesData, setSalesData] = useState("data1");

	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setSalesData("data" + index);
	};

	return (
		<>
			<Header />

			<Container className="mt--7" fluid>
				<Row>
					<Col className="mb-5 mb-xl-0" xl="12">
						<Card className="bg-gradient-default shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h6 className="text-uppercase text-light ls-1 mb-1">
											Month to Date
										</h6>
										<h2 className="text-white mb-0">Top 5 Categories</h2>
									</div>

									<div className="col">
										<Nav className="justify-content-end" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 1,
													})}
													href="#pablo"
													onClick={(e) => toggleNavs(e, 1)}
												>
													<span className="d-none d-md-block">You</span>
													<span className="d-md-none">Y</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 2,
													})}
													data-toggle="tab"
													href="#pablo"
													onClick={(e) => toggleNavs(e, 2)}
												>
													<span className="d-none d-md-block">Comparables</span>
													<span className="d-md-none">C</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>

							<CardBody>
								<div className="chart">
									<Line
										data={items[salesData]}
										options={items.options}
										getDatasetAtEvent={(e) => console.log(e)}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>

				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="12">
						<Card className="shadow">
							<CardHeader className="border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="mb-0">Month to Date</h3>
									</div>
								</Row>
							</CardHeader>

							<Table className="align-items-center table-flush" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col" />
										<th scope="col">You</th>
										<th scope="col">Comparables</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<th scope="row">
											<b>Pizzas</b>
										</th>
										<td>
											<b>10,847</b>
										</td>
										<td>9,875</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Pastas</b>
										</th>
										<td>
											<b>6,375</b>
										</td>
										<td>6,333</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Drinks</b>
										</th>
										<td>4,395</td>
										<td>
											<b>6,102</b>
										</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Salads</b>
										</th>
										<td>3,598</td>
										<td>
											<b>3,964</b>
										</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Calzones</b>
										</th>
										<td>
											<b>2,275</b>
										</td>
										<td>1,838</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CategoryDashboard;
