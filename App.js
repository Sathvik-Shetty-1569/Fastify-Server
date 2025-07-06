import fastify from 'fastify';
import { connectDB } from './config/config.js';
import 'dotenv/config';

const app = fastify()

app.get('/', async(request, reply) => {
  reply.send('Hello world')
})
app.get('/api', async(request, reply) => {
  return { message: 'Welcome to the API' }
})
app.get('/about', (request, reply) => {
  reply.send({ message: 'About page' });
})
app.get('/hello/:name', (request, reply) => {
  const { name } = request.params;
  reply.send({ greeting: `Hello, ${name}!` });
});


const start = async () => {

  try {
  await connectDB(process.env.MONGO_URI);
  app.listen({port: 3000}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
  } catch (error) {
    console.log(error)
  }

}

start();