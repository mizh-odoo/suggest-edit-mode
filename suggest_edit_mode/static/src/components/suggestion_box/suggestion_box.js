/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

const { Component } = owl;

export class SuggestionBox extends Component {

    /**
     * @returns {SuggestionBoxView}
     */
    get suggestionBoxView() {
        return this.props.record;
    }

}

Object.assign(SuggestionBox, {
    props: { record: Object },
	//TODO: need to change template later
    template: 'suggest.SuggestionBox',
});

registerMessagingComponent(SuggestionBox);
