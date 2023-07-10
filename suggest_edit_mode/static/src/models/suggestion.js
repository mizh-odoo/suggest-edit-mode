/** @odoo-module **/

import { registerModel } from '@mail/model/model_core';
import { attr, many, one } from '@mail/model/model_field';
import { clear, insert } from '@mail/model/model_field_command';

registerModel({
	name: 'Suggestion',
	fields: {
		suggestionViews: many('SuggestionView', {
			inverse: 'suggestion',
		}),
		thread: one('Thread', {
			inverse: 'suggestions',
		}),
		creator: one('User'),
	}	
})