module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define(
        'Recipe',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            image_url: DataTypes.STRING,
            source_url: DataTypes.STRING
        },
        {
            tableName: 'recipes',
            timestamps: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    return Recipe;
};
