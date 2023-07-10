/** @odoo-module **/

import { useComponentToModel } from '@mail/component_hooks/use_component_to_model';
import { registerMessagingComponent } from '@mail/utils/messaging_component';

const { Component } = owl;

export class SuggestionMenuView extends Component {
    /**
     * @override
     */
     setup() {
        super.setup();
        useComponentToModel({ fieldName: 'component' });
    }
    /**
     * @returns {SuggestionMenuView}
     */
    get suggestionMenuView() {
        return this.props.record;
    }
}

Object.assign(SuggestionMenuView, {
    props: { record: Object },
    template: 'suggest.SuggestionMenuView',
});

registerMessagingComponent(SuggestionMenuView);
