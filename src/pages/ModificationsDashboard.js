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
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const ModificationsDashboard = (props) => {
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
											<b>Vegan Cheese Requests</b>
										</th>
										<td>NA</td>
										<td>
											<b>175</b>
										</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Substitute Meat Requests</b>
										</th>
										<td>42</td>
										<td>
											<b>102</b>
										</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Nut-Free Pesto Requests</b>
										</th>
										<td>58</td>
										<td>
											<b>68</b>
										</td>
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

export default ModificationsDashboard;
