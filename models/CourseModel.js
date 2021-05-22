module.exports = async (DataTypes, sequelize) => {
    return await sequelize.define('course', {
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
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        video_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};