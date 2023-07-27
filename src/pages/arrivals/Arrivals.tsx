import { StyledTable, StyledTableBody, StyledTableHead, StyledTableHeaderColumn, StyledTableRow, StyledTableRowColumn } from "../../components/Table/StyledTable";
import { FlightArrivals } from "../../models/FlightArrivals";
import { useLight } from "../../hooks/useLight";

const Arrivals = () => {

    const light = useLight();

    return (
        <div>
            <StyledTable>
                <StyledTableHead>
                    <StyledTableHeaderColumn>Flug<br />Flight</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>von<br/>from</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>planmäßig<br/>scheduled</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>voraussichtl.<br/>estimated</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>Gate</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>Check-in</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn></StyledTableHeaderColumn>
                    <StyledTableHeaderColumn></StyledTableHeaderColumn>
                </StyledTableHead>
                <StyledTableBody>
                    {FlightArrivals.map((flight) => (
                        <StyledTableRow>
                            <StyledTableRowColumn>{flight.flightNumber}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.from}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.plannedArrival.toLocaleTimeString()}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.estimatedArrival?.toLocaleTimeString()}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.gate}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.checkIn}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.status}</StyledTableRowColumn>
                            <StyledTableRowColumn>{(flight.status === "Baggage Claim") ? light : ""}</StyledTableRowColumn>
                        </StyledTableRow>
                    ))}
                </StyledTableBody>
            </StyledTable>
        </div>
    )
};

export {
    Arrivals
};