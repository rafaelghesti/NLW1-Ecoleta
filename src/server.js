const express = require("express")
const server = express()

const db = require("./database/db")

// configurar pasta public
server.use(express.static("public"))

//ahb o req body app
server.use(express.urlencoded({ extended: true}))

// utilizando temple engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configura caminhos na aplicacao

//pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um Título"})
})

server.get("/create-point", (req, res) => {
    // console.log(req.query)



    return res.render("create-point.html")
})

server.post ("/savepoint", (req, res) => {
    // console.log (req.body)

    //inserir dados no DB
   const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log (err)
        }
        console.log ("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", {saved:true})
    }

    db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {

        const search = req.query.search
        if(search=="") {
            // pesquisa vazia
            return res.render("search-results.html", {total: 0})
        }

         db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
          if (err) {
            console.log (err)
            return res.send("Erro no cadastro!")
           }

           const total = rows.length

          return res.render("search-results.html", {places: rows, total: total})
      })
})


// liga servidor
server.listen(3000)