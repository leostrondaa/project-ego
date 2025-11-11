import express, { Application } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

class App {
  private app: Application;
  private httpServer: http.Server;
  private io: Server;

  constructor() {
    this.app = express();

    this.app.use(cors({
      origin: "*",
      methods: ["GET", "POST"],
    }));

    this.httpServer = http.createServer(this.app);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

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
    const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
    this.httpServer.listen(PORT, '0.0.0.0', () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );


  }
}

const app = new App();
app.listenServer();