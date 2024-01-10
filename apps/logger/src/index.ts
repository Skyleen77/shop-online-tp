import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import client from "./lib/client";

const app = express();

app.use(morgan("dev"));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`api running at port ${port}`);
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/log", async (req, res) => {
  const { level, message } = req.body;

  try {
    const log = await client.log.create({
      data: {
        level,
        message,
      },
    });

    console.log(log);

    res.status(201).json(log);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
});

app.get("/logs", async (req, res) => {
  try {
    const logs = await client.log.findMany();

    res.status(200).json(logs);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
});
