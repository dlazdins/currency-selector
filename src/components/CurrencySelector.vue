<template>
	<div class="currency-selector-container">
		<div class="currency-selector">
			<!-- Selected currencies list -->
			<div class="selected-currencies">
				<div
					v-for="(currency, index) in selectedCurrencies"
					:key="currency"
					class="selected-currency"
				>
					{{ currency }}
					<button @click="removeCurrency(index)">×</button>
				</div>
			</div>

			<!-- List of currency options -->
			<div class="currency-options">
				<div
					v-for="currency in currencyOptions"
					:key="currency"
					class="currency-option"
				>
					<label :class="{ 'is-selected': isSelected(currency) }">
						<input
							type="checkbox"
							:value="currency"
							@change="toggleCurrency(currency)"
						/>
						{{ currency }}
						<span class="checkmark">x</span>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CurrencySelector extends Vue {
	// The list of currencies available for selection
	currencyOptions: string[] = [
		"EUR",
		"USD",
		"GBP",
		"RUB",
		"CZK",
		"PLN",
		"DKK",
		"SEK",
	];

	// The list of selected currencies
	selectedCurrencies: string[] = [];

	// Method to toggle currencies in the selected list
	toggleCurrency(currency: string): void {
		const index = this.selectedCurrencies.indexOf(currency);
		if (index >= 0) {
			this.selectedCurrencies.splice(index, 1);
		} else {
			this.selectedCurrencies.push(currency);
		}
	}

	// Method to remove a currency from the selected list
	removeCurrency(index: number): void {
		this.selectedCurrencies.splice(index, 1);
	}

	// Helper method to check if currency is selected
	isSelected(currency: string): boolean {
		return this.selectedCurrencies.includes(currency);
	}
}
</script>

<style lang="scss" scoped>
.currency-selector-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 24px 24px;
}

.currency-selector {
	border: 1px solid grey;
	padding: 24px 12px 12px 12px;
	border-radius: 4px;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
}

.selected-currencies,
.currency-options {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.currency-option {
	color: navy;
	margin: 6px 4px;
	border: 1px solid grey;
	background-color: lightgray;
	padding: 4px 12px;
	margin-top: 12px;
}

.selected-currency {
	text-align: center;
	margin: 6px 4px;
	background-color: lightgray;
	padding: 4px 12px;
}

.selected-currency button {
}

.currency-option label {
}

.currency-option input[type="checkbox"] {
	/* Hide the default checkbox */
	opacity: 0;
	position: absolute;
}

.currency-option .checkmark {
}

@media screen and (min-width: 750px) {
	.grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media screen and (max-width: 499px) {
	.grid-container {
		grid-template-columns: 1fr; /* All items in one column on very small screens */
	}
}
</style>
