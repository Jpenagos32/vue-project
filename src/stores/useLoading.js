import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoadingStore = defineStore('loading', () => {
    const loading = ref(true)
    const setLoading = (payload) => {
        loading.value = payload
    }
    return { loading, setLoading }
})
