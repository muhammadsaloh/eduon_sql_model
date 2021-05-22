module.exports = async (DataTypes, sequelize) => {
    return await sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4()
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });
};