import { LightningElement, wire, api, track } from 'lwc';
import getRelatedContacts from '@salesforce/apex/ContactController.getRelatedContacts';

export default class ContactTable extends LightningElement {
    @api recordId; // Account Id
    @track contacts;
    @track error;

    columns = [
        { label: 'Contact Name', fieldName: 'Name' },
        { label: 'Title', fieldName: 'Title' },
        { label: 'Phone', fieldName: 'Phone' },
        { label: 'Email', fieldName: 'Email' },
        { label: 'Contact Owner', fieldName: 'OwnerId', type: 'text' } // Assuming OwnerId is displayed as text
    ];

    @wire(getRelatedContacts, { accountId: '$recordId' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error.body.message;
            this.contacts = undefined;
        }
    }
}
