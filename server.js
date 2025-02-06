require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createProxyMiddleware } = require("http-proxy-middleware");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/auth", authRoutes);

// Proxy (si es necesario)
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://agrotur-back.vercel.app/",
    changeOrigin: true,
  })
);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// require("dotenv").config();
// const morgan = require("morgan");
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// app.use(morgan("dev"));
// app.use(cors("*"));
// app.use(bodyParser.json());
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const errorHandler = require("express-async-handler");

// app.use(
//   errorHandler(async (err, req, res, next) => {
//     res.status(err.statusCode || 500).send({
//       error: err.message,
//     });
//   })
// );
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "https://agrotur-back.vercel.app/",
//     changeOrigin: true,
//   })
// );