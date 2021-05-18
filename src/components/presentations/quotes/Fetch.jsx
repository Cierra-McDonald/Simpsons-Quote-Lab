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
                <h2 className={styles.header}>Random Simpson Quote</h2>
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