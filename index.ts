import express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

// init express app
const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json())

// init array to store incoming payloads
const submissions: any[] = []

// create webhook to receive payloads
app.post("/webhook", (req: Request, res: Response) => {
  const payload = req.body
  console.log('Received payload', JSON.stringify(payload))
  submissions.push(payload)

  res.status(200).send("Payload received")
})

// return received payloads
app.get("/submissions", (req: Request, res: Response) => {
  console.log('Returning submissions', submissions)
  res.json(submissions)
})

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`)
})