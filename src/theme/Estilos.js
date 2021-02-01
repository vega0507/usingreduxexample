import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles( theme => ({    
    cardHeaderColor: {      
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,     
        fontSize: 15, 
      },
  }));

  export default useStyles;