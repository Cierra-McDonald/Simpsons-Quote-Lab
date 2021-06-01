import React, { useState, useEffect } from 'react'
import Fetch from '../presentations/quotes/Fetch'
import OneQuote from '../presentations/quotes/OneQuote'
import { getSimpsonQuotes } from '../services/simpsonsApi'

const SimpsonQuote = () => {

    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false)


    const handleClick = async () => { 
        setLoading(true)
        const quote = await getSimpsonQuotes()  
        setQuote(quote)
        setLoading(false)
    }
    return (
        <div>
            <Fetch onClick={handleClick}/>
            <OneQuote 
                character={quote.character}
                quote={quote.quote}
                image={quote.image}
                loading={loading}
            />
        </div>
        )
};

export default SimpsonQuote