import http from "../core/httpClient";

class QuoteService {

    static instance;

    constructor() {
        if (!QuoteService.instance)
            QuoteService.instance = this;

        return QuoteService.instance;
    }

    getQuotes = async () => {
        try {
            const response = await http.get(`${process.env.REACT_APP_BASE_URL}/`);
            return response.data?.quote;
        } catch (error) {
            throw (error.response || error.message);
        }
    }
}

const instance = new QuoteService();
Object.freeze(instance);

export default instance;
