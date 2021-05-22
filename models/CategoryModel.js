module.exports = async (DataTypes, sequelize) => {
    return await sequelize.define('category', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4()
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};