import { StyledTable, StyledTableBody, StyledTableHead, StyledTableHeaderColumn, StyledTableRow, StyledTableRowColumn } from "../../components/Table/StyledTable";
import { useLight } from "../../hooks/useLight";
import { FlightDepartures } from "../../models/FlightDepartures";

const Departures = () => {

    const light = useLight();
    
    return (
        <div>
            <StyledTable>
                <StyledTableHead>
                    <StyledTableHeaderColumn>Flug<br />Flight</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>nach<br/>to</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>planmäßig<br/>scheduled</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>voraussichtl.<br/>estimated</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>Gate</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn>Check-in</StyledTableHeaderColumn>
                    <StyledTableHeaderColumn></StyledTableHeaderColumn>
                    <StyledTableHeaderColumn></StyledTableHeaderColumn>
                </StyledTableHead>
                <StyledTableBody>
                    {FlightDepartures.map((flight) => (
                        <StyledTableRow>
                            <StyledTableRowColumn>{flight.flightNumber}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.to}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.plannedArrival.toLocaleTimeString()}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.estimatedArrival?.toLocaleTimeString()}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.gate}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.checkIn}</StyledTableRowColumn>
                            <StyledTableRowColumn>{flight.status}</StyledTableRowColumn>
                            <StyledTableRowColumn>{(flight.status === "Boarding") ? light : ""}</StyledTableRowColumn>
                        </StyledTableRow>
                    ))}
                </StyledTableBody>
            </StyledTable>
        </div>
    )
};

export {
    Departures
};