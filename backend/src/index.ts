import express, {Request, Response} from 'express'

const PORT = 5000
const app = express()

app.get('/', (req: Request, res: Response   ) => {
    res.send('Hello')
})


app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})