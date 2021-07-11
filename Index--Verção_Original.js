// para rodar o projeto
// primeiro npm install e depois npm run start

const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

// configirando conexão sqlite
const Sequelize_ConnectionVar = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
});

// validar conexão com o arquivo e se ela existir conectar
Sequelize_ConnectionVar.authenticate()
    .then(async () => {
        // lendo arquivo script.sql e persistindo no banco
        const dir = path.resolve(__dirname, "script.sql");
        const sqlCommand = fs.readFileSync(dir).toString("ascii");

        Sequelize_ConnectionVar.query(sqlCommand);
        await start();
    });



//
//  Inicio do exercício
//





// criar um modelo
const model = Sequelize_ConnectionVar.define("UserModel", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    // TODO: definir os atributos 
}, {
    // configurando a tabela
    timestamps: false, // não estamos usando os campos createdAt, updatedAt
    tableName: "usuario", // configuranod o nome da tabela
    underscored: true  // estamos usando os campos no banco com underscore
}); 

const find = async () => {
    // TODO: implementar
    return await model.findAll();
}

const create = async (user) => {
    // TODO: implementar
    model.create
}

const findByPk = async (id) => {
    // TODO: implementar
    model.findByPk
}

const update = async (pk, user) => {
    // TODO: implementar
    model.update
}

const deleteById = async (pk) => {
    // TODO: implementar
    model.destroy
}

// chamadas para essas funções

const start = async () => {
    // colocar chamadas de função aqui!

    // testando função findall 

    const allUsers = await find();
    console.info(allUsers); 
}

