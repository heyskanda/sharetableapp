import axios from "./axios";

export async function fetchAllIdeas(callType: string, skip: number, limit: number) {
    console.log('fetchAllIdeas');
    
    return await axios.get(
        `/recommendations/customer`,
        {
            params: {
                callType: callType,
                skip: skip,
                limit: limit,
            }
        }
    )
    .then(res => res.data)
}

export async function fetchLatestIdeas() {
    console.log('fetchLatestIdeas');

    return await axios.get(
        `/recommendations/customer/latest`
    )
    .then(res => res.data)
}

export async function fetchIdeaById(id: string | string[]) {
    console.log(id, 'fetchIdeaById');
    
    return await axios.get(
        `/recommendations/customer/${id}`
    )
    .then(res => res.data)
}

export async function fetchLatestPriceOfIdea(ideaData: any) {
    console.log(ideaData, 'fetchLatestPriceOfIdea');
    
    return await axios.get(
        `/shares/ltp/${ideaData?.instrument_key}`,
        {
            params: {
                recommendation: {
                    _id: ideaData?._id,
                    segment: ideaData?.segment,
                    instrument_key: ideaData?.instrument_key,
                    trading_symbol: ideaData?.trading_symbol,
                    last_price: ideaData?.last_price,
                }
            }
        }
    )
    .then(res => res.data)
}