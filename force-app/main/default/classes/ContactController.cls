public with sharing class ContactController {
     @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [SELECT Id, Name, Title, Phone, Email, OwnerId 
                FROM Contact 
                WHERE AccountId = :accountId];
    }
}