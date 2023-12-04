import Vue from 'vue'
import { shallowMount, Wrapper } from '@vue/test-utils'
import CurrencySelector from '@/components/CurrencySelector.vue'

// Define an extended type for the CurrencySelector component instance
type CurrencySelectorInstance = Vue & {
    currencyOptions: string[]
    selectedCurrencies: string[]
    toggleCurrency(currency: string): void
    removeCurrency(index: number): void
}

describe('CurrencySelector', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
        wrapper = shallowMount(CurrencySelector)
    })

    // Test for initial rendering
    it('renders currency options', () => {
        const vm = wrapper.vm as CurrencySelectorInstance
        expect(wrapper.findAll('.currency-option').length).toBe(
            vm.currencyOptions.length
        )
    })

    // Test selecting multiple currencies
    it('can toggle multiple currencies', async () => {
        const vm = wrapper.vm as CurrencySelectorInstance
        const currencyOptions = wrapper.findAll('.currency-option')

        // Assume the component has at least two currency options
        const firstCurrency = vm.currencyOptions[0]
        const secondCurrency = vm.currencyOptions[1]

        // Toggle the first currency
        await currencyOptions.at(0).trigger('click')
        expect(vm.selectedCurrencies.includes(firstCurrency)).toBe(true)

        // Toggle the second currency
        await currencyOptions.at(1).trigger('click')
        expect(vm.selectedCurrencies.includes(secondCurrency)).toBe(true)

        // Untoggle the first currency
        await currencyOptions.at(0).trigger('click')
        expect(vm.selectedCurrencies.includes(firstCurrency)).toBe(false)

        // Check if the second currency is still selected
        expect(vm.selectedCurrencies.includes(secondCurrency)).toBe(true)
    })

    // Test removing a Currency
    it('can remove a selected currency', async () => {
        const vm = wrapper.vm as CurrencySelectorInstance
        const firstCurrency = vm.currencyOptions[0]

        // Simulate selecting a currency
        vm.selectedCurrencies.push(firstCurrency)
        await vm.$nextTick()

        // Find the remove button and click it
        const closeButton = wrapper.find('.close-button')
        await closeButton.trigger('click')

        expect(vm.selectedCurrencies.includes(firstCurrency)).toBe(false)
    })
})
