import {createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
      
      type:'light',
      primary: {
        main: grey[900],        
        contrastText: '#fff',
      },
      secondary: {
        main: '#0487BE',
        contrastText: '#fff',
      },
      alternateTextColor: green[500],      
      divider: green[500],      
    },
    
    typography: {
      fontFamily: 'Raleway, Arial',      
      fontSize: 16,
    },
    shape: {
      borderRadius: 10,
    }    
  });

  export default theme;