import express, { Request, Response } from "express";
import identity from "./identity";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "hello world hehe knn h aksdfj tiu finally lahah" });
});

interface Body {
  data: string;
}

app.post("/", (req: Request, res: Response) => {
  const message = identity((req.body as Body).data);
  res.send({ message: message });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
