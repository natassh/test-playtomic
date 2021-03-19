import { render, screen,  waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {Courts } from '../Courts';
import  * as getCourts from '../../../../core/courts/services/getCourts';
import  * as useSelector from 'react-redux';


describe('courts', () => {
    // prepare
    let mockUseSelector = jest.spyOn(useSelector, 'useSelector');
    let getCourtsMock = jest.spyOn(getCourts, 'getCourts');
    
    const court_1 = {
        id: '1',
        name : "Tenis",
        street: "Avenida del Deporte",
        city: "Santander",
    };
    const court_2 = {
        id: '2',
        name : "Tenis",
        street: "Calle Alameda",
        city: "Valencia",
    };
    const court_3 = {
        id: '3',
        name : "Padel",
        street: "Calle Impresores",
        city: "Madrid",
    };
    const courts = [court_1, court_2, court_3];

    beforeEach(() => {
        getCourtsMock.mockReturnValue(courts);
        mockUseSelector.mockReturnValue({
            isLogged: false,
            user: null
        })
    })

    it('should return a new array of courts', async () => {
        // Arrange
        const history = createMemoryHistory();
        
        // Act
        render(<Router history={history}><Courts/></Router>)

        // Assert
        await waitFor(() => expect(screen.getAllByText("Tenis").length).toBe(2) )
        
     
    })
})