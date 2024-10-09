// Array to simulate contacts database
let contacts = [
    { id: 1, firstName: 'Kefi Seif', lastName: 'Benz', age: 30 },
    { id: 2, firstName: 'John', lastName: 'Doe', age: 25 },
    { id: 3, firstName: 'Ahmad', lastName: 'Ali', age: 20 },
    { id: 4, firstName: 'Sam', lastName: 'Smith', age: 4 }
];

// Function to display all information about one person using his ID
function displayContactById(id) {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
        console.log(`Contact ID: ${contact.id}, Name: ${contact.firstName} ${contact.lastName}, Age: ${contact.age}`);
    } else {
        console.log(`Contact with ID ${id} not found`);
    }
}

// Function to display all contacts with age > 18
function displayContactsAgeAbove18() {
    const filteredContacts = contacts.filter(contact => contact.age > 18);
    console.log('Contacts with age > 18:', filteredContacts);
}

// Function to display all contacts with age > 18 and name containing "ah"
function displayContactsWithAgeAbove18AndNameContainingAh() {
    const filteredContacts = contacts.filter(contact => contact.age > 18 && 
        (contact.firstName.includes('ah') || contact.lastName.includes('ah')));
    console.log('Contacts with age > 18 and name containing "ah":', filteredContacts);
}

// Function to change contact's first name from "Kefi Seif" to "Kefi Anis"
function updateContactName(oldName, newName) {
    const contact = contacts.find(c => c.firstName === oldName);
    if (contact) {
        contact.firstName = newName;
        console.log(`Updated contact's name from "${oldName}" to "${newName}"`);
    } else {
        console.log(`Contact with first name "${oldName}" not found`);
    }
}

// Function to delete contacts that are aged under 5
function deleteContactsUnderAge5() {
    contacts = contacts.filter(contact => contact.age >= 5);
    console.log('Deleted contacts aged under 5');
}

// Function to display all contacts
function displayAllContacts() {
    console.log('All Contacts:', contacts);
}

// Example of using the functions:

// Display contact by ID
displayContactById(1);

// Display contacts with age > 18
displayContactsAgeAbove18();

// Display contacts with age > 18 and name containing "ah"
displayContactsWithAgeAbove18AndNameContainingAh();

// Update contact name from "Kefi Seif" to "Kefi Anis"
updateContactName('Kefi Seif', 'Kefi Anis');

// Delete contacts aged under 5
deleteContactsUnderAge5();

// Display all contacts
displayAllContacts();
