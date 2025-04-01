import {Schema, model} from 'mongoose'
import Joi from 'joi'

//Validation schema
export const ContactSchemaValidate = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    favoriteColor: Joi.string().optional().allow(''),
    birthday: Joi.date().optional().allow(''),
})

//Create an interface
interface IContact {
    firstName: string;
    lastName: string;
    email: string;
    favoriteColor?: string;
    birthday?: Date;
}

//Contact Schema
const contactSchema = new Schema<IContact>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    favoriteColor: {
        type: String,
        default: ''
    },
    birthday: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
})

//Create the model
export const Contact = model<IContact>('Contact', contactSchema);