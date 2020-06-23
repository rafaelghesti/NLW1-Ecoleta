//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// vamos utilizar o obj de banco de dados para nossas operações

db.serialize(() => {
// //     // criar uma tabela
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// //     `)

// //     //inserir dados
// //    const query = `
// //         INSERT INTO places (
// //             image,
// //             name,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items
// //         ) VALUES (?, ?, ?, ?, ?, ?, ?);
// //     `
// //     const values = [
// //         "http://llhost:3000/wallpapers/photo-1567393528677-d6adae7d4a0a.jfif",
// //         "Papersider",
// //         "Guilherme Gemballa, Jardim América",
// //         "Nº 260",
// //         "Santa Catarina",
// //         "Rio do Sul",
// //         "Papéis e Papelão"
// //     ]


// //     function afterInsertData(err) {
// //         if (err) {
// //             return console.log (err)
// //         }
// //         console.log ("Cadastrado com sucesso")
// //         console.log(this)
// //     }

// //     db.run(query, values, afterInsertData)
//     //consultar dados
//     //  db.all(`SELECT name FROM places`, function(err, rows) {
//     //       if (err) {
//     //          return console.log (err)
//     //        }
//     //        console.log("Aqui estão seus registros")
//     //       console.log(rows)
//     //   })


//     //deletar dado da tabela

    // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    //     if (err) {
    //         return console.log (err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })

})