//-------------------------------------------------------------------------------------------------
const Sequelize = require("sequelize")
const sequelize = new Sequelize('bdbagmaster','root','123456', {
  host:'localhost',
  dialect:'mysql',
  define: {
    freezeTableName:true 
  }
})
//-------------------------------------------------------------------------------------------------
sequelize.authenticate().then(() => {
  console.log('Conectou no MySql!');
}).catch((error) => {
  console.log('Erro: ',error);
});
//-------------------------------------------------------------------------------------------------
module.exports = {
  Sequelize:Sequelize,
  sequelize:sequelize
}
//-------------------------------------------------------------------------------------------------