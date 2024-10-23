import { LightningElement } from 'lwc';

export default class childComponentMethod extends LightningElement {
    // Method to be called from the parent component
    performAction() {
        alert('Action performed in child component!');
        console.log('Action performed in child component!');
        // Add your processing logic here
    }

    handleAction() {
        this.performAction();
    }
}
