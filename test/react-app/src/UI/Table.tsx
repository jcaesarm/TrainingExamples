import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  }
});

interface IProps {
  rows: any[];
  searchHandler: any;
  deleteHandler: any;
};



export default function MyTable(props: IProps) {

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  return (
    <Paper className={classes.root}>
      <TextField id="standard-basic" label="Search" onKeyDown={props.searchHandler} />
      { props.rows.length ?
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {Object.keys(props.rows[0]).map((key, index) => (
                  index === 0 ? <TableCell key={index} style={{ minWidth: 170 }}>{key}</TableCell> : <TableCell key={index} align="left" style={{ minWidth: 170 }}>{key}</TableCell>
                ))}
                <TableCell align="center" >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {Object.values<string>(row).map((value, index) => (
                      index === 0 ? <TableCell key={index}>{value}</TableCell> : <TableCell key={index} align="left">{value}</TableCell>
                    ))}
                    <TableCell align="center">
                      <IconButton color="primary" aria-label="delete"><VisibilityIcon /></IconButton>
                      <IconButton style={{ color: yellow[500] }} aria-label="delete"><EditIcon /></IconButton>
                      <IconButton color="secondary" aria-label="delete" onClick={props.deleteHandler}><DeleteIcon /></IconButton>
                      {/* <IconButton color="secondary" aria-label="delete" onClick={()=>console.log(row.ID)}><DeleteIcon /></IconButton> */}
                      </TableCell>
                  </TableRow> 
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        : <h3>No data found</h3>
      }
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}