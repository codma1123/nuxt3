import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    const count = ref(0)
    function increment() {
        count++
    }

    const doubleCount = computed(() => count.value*2)

    return {
        count, increment, doubleCount
    }
})