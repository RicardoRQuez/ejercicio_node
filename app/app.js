import Express from 'express';
import routes from './routes.js'

const app = Express()

app.use(Express.json());
app.use("/", routes)



export default app;