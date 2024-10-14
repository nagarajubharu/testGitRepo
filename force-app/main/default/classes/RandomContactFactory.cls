public class RandomContactFactory {
    // Method to generate random contacts
    public static List<Contact> generateRandomContacts(Integer numberOfContacts, String commonLastName) {
        List<Contact> contacts = new List<Contact>();

        // Generate contacts with unique first names
        for (Integer i = 0; i < numberOfContacts; i++) {
            Contact newContact = new Contact();
            newContact.FirstName = 'Test ' + i; // Unique first names: Test 0, Test 1, etc.
            newContact.LastName = commonLastName; // Common last name
            contacts.add(newContact); // Add contact to the list
        }

        return contacts; // Return the list of generated contacts
    }
}