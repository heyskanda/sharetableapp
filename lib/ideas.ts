import axios from "./axios";

export async function fetchAllIdeas(callType: string) {
    console.log('fetchAllIdeas');
    
    return await axios.get(
        `/recommendations/customer`,
        {
            params: {
                callType: callType
            }
        }
    )
    .then(res => res.data)
}

export async function fetchLatestIdeas(category: string) {
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