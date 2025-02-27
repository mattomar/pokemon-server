module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo: {  // Add this
      type: DataTypes.STRING,
      allowNull: true, // Allow it to be NULL if some Pokémon don't have photos
    },
    trainerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Trainers',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  });

  Pokemon.associate = (models) => {
    Pokemon.belongsTo(models.Trainer, {
      foreignKey: 'trainerId',
    });
  };

  return Pokemon;
};