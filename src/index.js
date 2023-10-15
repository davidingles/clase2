import app from './app.js'
import { PORT } from './dotenv/config.js'

app.listen(PORT, () => {
  console.log(`David, the Server is running on port http://localhost:${PORT}`)
})
