import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import { addClient } from '../actions';
import { connect } from 'react-redux';

const ClientForm = (props) =>{
  const [client,setClient] = useState({name: '', lastName: ''});
  
  const addCliente = () =>{    
    //searching if the client exists 
    const val  = props.clientList.filter(
        cli => cli.name === client.name);
    //if not exists add client to list 
    if(val.length === undefined || val.length === 0){
        props.addClient(client);
        setClient({name: '', lastName: ''});
    }else{
        alert("Client already exists ");
    }
  }
    return(
      <Card>        
        <CardContent>
          <Grid container spacing={1}>
              <Grid item xs={12} sm={3}>
                  <TextField
                    id="clientName"
                    label="Client Name"
                    size="small"
                    type="string"
                    value={client.name}
                    onChange={(event)=>{setClient({...client, name: event.target.value})}}
                  />
              </Grid>
              <Grid item  xs={12} sm={3}>
                  <TextField
                    id="clientEmail"
                    label="Client Last Name"
                    size="small"
                    type="string"
                    value={client.lastName}
                    onChange={(event)=>{setClient({...client, lastName: event.target.value})}}
                  />
              </Grid>
              <Grid item xs={3}>
                  <Button variant="contained" color="primary" onClick={addCliente}>
                    Add 
                  </Button>
              </Grid>
              <Grid item xs={12}><br/><br/></Grid>
          </Grid>
        </CardContent>
        </Card>
    );
};

const mapStateToProps = (state) =>{   
  return { 
    clientList: state.clientReducer, 
  };
}

export default connect(mapStateToProps, {
  //actions
  addClient,  
})(ClientForm); 