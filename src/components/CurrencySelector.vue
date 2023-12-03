<template>
	<div class="currency-selector">
		<div class="content">
			<!-- Selected currencies list -->
			<div class="selected-currencies">
				<div
					v-for="(currency, index) in selectedCurrencies"
					:key="currency"
					class="selected-currency"
				>
					<div>{{ currency }}</div>
					<button class="close-button" @click="removeCurrency(index)">
						<div>x</div>
					</button>
				</div>
			</div>

			<!-- List of currency options -->
			<div class="currency-options">
				<div
					v-for="currency in currencyOptions"
					:key="currency"
					class="currency-option"
					:class="{ selected: isSelected(currency) }"
					@click="toggleCurrency(currency)"
				>
					<div class="checkmark">
						<div class="filler" v-if="isSelected(currency)">x</div>
					</div>
					<div>{{ currency }}</div>
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
		"GEL",
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
.currency-selector {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 24px 24px;

	.content {
		border: 1px solid grey;
		padding: 20px 12px 12px 12px;
		border-radius: 4px;
		width: 100%;
		max-width: 470px;
		margin: 0 auto;
	}
}

.selected-currencies,
.currency-options {
	display: flex;
	flex-wrap: wrap;
}

.selected-currencies {
	margin-bottom: 12px;
}

.currency-option {
	display: flex;
	align-items: center;
	color: #305982;
	font-weight: bold;
	margin: 6px 4px;
	border: 1px solid grey;
	background-color: #ececec;
	padding: 4px 4px;
	margin-top: 12px;
	width: 100%;
	max-width: calc(33.3% - 8px);
	cursor: pointer;
	user-select: none;

	&.selected {
		background-color: white;
	}

	&.selected:hover {
		background-color: white;
	}

	&:hover {
		background-color: #dcdcdc;
	}

	&:focus {
		background-color: white;
	}

	.checkmark {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		border: 1px solid black;
		width: 14px;
		height: 14px;
		margin-right: 4px;

		.filler {
			color: red;
			font-size: 16px;
			line-height: 1;
			padding-bottom: 2px;
		}
	}
}

.selected-currency {
	position: relative;
	text-align: center;
	margin: 6px 4px;
	background-color: #ececec;
	padding: 4px 12px;
	width: 100%;
	max-width: calc(33.3% - 8px);

	.close-button {
		position: absolute;
		top: -6px;
		right: -6px;
		border-radius: 50%;
		border: 2px solid white;
		background-color: black;
		color: white;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		&:hover {
			border: 2px solid black;
			background-color: white;
			color: black;
		}

		div {
			line-height: 1;
			padding-bottom: 2px;
		}
	}
}
</style>
