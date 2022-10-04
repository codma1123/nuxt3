<template>
    <div>
        <v-btn            
            @click="store.increment()"
        >
            {{ store.count }}
            {{ store.doubleCount }}
        </v-btn>
    </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { useStore } from '~~/store';

const mobile = useDisplay()
const store = useStore()

onMounted(() => {
    
})

</script>

<style lang="scss" scoped>

</style>