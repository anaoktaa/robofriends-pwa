import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'


const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedActions = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedActions);
});

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedActions = {
        type: REQUEST_ROBOTS_PENDING,
    }
    expect(action[0]).toEqual(expectedActions);
})

