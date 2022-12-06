export * from './scrum'

export async function api<T>(url = '', data = {}, method ='POST'): Promise<T> {
    // Default options are marked with *
    const response = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: method != 'POST' ? undefined : JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.status.toString()[0] === '4') {
        throw new Error('Что-то пошло не так')
    }
    if (response.status.toString()[0] === '5') {
        throw new Error('Что-то пошло не так')
    }
    return await response.json() as T; // parses JSON response into native JavaScript objects
}
