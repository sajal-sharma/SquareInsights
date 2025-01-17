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
											<b>Card Transactions</b>
										</th>
										<td>
											<b>2,589</b>
										</td>
										<td>2,203</td>
									</tr>

									<tr>
										<th scope="row">Swiped</th>
										<td>
											<b>2,555</b>
										</td>
										<td>2,179</td>
									</tr>

									<tr>
										<th scope="row">Keyed</th>
										<td>
											<b>32</b>
										</td>
										<td>24</td>
									</tr>

									<tr>
										<th scope="row">Other</th>
										<td>
											<b>2</b>
										</td>
										<td>0</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Cash Transactions</b>
										</th>
										<td>10</td>
										<td>
											<b>248</b>
										</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Gift Card Transactions</b>
										</th>
										<td>0</td>
										<td>
											<b>38</b>
										</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Other</b>
										</th>
										<td>
											<b>18</b>
										</td>
										<td>15</td>
									</tr>

									<tr>
										<th scope="row">
											<b>Total</b>
										</th>
										<td>
											<b>2,617</b>
										</td>
										<td>2,504</td>
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
