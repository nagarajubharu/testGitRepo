import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api value; // This will receive the value from the Parent Component
}
