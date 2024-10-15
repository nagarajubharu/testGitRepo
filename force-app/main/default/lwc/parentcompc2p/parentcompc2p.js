import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track receivedValue = '';

    handleValueChange(event) {
        this.receivedValue = event.detail.value;
    }
}
