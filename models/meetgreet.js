class MeetGreet extends Model {
    static associate({ Band }) {
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
    }
  }
  