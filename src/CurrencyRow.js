import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
      breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        up: key => `@media (min-width:${values[key]}px)`,
      },
    },
  }));

export default function CurrencyRow(props) {
    const classes = useStyles();

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props

  
    return (
      
    <div>
       <form className={classes.root} noValidate autoComplete="off">
       <TextField id="standard-basic" label={selectedCurrency} value={amount} onChange={onChangeAmount} /> 

        <TextField
          id="standard-select-currency"
          select = {selectedCurrency}
          value = {selectedCurrency}
          label="Select"
          helperText="Please select your currency"
          onChange={onChangeCurrency}
        >
          {currencyOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        </form>    
     </div>
    
    )
}

