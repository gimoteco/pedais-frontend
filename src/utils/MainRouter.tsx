import React from "react"
import { BrowserRouter as Router, generatePath, Route, Switch, useHistory } from "react-router-dom"
import { routes } from "../configuration/routes"
import PrivateRoute from "./routes"

export function MainRouter() {
    return (
        <Router forceRefresh>
            <Switch>
                {Object.values(routes).map((route: any) => {
                    const RouteType = route.private ? PrivateRoute : Route
                    return <RouteType key={route.path} {...route} />
                })}
            </Switch>
        </Router>
    )
}

export function useGoTo(route, hookParams = {}) {
    const history = useHistory()
    return (invokeParams: any = undefined) => history.push(generatePath(route.path, invokeParams || hookParams))
}
