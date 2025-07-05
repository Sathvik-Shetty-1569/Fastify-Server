import fastify from 'fastify'

const app = fastify()

app.get('/hello', async (request, reply) => {
  return { message: 'Hello from Fastify!' }
})

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server running at ${address}`)
})