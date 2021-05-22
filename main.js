const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./models/UserModel');
const CategoryModel = require('./models/CategoryModel');
const CourseModel = require('./models/CourseModel');
const LessonModel = require('./models/LessonModel');
const SubscriptionModel = require('./models/SubscriptionModel');
const UserLessonModel = require('./models/UserLesson');
const CartModel = require('./models/CartModel');
const OrderModel = require('./models/OrderModel');

// Cyber Security
require('dotenv').config();
const URL = process.env.URL;

// Sequelize 
const sequelize = new Sequelize(URL, {
    logging: (log) => console.log(`SQL: ${log}`)
}); 

// connected
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

        // References

        db.categories.hasMany(db.courses, {
            foreign_key: {
                name: "category_id",
                allowNull: false
            }
        });

        

        db.courses.belongsTo(db.categories, {
            foreign_key: {
                name: "category_id",
                allowNull: false
            }
        });


        db.users.hasMany(db.cart, {
            foreign_key: {
                name: "user_id",
                allowNull: "false"
            }
        });

        db.cart.belongsTo(db.users, {
            foreign_key: {
                name: "user_id",
                allowNull: false
            }
        });

        db.courses.hasMany(db.cart, {
            foreign_key: {
                name: "course_id",
                allowNull: false
            }
        });

        db.cart.belongsTo(db.courses, {
            foreign_key: {
                name: "course_id",
                allowNull: false
            }
        });

        db.users.hasMany(db.orders, {
            foreign_key: {
                name: 'user_id',
                allowNull: false
            }
        });

        db.orders.belongsTo(db.users, {
            foreign_key: {
                name: 'user_id',
                allowNull: false
            }
        });

        sequelize.sync({ force: false });

    } catch (e) {
        console.log("SQL ERROR:", e);
    }
};

main();