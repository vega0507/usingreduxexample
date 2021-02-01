import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 450,
  },
  header:{
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  }
}));

function ClientList(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className={classes.header}>Client Name</TableCell>
            <TableCell className={classes.header}>Client Last Name</TableCell>                
          </TableRow>
        </TableHead>
        <TableBody>  
          {props.clientList.map((row,index) => (
            <TableRow key={index}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
                      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = (state) =>{   
  return { 
    clientList: state.clientReducer, 
  };
}

export default connect(mapStateToProps, {
  //actions
  
   
})(ClientList); 