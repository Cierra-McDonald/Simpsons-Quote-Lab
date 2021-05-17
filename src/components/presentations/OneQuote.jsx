import React from 'react'
import PropTypes from 'prop-types'

const OneQuote = ({ character, quote, image }) => {

        return (
            <div>
                <figure>
                    <p>{character}</p>
                    <figcaption>{quote}</figcaption>
                    <img src={image} alt={character}/>
                </figure>
            </div>
        )
    
}

// OneQuote.propTypes = {
//     character: PropTypes.string.isRequired,
//     quote: PropTypes.string.isRequired,
//     image: PropTypes.image.isRequired
// };

export default OneQuote;
