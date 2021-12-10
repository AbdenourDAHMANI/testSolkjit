import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(A, B, C) {
    return { A, B, C };
}

const rows = [
    createData('test', 159, 6.0),
    createData('test1', 237, 9.0,),
    createData('test2', 262, 16.0,),
    createData('test3', 305, 3.7,),
    createData('test4', 356, 16.0,),
];
export const TableExample = (props) => {

    return <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>test1</TableCell>
            <TableCell align="right">test2</TableCell>
            <TableCell align="right">test3</TableCell>
            <TableCell align="right">test4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.A}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.A}
              </TableCell>
              <TableCell align="right">{row.B}</TableCell>
              <TableCell align="right">{row.C}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>

}