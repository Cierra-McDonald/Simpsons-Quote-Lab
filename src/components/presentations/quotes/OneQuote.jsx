import React from 'react'
import PropTypes from 'prop-types'
import styles from './Presentations.css'

const OneQuote = ({ character, quote, image }) => {

        return (
            <div>
                <figure className={styles.figure}>
                    <p>{character}</p>
                    <img src={image} alt={character} height='350px'/>
                    <figcaption>{quote}</figcaption>
                </figure>
            </div>
        )
    
}

OneQuote.propTypes = {
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default OneQuote;
