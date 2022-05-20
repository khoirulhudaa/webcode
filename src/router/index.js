import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage, Create, ReactTable } from "../pages";

export default function Routes() {
	return (
		<Switch>
            {/* Public Routes */}
            <Route exact path="/" component={Homepage}></Route>
			<Route 
				exact
				path="/create"
				component={Create}
			>
			</Route>
		</Switch>
	)
}