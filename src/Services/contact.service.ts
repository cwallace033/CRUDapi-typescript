import { Contact } from '../Models/contact'
export class contactService {
    //create a contact
    async createContact(data: any) {
        try {
            const newContact = await Contact.create(data)
            return newContact
        } catch (error) {
            console.log("Error creating contact:", error)
        }
    }

    //get all contacts
    async getAllContacts() {
        try {
            const contacts = await Contact.find({})
            return contacts
        } catch (error) {
            console.log("Error fetching contacts:", error)
        }
    }

    //get a contact by id
    async getContact(id: string) {
        try {
            const contact = await Contact.findById(id);
            if (!contact) {
                throw new Error("Contact not found");
            }
            return contact;
        } catch (error) {
            console.log("Error fetching contact:", error);
        }
    }

    //update a contact
    async updateContact(id: string, data: any) {
        try {
            const contactz = await Contact.findByIdAndUpdate({_id: id}, data, {new: true})
            if (!contactz) {
                return "post not available"
            }
            return contactz;
        } catch (error) {
            console.log("Error updating contact:", error);
        }
    }

    //delete a contact
    async deleteContact(id: string) {
        try {
            const contact = await Contact.findByIdAndDelete(id);
            if (!contact) {
                return "Contact not found";
            }
            return "Contact deleted successfully";
        } catch (error) {
            console.log("Error deleting contact:", error);
        }
    }
}

export const contactServices = new contactService();