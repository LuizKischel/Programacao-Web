const express = require('express');
const router = express.Router();
const clientsService = require('../service/clientsService');

router.get('/clients', async function(req, res) {
    const client = await clientsService.getClients();
    res.json(client);
});

router.get('/client/:id', async function(req, res) {
    const client = await clientsService.getClient(req.params.id);
    res.json(client);
});

router.delete('/client/:id', async function(req, res){
    const client = await clientsService.deleteClient(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/client', async function(req, res){
    const client = req.body;
    const newClient = await clientsService.saveClient(client);
    res.json(newClient);
});

module.exports = router;