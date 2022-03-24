const router = require('express').Router();

const Healthz = require('./healthz');

const CreateCnabs = require('./create-cnabs');
const ListCnabs = require('./list-cnabs');
const ListCnabsByCpf = require('./list-cnabs-by-cpf');
const ListCnabsByCompany = require('./list-cnabs-by-company');
const ReadCnab = require('./read-cnab');
const UpdateCnab = require('./update-cnab');
const DeleteCnab = require("./delete-cnab");

const BalanceCPF = require('./balance-cpf');

// health check
router.get("/healthz", Healthz);

// create cnabs
router.post('/cnabs', CreateCnabs);	

// list all cnabs
router.get('/cnabs', ListCnabs);	

// list cnabs by cpf
router.get('/cnabs/:cpf', ListCnabsByCpf);	

// list cnabs by company
router.get('/cnabs/company/:company', ListCnabsByCompany);	

// read cnab by id
router.get('/cnab/:id', ReadCnab);	

// update cnabs by id
router.put('/cnab/:id', UpdateCnab);

// delete cnab by Id
router.delete('/cnab/:id', DeleteCnab);	

router.get('/balance/:cpf', BalanceCPF);	

module.exports = router;