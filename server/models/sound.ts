import { DataTypes, Model } from 'sequelize'
import connection from '../database'

interface SoundAttributes {
  id: string;
  name: string,
  path: string,
  votes: number,
}
export interface SoundInput  extends Required<SoundAttributes> { name: string }
export interface SoundOutput extends Required<SoundAttributes> {}

class Sound extends Model<SoundAttributes, SoundInput> implements SoundAttributes {
    public  id!: string
    public name!: string
    public votes!: number
    public path!: string
  };

  Sound.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      votes: {
        type: DataTypes.BIGINT,
      },
    path: {
            type: DataTypes.STRING,
          }
      },

  {
    timestamps: true,
    sequelize: connection,
    freezeTableName: true,
  }
  );



export default Sound