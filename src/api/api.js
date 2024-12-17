export const request = async (url, option = {}) => {
    try {
        const response = await fetch(`https://kdt-api.fe.dev-cos.com/documents${url}`, {
            ...option,
            headers:{
                "x-username": `codingiscold`,
                'Content-Type': 'application/json',
            }
        });
        if(response.ok) {
            const json = await response.json();
            return json;
        }
        throw new Error(`Api Error, ${response}`)
    } catch (e) {
        console.log("통신 문제", e)
    }
}

// https://kdt-api.fe.dev-cos.com/documents/ get -> documents
// https://kdt-api.fe.dev-cos.com/documents/ post -> documents
// https://kdt-api.fe.dev-cos.com/documents/10412 put

request('/')
request('/', {method: 'POST'})

// 성우
request('/12371', {method: 'put'})