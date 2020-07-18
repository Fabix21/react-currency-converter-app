import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
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

