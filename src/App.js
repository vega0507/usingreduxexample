import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClientForm from  './components/ClientForm';
import ClientList from  './components/ClientList';


function App() {
  return (
    <Grid container spacing={1}>
    <Grid item xs={12}>
        <center>
        <Typography variant="h4" color="primary">
            React - Redux Example
        </Typography>
        </center>
        <br/>
    </Grid>
    <Grid item xs={1}/>
    <Grid item xs={10}>                
        <Grid container spacing={1}>
            <Grid item  xs={12}>
                <ClientForm/>
            </Grid>
            <Grid item  xs={12}>
                <ClientList/>
            </Grid>
        </Grid>
    </Grid>
    <Grid item xs={1}/>
    </Grid>
  );
}

export default App;
