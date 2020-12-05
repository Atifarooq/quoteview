import React from 'react';
import { useDispatch } from 'react-redux';
import { getQuotes } from "../../state/actions";
import QuoteList from './List';

const Home = () => {

    const dispatch = useDispatch();
    const getQuote = () => dispatch(getQuotes());

    return (
        <div className="home-wrapper">
            <button type="button" onClick={getQuote}>Add Quote</button>
            <QuoteList />
        </div>
    );
}

export default Home;