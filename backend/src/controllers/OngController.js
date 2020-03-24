const connection = require('../database/connection');
const crypto = require('crypto'); // pacote de criptografia que vem no node 

module.exports = {

    async index(request, response) {    
        const ongs = await connection('ongs').select('*');        
        return response.json(ongs);
    },

    async create(request, response) {

        /* const data = request.body;
        console.log(data); */

        const { name, email, whatsapp, city, uf } = request.body;

        // Usando crypto para fazer o id, é gerado 4 bytes de caracteres aleatorios em hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf,
        });

        return response.json({ id });
    }
};