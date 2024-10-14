public without sharing class fetchAllAccounts {
     @AuraEnabled(cacheable=true)
    public static list<account> getAccounts()
    {
        list<account> acc = [select id,name,type from account];
        return acc;
    }
    @AuraEnabled
    public static Contact createContact(String lastName, String title, String email, String phone, Id accountId) {
     //system.debug('con:',lastName,title,email,accountId);
   
        Contact newContact = new Contact(
            LastName = lastName,
            Title = title,
            Email = email,
            Phone = phone,
            AccountId = accountId
        );
        insert newContact;
        return newContact;
    }

}