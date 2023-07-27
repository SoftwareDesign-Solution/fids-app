import { RouteObject } from "react-router-dom";
import App from "../App";
import { Arrivals } from "../pages/arrivals/Arrivals";
import { Departures } from "../pages/departures/Departures";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/arrivals', element: <Arrivals /> },
            { path: '/departures', element: <Departures /> },
        ]
    }
];

export {
    routes
};