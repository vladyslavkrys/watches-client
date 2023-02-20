import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // add reducers
});

export const store = configureStore({
  reducer: rootReducer
});
