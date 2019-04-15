import { Model, DataTypes } from 'sequelize';
import nanoid from 'nanoid';
import User from '../user';

import sequelize from '../../database/postgresql';

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.STRING(18),
      allowNull: false,
      primaryKey: true,
      defaultValue: function () {
        return nanoid(18);
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    client_id: DataTypes.STRING,
    client_secret: DataTypes.STRING,
    redirect_uri: DataTypes.STRING,
    grant_types: DataTypes.STRING,
    scope: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  },
  {
    tableName: 'oauth_clients',
    sequelize
  }
);

Client.belongsTo(User, {
  foreignKey: 'user_id'
});

export default Client;