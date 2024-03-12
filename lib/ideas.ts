import axios from "./axios";

export async function fetchAllIdeas(callType: string) {
    return await axios.get(
        '/recommendations/customer',
        {
            params: {
                callType: callType
            }
        }
    )
    .then(res => res.data)
}

export async function fetchLatestIdeas(category: string) {
    return await axios.get(
        '/recommendations/customer/latest'
    )
    .then(res => res.data)
}