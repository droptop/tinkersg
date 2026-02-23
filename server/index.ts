import path from "path";
import express from "express";
import { createServer } from "../server/index";

const app = createServer();

// Serve static files from dist/spa
app.use(express.static(path.join(process.cwd(), "dist/spa")));

// Catch-all for React Router
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "Not found" });
  }
  res.sendFile(path.join(process.cwd(), "dist/spa/index.html"));
});

export default app;