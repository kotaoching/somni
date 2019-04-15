import { Model, DataTypes } from 'sequelize';
import nanoid from 'nanoid';

import Client from './client';
import User from '../user';

import sequelize from '../../database/postgresql';

class AccessToken extends Model {}

AccessToken.init(
  {
    id: {
      type: DataTypes.STRING(18),
      allowNull: false,
      primaryKey: true,
      defaultValue: function () {
        return nanoid(18);
      }
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expires: DataTypes.DATE,
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
    tableName: 'oauth_access_tokens',
    sequelize
  }
);

AccessToken.belongsTo(Client, {
  foreignKey: 'client_id'
});

AccessToken.belongsTo(User, {
  foreignKey: 'user_id'
});

export default AccessToken;