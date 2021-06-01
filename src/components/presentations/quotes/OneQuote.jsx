import React from 'react'
import PropTypes from 'prop-types'
import styles from './Presentations.css'

const OneQuote = ({ character, quote, image, loading }) => {

        return (
            <div>
                {
                    loading
                    ?
                    <h2 style={{textAlign: 'center'}}>Loading...</h2>
                    :
                    <div>
                    <figure className={styles.figure}>
                    <p>{character}</p>
                    <img src={image} alt={character} height='350px'/>
                    <figcaption>{quote}</figcaption>
                    </figure>
                    </div>
                }
            </div>
        )
    
}

OneQuote.propTypes = {
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
};

export default OneQuote;
