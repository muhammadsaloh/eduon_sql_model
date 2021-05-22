module.exports = async (DataTypes, sequelize) => {
    return await sequelize.define('lessons', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4()
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        video_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        row_order: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};