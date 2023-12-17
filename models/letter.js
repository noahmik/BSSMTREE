const Sequelize = require("sequelize");

class Letter extends Sequelize.Model {
  static initiate(sequelize) {
    Letter.init(
      {
        letternum: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true, // auto_increment 추가
        },
        writer: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        recipient: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        detail: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Letter",
        tableName: "Letter",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
}

module.exports = Letter;