import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import styles from './Presentations.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

const Fetch = ({ onClick }) => {
        return (
            <div>
                <img src={'https://fontmeme.com/permalink/210518/9cd150157065dcd310d88694e5f15698.png'} alt={"simpsons-font"} style={{border: '0', margin: '0 auto', display: "flex"}}/>
                <Button variant="contained" color="secondary" style={{margin: '0 auto', display: "flex"}} onClick={onClick}>
                    Fetch Quote! 
                </Button>
            </div>
        )
}

Fetch.propTypes = { 
    onClick: PropTypes.func.isRequired,
}

export default Fetch;