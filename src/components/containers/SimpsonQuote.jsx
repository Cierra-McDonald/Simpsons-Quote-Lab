import React, { useState } from 'react'
import Fetch from '../presentations/quotes/Fetch'
import OneQuote from '../presentations/quotes/OneQuote'
import { getSimpsonQuotes } from '../services/simpsonsApi'

const SimpsonQuote = () => {

    const [quote, setQuote] = useState({})

    const handleClick = async () => { 
        const quote = await getSimpsonQuotes();
        
        setQuote(quote);
    }
    return (
        <div>
            <Fetch onClick={handleClick}/>
            <OneQuote 
                character={quote.character}
                quote={quote.quote}
                image={quote.image}
            />
        </div>
        )
};

export default SimpsonQuote