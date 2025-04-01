import { contactServices } from '../Services/contact.service'
import { Request, Response } from 'express'
import { ContactSchemaValidate } from '../Models/contact'

class contactController {
    //create contact controller
    createContact = async (req: Request, res: Response) => {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        }
        //Validate the data
        const {error, value} = ContactSchemaValidate.validate(data)

        if (error) {
            res.send(error.message)
        }else {
            const contact = await contactServices.createContact(value)
            res.status(201).send(contact)
        }
    }

    //get all contacts controller
    getAllContacts = async (req: Request, res: Response) => {
        const contacts = await contactServices.getAllContacts();
        res.send(contacts)
    }

    //get a contact by id controller
    getContact = async (req: Request, res: Response) => {
        const id = req.params.id
        const contact = await contactServices.getContact(id);
        res.send(contact)
    }

    //update a contact controller
    updateContact = async (req: Request, res: Response) => {
        const id = req.params.id
        const contact = await contactServices.updateContact(id, req.body);
        res.send(contact)
    }

    //delete a contact controller
    deleteContact = async (req: Request, res: Response) => {
        const id = req.params.id
        await contactServices.deleteContact(id)
        res.send('contact deleted successfully')
    }
}

export const ContactController = new contactController()