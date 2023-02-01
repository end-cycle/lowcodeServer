const { Sequelize } = require('sequelize');
const seq = new Sequelize('lowcode', 'root', '123456', {
    host: 'localhost',
    // host: '82.156.7.135',
    dialect: 'mysql',
})

seq
    .authenticate()
    .then(() => {
        console.log("数据库连接成功")
    })
    .catch((error) => {
        console.log('数据库连接失败', error)
    })

module.exports = seq
