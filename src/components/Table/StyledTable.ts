import { styled } from "styled-components";

const StyledTable = styled.table.attrs({
    className: "w-full p-8"
})``;

const StyledTableHead = styled.thead.attrs({
    className: "text-2xl text-white font-bold bg-blue-800 text-left h-24"
})`

    th:first-child {
        padding-inline-start: 0.5rem;
    }

`;

const StyledTableHeaderColumn = styled.th.attrs({
    className: ""
})``;

const StyledTableBody = styled.tbody.attrs({
    className: ""
})``;

const StyledTableRow = styled.tr.attrs({
    className: "font-bold text-white odd:bg-blue-400 even:bg-blue-600 h-12"
})`

    td:first-child {
        padding-inline-start: 0.5rem;
    }

`;

const StyledTableRowColumn = styled.td.attrs({
    className: ""
})``;

export { StyledTable, StyledTableHead, StyledTableHeaderColumn, StyledTableBody, StyledTableRow, StyledTableRowColumn };