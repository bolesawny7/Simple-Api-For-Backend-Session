import express from 'express';
import clientRouter from './routes/clientRouter';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use('/clients', clientRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});