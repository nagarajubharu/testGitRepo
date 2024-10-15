import { LightningElement, track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @track inputValue = '';

    handleInputChange(event) {
        this.inputValue = event.target.value;
    }

    sendValueToParent() {
        const valueEvent = new CustomEvent('valuechange', {
            detail: { value: this.inputValue }
        });
        this.dispatchEvent(valueEvent);
    }
}
