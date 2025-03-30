const baseURL = "http://localhost:3000/api"

const Request = async (endPoint, method, body) => {
    try {
        const response = await fetch(`${baseURL}/${endPoint}`, {
            method: method,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        return err
    }
}

export default Request;