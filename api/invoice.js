import express from "express";

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const { client, items } = req.body;

  // For now, just echo back
  // Later: generate invoice HTML / PDF
  res.json({
    success: true,
    invoice: {
      id: "INV-" + Date.now(),
      client,
      items,
      total: items?.reduce((s, i) => s + i.price * i.qty, 0) || 0,
    },
  });
});

export default app;
