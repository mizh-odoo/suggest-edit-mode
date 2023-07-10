/** @odoo-module **/

import { useComponentToModel } from '@mail/component_hooks/use_component_to_model';
import { useRefToModel } from '@mail/component_hooks/use_ref_to_model';
import { registerMessagingComponent } from '@mail/utils/messaging_component';

import Popover from "web.Popover";
import { LegacyComponent } from "@web/legacy/legacy_component";

export class Suggestion extends LegacyComponent {

	/**
	 * @override
	 */
	setup() {
		super.setup();
		useComponentToModel({ fieldName: 'component' });
		useRefToModel({ fieldName: 'markDoneButtonRef', refName: 'markDoneButton', });
	}

	/**
	 * @returns {SuggestionView}
	 */
	get suggestionView() {
		return this.props.record;
	}

}

Object.assign(Suggestion, {
	props: { record: Object },
	template: 'suggest.Suggestion',
});

registerMessagingComponent(Suggestion);
