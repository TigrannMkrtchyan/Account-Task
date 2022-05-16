const endpoint = `${process.env.REACT_APP_BACKEND_url}/data`

export const getData = async () => {
    const data = await fetch(endpoint)
    const parsedData = await data.json()
    return parsedData.data;
}

export const createData = async (payload, res) => {
    const data = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    const parsedData = await data.json()
    return parsedData.data;
}

export const deleteData = async () => {
    const data = await fetch(endpoint, {
        method: "DELETE",
    })
    const parsedData = await data.json()
    return parsedData.data;
}
