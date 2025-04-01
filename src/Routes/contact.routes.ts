import express from 'express'
import { ContactController } from '../Controllers/contact.controller'

export const router = express.Router();

router.post('/',ContactController.createContact)

router.get('/', ContactController.getAllContacts)

router.get('/:id', ContactController.getContact)

router.put('/:id', ContactController.updateContact)

router.delete('/:id', ContactController.deleteContact)