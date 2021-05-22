module.exports = async (DataTypes, sequelize) => {
    return await sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4()
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    });
};