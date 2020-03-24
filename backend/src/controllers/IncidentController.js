const connection = require('../database/connection');

// Exportar o objeto
module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {

        const { title, description, value } = request.body;

        // Acessando o cabeçalho da requisição, onde fica todo o contexto da requisição (autenticação, localização, etc)
        const ong_id = request.headers.authorization;

        const [incident_id] = await connection('incidents').insert({
            title, description, value, ong_id,
        })

        return response.json({ incident_id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id)
            return response.status(401).json({ error: 'Operation not permitted.' });

        await connection('incidents').where('id', id).delete();

        // 204: resposta que deu sucesso mas que não há conteúdo para retornar
        // send(): enviar resposta sem corpo
        return response.status(204).send();
    }
};