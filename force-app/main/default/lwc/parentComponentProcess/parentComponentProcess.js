import { LightningElement } from 'lwc';

export default class ParentComponentProcess extends LightningElement {
    // Method to call the child component's method
    callChildMethod() {
        alert('Calling Child Method!');
        const child = this.template.querySelector('c-child-component-method');
        if (child) {
            child.performAction(); // Call the method in the child component
        }
    }
}
