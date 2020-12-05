import { QUOTE_PENDING, QUOTE_FULFILLED, QUOTE_REJECTED, DELTE_QUOTE, DELTE_ALL_QUOTE } from "../../constants/actionTypes";

const initialQuoteState = {
    quotes: [],
    error: {},
    loading: false
};

export const quoteReducer = (state = initialQuoteState, action) => {
    switch (action.type) {
        case QUOTE_PENDING:
            return { ...state, loading: true };
        case QUOTE_FULFILLED:
            return { ...state, quotes: [...state.quotes, action.payload], loading: false };
        case QUOTE_REJECTED:
            return { ...state, error: action.payload, loading: false };
        case DELTE_QUOTE:
            state.quotes.splice(action.payload, 1);
            return { ...state, quotes: [...state.quotes], loading: false };
        case DELTE_ALL_QUOTE:
            return { ...state, quotes: action.payload, loading: false };
        default:
            return state;
    }
};
