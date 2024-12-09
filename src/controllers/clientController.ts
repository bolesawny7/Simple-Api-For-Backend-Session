import { Request, Response } from 'express';
import { mockDatabase } from '../data/mockDatabase';

//CRUD 
//Create Post, Read GET, Update (PUT, Patch), Delete (DELETE)


//GET
export const getClients = (req: Request,res: Response) => {
    res.status(200).json({data: mockDatabase.clients})
}
export const getClientByID = (req: Request,res: Response) => {
    const id = +req.params.id;
    const client = mockDatabase.clients.find((client) => client.id === id);
    if(client){
        res.status(200).json({data: client})
    }else{
        res.status(404).json({message: 'Client not found'})
    }
}

//POST
export const createClient = (req: Request,res: Response) => {
    const {name, email} = req.body;
    // const name = req.body.name;
    // const email = req.body.email;
    const newClient = {id: mockDatabase.clients.length + 1, name, email}

    mockDatabase.clients.push(newClient);
    res.status(201).json({data: newClient})
}

//patch
export const updateClient = (req: Request,res: Response) => {
    const id = +req.params.id;
    const {name, email} = req.body;
    const client = mockDatabase.clients.find((client) => client.id === id);
    if(client){
        name ? client.name = name : client.name = client.name;
        email ? client.email = email: client.email = client.email;
        res.status(200).json({data: client})
    }else{
        res.status(404).json({message: 'Client not found'})
    }
}


//delete Client
export const deleteClient = (req: Request,res: Response) => {
    const id = +req.params.id;
    const index = mockDatabase.clients.findIndex((client) => client.id === id);
    if(index !== -1){
        mockDatabase.clients.splice(index, 1);
        res.status(200).json({message: 'Client deleted'})
    }else{
        res.status(404).json({message: 'Client not found'})
    }
}
