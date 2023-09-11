const db = require('../db');
module.exports = {
    getAllTasks: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM tasks', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    create: (data, informacao) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO tasks (data, informacao) VALUES (?, ?)',
                [data, informacao],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }
            );
        });
    },

    delete: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM tasks WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        })
    }
};