import express from "express";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

class App {
  private app: express.Application;
  private httpServer: http.Server;
  private io: Server;

  constructor() {
    this.app = express();

    // Usar CORS para aceitar qualquer origem
    this.app.use(cors());

    // Servir os arquivos estáticos do React build
    this.app.use(express.static(path.join(__dirname, "../Front/build")));

    // Configurar o Socket.IO para ouvir na mesma porta
    this.httpServer = http.createServer(this.app);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "*", // Permite qualquer origem (ajustar se necessário)
        methods: ["GET", "POST"],
      },
    });

    // Lidar com eventos de socket
    this.listenSocket();
  }

  private listenSocket() {
    this.io.on("connection", (socket) => {
      console.log("Usuário conectado: ", socket.id);

      socket.on("send_message", (data) => {
        console.log("Mensagem recebida:", data);
        this.io.emit("receive_message", data);
      });

      socket.on("disconnect", () => {
        console.log("Usuário desconectado", socket.id);
      });
    });
  }

  public listenServer() {
    const PORT = 3001; // Porta do servidor
    const HOST = "0.0.0.0"; // Isso garante que o servidor escute em todas as interfaces de rede
    this.httpServer.listen(PORT, HOST, () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );
  }
}

const app = new App();
app.listenServer();
