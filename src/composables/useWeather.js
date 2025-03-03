import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";
import { useLoadingStore } from "@/stores/useLoading";

export const useWeather = async () => {
    const temperatura = await getTemperatura()
    const weatherStore = useWeatherStore()
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)


    weatherStore.temperatura = temperatura
}
