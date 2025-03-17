let contactsBook = {
    contacts: [],

    addContact: function(contact){
        this.contacts.push(contact);
    },
    getContact: function(contact){
        if(typeof contact === 'string')
        {
            return this.contacts.filter(x => x.name === contact);
        }
        else
            return null;
    }
}

function Contact(cName, cLastName, cPhone, eMail)
{
    this.name = cName;
    this.lastName = cLastName;
    this.phone = cPhone;
    this.email = eMail;
    this.showContact = function() {
        return [this.name, this.lastName, this.phone, this.email];
    } 
}

contactsBook.addContact(new Contact("First","Maxwell", "+380950001122", "someMail@gmail.com"));
contactsBook.addContact(new Contact("Second","Konnor", "+380991112233", "someMail2@gmail.com"));
contactsBook.addContact(new Contact("Dan","Mitchell", "+380937772211", "dMithcMail@mail.com"));
contactsBook.addContact(new Contact("Dan","Grabovsky", "+380937778899", "catGrabovsky.Mail@mail.com"));

let foundContacts = contactsBook.getContact("Dan");

foundContacts.forEach(item => console.log(item.showContact()));

console.log("\nAnother test\n");

foundContacts = contactsBook.getContact("First");

foundContacts.forEach(item => console.log(item.showContact()));