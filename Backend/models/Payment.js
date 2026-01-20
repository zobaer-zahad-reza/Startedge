const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Payment = sequelize.define("Payment", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  mobile: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  method: {
    type: DataTypes.ENUM("bkash", "rocket", "nagad"),
    allowNull: false,
  },
  senderNumber: { type: DataTypes.STRING, allowNull: false },
  trxid: { type: DataTypes.STRING, allowNull: false, unique: true },
  plan: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: "Pending" },
});

module.exports = Payment;
