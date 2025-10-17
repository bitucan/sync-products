import express from "express";

const app = express();

app.use(express.json());

app.post("/api/notification", (req, res) => {
  const vtexNotification = req.body;
  console.log("Notificación VTEX recibida:", vtexNotification.idSKU);

  // 1. Validar autenticación (si aplica)
  // 2. Enviar a la cola de procesamiento (paso 2)

  // Responde inmediatamente a VTEX para evitar timeouts
  res.status(200).send("Notificación recibida y en cola.");
});

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor de notificaciones escuchando en el puerto ${PORT}`)
);
