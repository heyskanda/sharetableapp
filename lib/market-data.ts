import axios from "./axios";

export async function fetchMarketIndices() {
    console.log('fetchMarketIndices');

    return await axios.get(
        '/shares/market-indicators',
    )
    .then(res => res.data)
}