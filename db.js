const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    // 数据库名称
    "test",
    // 数据库用户名
    "root",
    // 数据库密码
    "123456",
    {
    // 如果是远程数据库，可以填写 ip 地址
        host: "192.168.1.51:3307",
        dialect: "mysql",
    }
);

module.exports = sequelize;