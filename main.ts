import express, { Request, Response } from "express";

const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Start on port ${port}`);
});

app.get("/sample", (req: Request, res: Response) => {
    res.send({
        name: "sample!!!"
    });
});
