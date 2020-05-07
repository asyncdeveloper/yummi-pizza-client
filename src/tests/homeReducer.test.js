import React from 'react';
import homeReducer from "../redux/home/home.reducer";
import {FETCH_MENU_FAILURE, FETCH_MENU_SUCCESS} from "../redux/home/home.types";

describe('<HomeReducer>', () => {

    it('should return default the initial state if no action type is recognized', () => {
        expect(homeReducer({}, { type: null })).toEqual({});
    });

    it('should handle FETCH_MENU_SUCCESS', () => {
        const fetchMenuActions = { type: FETCH_MENU_SUCCESS, data: [ {'name' : 'Name' } ] };

        expect(homeReducer({}, fetchMenuActions)).toEqual({
            isLoading: false,
            menu: fetchMenuActions.data,
            errorMessage: null
        });
    });

    it('should handle FETCH_MENU_FAILURE', () => {
        const errorMockData = {
            message: "Unable to fetch menu"
        };

        const fetchMenuActions = { type: FETCH_MENU_FAILURE,  message: errorMockData.message };

        expect(homeReducer({}, fetchMenuActions)).toEqual({
            errorMessage : errorMockData.message,
            isLoading: false
        });
    });
});
