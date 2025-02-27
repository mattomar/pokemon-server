module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo: {  // Add this field for the trainer's photo
      type: DataTypes.STRING,
      allowNull: true,  // It's optional
    },
    region: {  // Add this field for the trainer's region
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Trainer.associate = (models) => {
    Trainer.hasMany(models.Pokemon, {
      foreignKey: 'trainerId',  // Ensure the foreign key matches the one in Pokemon
      onDelete: 'CASCADE',
    });
  };

  return Trainer;
};