import express from 'express'; //importa o express
import { PrismaClient } from '@prisma/client'; //importa o prisma

const app = express(); //cria uma variavel app que recebe a biblioteca express

app.use(express.json()); //permite que o express entenda json

const prisma = new PrismaClient(); //cria uma variavel prisma que recebe a biblioteca prisma

app.post('/usuarios', async (req, res) => { //cria usuarios
    try {
       await prisma.user.create ({
            data: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            }
        });
        res.send('Usuário criado com sucesso!') //retorna uma mensagem de sucesso
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário!' }); //retorna uma mensagem de erro
    }
});

app.get('/usuarios', async (req, res) => { //cria uma lista get para /usuarios

    const user = await prisma.user.findMany();

    res.status(200).json(user); //retorna a lista de usuarios

    });

app.delete('/usuarios/:id', async (req, res) => { //cria uma lista delete para /usuarios/:id
    
    await prisma.user.delete({
        where : {
            id: req.params.id
        }
    });

    res.status(200).json({message: "Usuário deletado!"})
});

app.listen(2007) //sobe o servidor na porta 2007