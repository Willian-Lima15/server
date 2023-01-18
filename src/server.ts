import Fastify from "fastify";//fastify está substituindo o express;
import  cors  from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();//iniciando o app
const prisma = new PrismaClient()// Da acesso a todas as tabelas do banco de dados

app.register(cors)//configura quais rotas pode acessar o backend

app.get('/will', async () => {//barra a depois da port ex: http://localhost:3333/will
    const habits = await prisma.habit.findMany()//acessa todo o conteúdo a tabela habits

    return habits //conteudo que vai exibir na tela
    
})

app.listen({
    port:3333, //porta da url
})