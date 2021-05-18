import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import SimpsonQuote from './SimpsonQuote'

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => { 
        return res(ctx.json([
            {
                quote: "Shut up, brain. I got friends now. I don't need you anymore.",
                character: "Lisa Simpson",
                image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
                characterDirection: "Right"
            },
        ]))
    })
);

describe('Simpson Quote Container Testing', () => { 
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('fetches a quote and displays it', async () => { 
        render(<SimpsonQuote />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        return waitFor(() => { 
            screen.getByAltText('Lisa Simpson');
            screen.getByText("Shut up, brain. I got friends now. I don't need you anymore.")
        })

        
    })
})
