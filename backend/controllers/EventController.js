const {Event: EventModel} = require("../models/Event");

const eventController = {
    create: async (req, res) => {
        try {
            const event = {
                name: req.body.name,
                description: req.body.description,
                imgEvent: req.file ? `/uploads/${req.file.filename}` : "",
                category: req.body.category,
                cep: req.body.cep,
                street: req.body.street,
                neighborhood: req.body.neighborhood,
                city: req.body.city,
                state: req.body.state,
                number: req.body.number,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                startDate: req.body.startDate,
                organizerName: req.body.organizerName,
                contactEmail: req.body.contactEmail,
                telephone: req.body.telephone,
            };

            const response = await EventModel.create(event);

            res.status(201).json({ response, msg: "Evento criado com sucesso!"});
        }catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const events = await EventModel.find();
            res.json(events);
        }catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const event = await EventModel.findById(id);

            if (!event){
                res.status(404).json({msg: "Evento não encontrado!"});
                return;
            }
            res.json(event);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const event = await EventModel.findById(id);

            if (!event){
                res.status(404).json({msg: "Evento não encontrado!"})
            }
            const deletedEvent = await EventModel.findByIdAndDelete(id);

            res. status(200).json({msg: "Evento deletado com sucesso!"})
        }catch (error){
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const event = {
                name: req.body.name,
                description: req.body.description,
                imgEvent: req.file ? `/uploads/${req.file.filename}` : "",
                category: req.body.category,
                cep: req.body.cep,
                street: req.body.street,
                neighborhood: req.body.neighborhood,
                city: req.body.city,
                state: req.body.state,
                number: req.body.number,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                startDate: req.body.startDate,
                organizerName: req.body.organizerName,
                contactEmail: req.body.contactEmail,
                telephone: req.body.telephone,
            };

            const updatedEvent = await EventModel.findByIdAndUpdate(id, event);

            if (!updatedEvent) {
                res.status(404).json({msg: "Evento não encontrado!"})
                return;
            }
            res.status(200).json({event, msg: "Evento atualizado com sucesso!"})
        } catch (error){
            console.log(error)
        }
    }
};

module.exports = eventController;

