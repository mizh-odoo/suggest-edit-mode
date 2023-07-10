/** @odoo-module **/

import { registerPatch } from '@mail/model/model_core';
import { clear } from '@mail/model/model_field_command';
import { attr, many, one } from '@mail/model/model_field';

registerPatch({
	name: 'Chatter',
	recordMethods: {

		async showSuggestionPage() {
			console.log(this)
			if (this.suggestionBoxView) {
				this.suggestionBoxView.update({ isSuggestionViewActive: !this.isSuggestionViewActive });
				console.log(this.suggestionBoxView.isSuggestionViewActive)
			}
		}
	},
	fields: {
		suggestionBoxView: one('SuggestionBoxView', {
			compute() {
				return {};
			},
			inverse: 'chatter',
		}),
		hasSuggestions: attr({
			default: true,
		})
	}

})