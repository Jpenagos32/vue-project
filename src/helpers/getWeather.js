import axios from "axios";

export const getTemperatura = async () => {
    const response = await axios.get()
    return response.data.current.temperature_2m
}
