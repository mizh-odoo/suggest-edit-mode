/** @odoo-module **/

import { registerModel } from '@mail/model/model_core';
import { attr, many, one } from '@mail/model/model_field';
import { clear, insert } from '@mail/model/model_field_command';

registerModel({
	name: 'SuggestionView',
	fields: {
		suggestion: one('Suggestion', {
			inverse: 'suggestionViews',
		}),
		suggestionBoxView: one('SuggestionBoxView', {
			inverse: 'suggestionViews',
		})
	}
})