import React, { useState } from 'react'
import Fetch from '../quotes/Fetch'
import OneQuote from '../presentations/OneQuote'
import { getSimpsonQuotes } from '../services/simpsonsApi'

const SimpsonQuote = () => {

    const [quote, setQuote] = useState({})

    const handleClick = async () => { 
        const quote = await getSimpsonQuotes();
        console.log(quote);
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