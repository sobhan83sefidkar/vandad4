const baseURL = "https://vandad-be.vercel.app/api"

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
        return data
    } catch (err) {
        return err
    }
}

export default Request;
