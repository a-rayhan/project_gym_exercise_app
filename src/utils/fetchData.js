export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '796f448a32msh83c7c289106e97fp116a9bjsn0f7439ffac70',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}