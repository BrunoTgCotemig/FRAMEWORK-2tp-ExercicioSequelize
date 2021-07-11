//  npm install sequelize --save
//  npm install mysql2 --save
//  npm install sequelize-cli -g

// Ter um servidor rodando o banco de dados mysql (Wamp, et cetera)



// pt 1
//
// Instancialização do sequelize & configuração
//

const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

// configirando conexão sqlite
const Sequelize_ConnectionVar = new Sequelize({
    dialect: "sqlite", // Define qual o tipo de banco de dados usado
    storage: "./db.sqlite"  // Define onde está o banco de dados
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

// pt 1 --End










//
//  Inicio do exercício
//


// criar um modelo
//  **  Modelo também pode ser criado em um arquivo separado

const model = Sequelize_ConnectionVar.define("UserModel", {
    name: {
        type: DataTypes.TEXT,

        allowNull: false,
        autoIncrement: true
    },
    born_date: {
        type: DataTypes.DATE,

        allowNull: false,
        autoIncrement: true
    },
    nickname: {
        type: DataTypes.TEXT,

        allowNull: false,
        autoIncrement: true
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

