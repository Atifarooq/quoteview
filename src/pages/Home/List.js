import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Spinner } from '../../components';
import { deleteAllQuotes, deleteQuote } from '../../state/actions';
import Quote from './Quote';

const QuoteList = () => {

    const quotes = useSelector(state => state.quoteReducer.quotes);
    const loading = useSelector(state => state.quoteReducer.loading);
    const dispatch = useDispatch();

    const deletOne = (idx) => () => {
        debugger;
         dispatch(deleteQuote(idx));
    }
    const deleteAll = () => dispatch(deleteAllQuotes())

    if (loading)
        return (<Spinner />);

    return (
        <>
            {quotes?.length > 0 && <button type="button" onClick={deleteAll}>Delete All</button>}
            <Flex className="flex--col">
                {
                    quotes.map((item, idx) => {
                        return <Quote key={idx} data={item}>
                            <button type="button" onClick={deletOne(idx)}>Delete Quote</button>
                        </Quote>
                    })
                }
            </Flex>
        </>
    );
}

export default QuoteList;