/** @odoo-module **/

import { registerPatch } from '@mail/model/model_core';
import { clear } from '@mail/model/model_field_command';
import { attr, many, one } from '@mail/model/model_field';

registerPatch({
	name: 'Thread',
	recordMethods: {
	},
	fields: {
		suggestions: many('Suggestion', {
			inverse:'thread',
		})
	}

})