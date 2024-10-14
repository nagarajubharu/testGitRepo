import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/fetchAllAccounts.getAccounts';
import createContact from '@salesforce/apex/fetchAllAccounts.createContact';
export default class ContactCreationForAccount extends LightningElement {
    @track accountOptions = [];
    @track selectedAccountId;
    selectedOption;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accountOptions = data.map(account => ({
                label: account.Name,
                value: account.Id
            }));
        } else if (error) {
            console.error('Error fetching accounts', error);
        }
    }

    handleChange(event) {
        this.selectedAccountId = event.target.value;
        const selectedAccount = this.accountOptions.find(option => option.value === this.selectedAccountId);
        this.selectedOption = selectedAccount ? selectedAccount.label : 'None';
       console.log('Selected Account:', this.selectedOption);
    }
    handleInputChange(event) {
        const field = event.target.name;
        if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'title') {
            this.title = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        } else if (field === 'phone') {
            this.phone = event.target.value;
        }
    }

    async handleSave() {
    console.log('contact data: '+this.lastName+', '+this.title+', '+this.email+', '+this.phone+', '+this.selectedAccountId);
            await createContact({ 
                lastName: this.lastName, 
                title: this.title, 
                email: this.email, 
                phone: this.phone, 
                accountId: this.selectedAccountId 
            });
            // Reset fields after saving
            this.resetFields();
            alert('Contact created successfully!');

    }

    resetFields() {
        this.selectedAccountId = '';
        this.lastName = '';
        this.title = '';
        this.email = '';
        this.phone = '';
    }
}
