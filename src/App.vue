<template>
    <div id="app">
        <CurrencySelector />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CurrencySelector from './components/CurrencySelector.vue'

@Component({
    components: {
        CurrencySelector,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
    height: 100%;
}
</style>
