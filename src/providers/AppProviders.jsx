import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from '../store/StoreProvider';

export const AppProviders = ({ children }) => <Router><StoreProvider>{children}</StoreProvider></Router>;
