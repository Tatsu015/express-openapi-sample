import express, { Request, Response, NextFunction } from "express";
import { initialize } from "express-openapi";
import path from "path";

const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Start on port ${port}`);
});

initialize({
    app: app,
    apiDoc: path.resolve(__dirname, "openapi.json"),
    validateApiDoc: true,
    operations: {
        getSample: [
            function (req: Request, res: Response, next: NextFunction) {
                next();
            },
            function (req: Request, res: Response) {
                res.send({
                    name: "sample!!!!!!!!!!!!!!"
                });
            }
        ]
    }
});