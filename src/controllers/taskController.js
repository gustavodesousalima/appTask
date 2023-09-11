const taskService = require('../services/taskService');

module.exports = {
    getAllTasks: async (req, res) => {
        let json = { error: '', result: [] };

        let tasks = await taskService.getAllTasks();

        for (let i in tasks) {
            json.result.push({
                codigo: tasks[i].codigo,
                data: tasks[i].data,
                informacao: tasks[i].informacao
            });
            res.json(json);
        }
    },

    create: async (req, res) => {
        let json = { error: '', result: [] };

        let data = req.body.data;
        let informacao = req.body.informacao;

        if (data && informacao) {
            let taskCodigo = await taskService.create(data, informacao);
            json.result = {
                codigo: taskCodigo,
                data,
                informacao
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    delete: async (req, res) => {
        let json = { error: '', result: {} };

        await taskService.delete(req.params.codigo);

        res.json(json);
    }
}
