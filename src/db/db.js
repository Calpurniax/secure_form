import mongoose from "mongoose";

const dbConnect = () => {
  const user = 'sofia';
  const pass = 'JXSk0CrWW98o3HxR';
  const dbName = 'cluster0';

  const uri = `mongodb+srv://${user}:${pass}@${dbName}.gcyv8tr.mongodb.net/?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('conectado a MongoDB'))
    .catch((e) => console.log('error de conexión', e));
};
export default dbConnect;

