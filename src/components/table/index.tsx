import {default as MuiTable} from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {maskMoney, maskNumber} from "../../ultils/mask.ts";

function createData(
  name: string,
  mediumPrice: number,
  price: number,
  quantity: number,
) {
  return { name, mediumPrice, price, quantity };

}

const rows = [
  createData('ENJU3', 2.50, 1.68, 1200),
  createData('PETRA4', 30.66, 9.0, 6543),
  createData('VALE3', 25.99, 16.0, 887),
  createData('SPCE11', 99.77, 3.7, 1265),
  createData('BRML3', 65.44, 16.0, 6654),
];

export const Table = () => {
  return (
    <TableContainer component={Paper}>
      <MuiTable width='100%' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ativo</TableCell>
            <TableCell align="center">Preço médio</TableCell>
            <TableCell align="center">Preço atual</TableCell>
            <TableCell align="right">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{maskMoney(row.mediumPrice)}</TableCell>
              <TableCell align="center">{maskMoney(row.price)}</TableCell>
              <TableCell align="right">{maskNumber(row.quantity)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
