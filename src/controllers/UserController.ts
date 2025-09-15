import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const service = new UserService()

export class UserController {

    async create(req: Request, res: Response) {
        try {
            const user = await service.create(req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    // função de remover o usuário
    async remove(req: Request, res: Response) {
        // começará criando um paremetro 'result' colocando await , pq usamos async. irá fazer tudo no 'sigilo' pois ele colocou a requisiçao em 'any' buscando o user e id.
        try {
            const result = await service.remove((req as any).user.id)
            // aparecerá o resultado aqui
            res.json(result)
            // caso nao de certo irá pular pra cá
        } catch (e: any) {
            // irá mostrar essa mensagem
            res.status(400).json({ message: e.message })
        }
    }

    async removeById(req: Request, res: Response) {
        // começará criando um paremetro 'result' colocando await , pq usamos async. irá fazer tudo no 'sigilo' pois ele colocou a requisiçao em 'any' buscando o user e id.
        try {
            const result = await service.removeById((req as any).user.id)
            // aparecerá o resultado aqui
            res.json(result)
            // caso nao de certo irá pular pra cá
        } catch (e: any) {
            // irá mostrar essa mensagem
            res.status(400).json({ message: e.message })
        }
    }


    // função de realizar um update
    async update(req: Request, res: Response) {
        try {
            const user = await service.update((req as any).user.id, req.body)
            res.json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    // função de buscar por ID
    async getById(req: Request, res: Response) {
        try {
            // aqui é findById pois é o nome da funçao de procurar o id la no service
            const result = await service.findById((req as any).user.id);
            res.json(result)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    async getbyEmail(req: Request, res: Response) {
        try {
            const result = await service.findByEmail(req.params.email);
            res.json(result)
        } catch (e: any) {
            res.status(400).json({ message: e.message})
        }
    }

    async findAll (req:Request, res: Response) {
        try {
            const result = await service.findAll();
            res.json(result)
        } catch (e:any) {
            res.json (400).json({message: e.message})
        }
    }

    async ranking (req:Request, res: Response) {
        try {
            const result = await service.ranking();
            res.json(result)
        } catch (e:any) {
            res.json (400).json({message: e.message})
        }
    }

    async score(req: Request, res: Response) {
        try {
            const user = await service.changeScore((req as any).user.id, req.body);
            return res.json(user);
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

}


