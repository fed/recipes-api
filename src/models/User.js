module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            name: DataTypes.STRING
        },
        {
            tableName: 'users',
            timestamps: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    User.prototype.parse = function() {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            created_at: this.created_at,
            updated_at: this.updated_at
        };
    };

    return User;
};
