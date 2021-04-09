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

import Header from "components/Headers/Header.js";

const PaymentsDashboard = () => {
	return (
		<>
			<Header />

			<Container className="mt--7" fluid>
				<Row>
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
											<b>Gross Sales</b>
										</th>
										<td>
											<b>29,149</b>
										</td>
										<td>28,191</td>
									</tr>

									<tr>
										<th scope="row">Tax</th>
										<td>2,332</td>
										<td>
											<b>2,252</b>
										</td>
									</tr>

									<tr>
										<th scope="row">Tips</th>
										<td>
											<b>285</b>
										</td>
										<td>178</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Total Collected</b>
										</th>
										<td>
											<b>26,532</b>
										</td>
										<td>25,761</td>
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

export default PaymentsDashboard;
