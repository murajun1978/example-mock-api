import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()

app.use('*', prettyJSON())

const users = [{
  name: 'John Doe',
  age: 25,
  city: 'New York',
}, {
  name: 'Jane Doe',
  age: 30,
  city: 'Los Angeles',
}, {
  name: 'Jack Doe',
  age: 27,
  city: 'San Francisco',
}]

app.get('/users', (c) => {
  return c.json(users)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
