import { DELTE_ALL_QUOTE, DELTE_QUOTE, QUOTE } from "../../constants/actionTypes";
import quoteService from "../../services/quote.service";

export const getQuotes = () => async dispatch => {
    dispatch({
        type: QUOTE,
        payload: quoteService.getQuotes()
    });
}

export const deleteQuote = idx => {
    return {
        type: DELTE_QUOTE,
        payload: idx
    };
}

export const deleteAllQuotes = () => {
    return {
        type: DELTE_ALL_QUOTE,
        payload: []
    };
}

