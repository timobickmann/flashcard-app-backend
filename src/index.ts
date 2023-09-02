import express from "express";
import { getFlashcards } from "./model.js";

const app = express();
const port = 3601;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(` 
    <h1>Flashcards API</h1>
    <ul>
        <li>
            <a href="/flashcards">flashcards</a>
        </li>
    </ul>
        `);
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});

app.get("/flashcards", (req: express.Request, res: express.Response) => {
  res.send(getFlashcards());
});
