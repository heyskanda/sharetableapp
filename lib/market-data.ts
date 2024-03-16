import axios from "axios";

export async function fetchMarketIndices() {
    console.log('fetchMarketIndices');

    return await axios.get(
        'https://share-backend-five.vercel.app/api/shares/market-indicators',
    )
    .then(res => res.data)
}