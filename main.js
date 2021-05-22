const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./models/UserModel');
const CategoryModel = require('./models/CategoryModel');
const CourseModel = require('./models/CourseModel');
const LessonModel = require('./models/LessonModel');
const SubscriptionModel = require('./models/SubscriptionModel');
const UserLessonModel = require('./models/UserLesson');
const CartModel = require('./models/CartModel');
const OrderModel = require('./models/OrderModel');

require('dotenv').config();
const URL = process.env.URL;

const sequelize = new Sequelize(URL, {
    logging: (log) => console.log(`SQL: ${log}`)
}); 

async function main () {
    try {
        await sequelize.authenticate();
        console.log('Connected Succesfuly');

        let db = {};

        db.users = await UserModel(DataTypes, sequelize);
        db.categories = await CategoryModel(DataTypes, sequelize);
        db.courses = await CourseModel(DataTypes, sequelize);
        db.lessons = await LessonModel(DataTypes, sequelize);
        db.subscriptions = await SubscriptionModel(DataTypes, sequelize);
        db.userlessons = await UserLessonModel(DataTypes, sequelize);
        db.cart = await CartModel(DataTypes, sequelize);
        db.orders = await OrderModel(DataTypes, sequelize);

        sequelize.sync({ force: false });

    } catch (e) {
        console.log("SQL ERROR:", e);
    }
};

main();