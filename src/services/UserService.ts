import { AppDataSource } from '../data-source'
import { User } from '../models/User'

export class UserService {
    private userRepository = AppDataSource.getRepository(User)

    async create(data: { name: string; email: string; password: string }) {
        const exists = await this.userRepository.findOne({ where: { email: data.email } })
        if (exists) throw new Error('E-mail já cadastrado')
        const user = this.userRepository.create(data)
        await this.userRepository.save(user)

        const clone: any = { ...user }

        delete clone.password

        return clone
    }

    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } })
    }

    async findAll() {
        const users = await this.userRepository.find()

        return users;
    }

    async removeById(id: number) {
        const user = await this.userRepository.findOne({ where: { id } })

        if (!user) throw new Error('Usuário não encontrado')

        await this.userRepository.remove(user)

        return { message: 'Usuário removido' }

    }

    async findById(id: number) {
        const user = await this.userRepository.findOne({ where: { id } })

        if (!user) throw new Error('Jogador não encontrado')

        const clone: any = { ...user }

        delete clone.password


        return clone
    }

    async update(id: number, data: Partial<User>) {
        const user = await this.userRepository.findOne({ where: { id } })

        if (!user) throw new Error('Jogador não encontrado')

        if (data.password) {
            user.password = data.password
        }

        const { password, ...rest } = data
        Object.assign(user, rest)

        return await this.userRepository.save(user)
    }


    async remove(id: number) {
        const user = await this.userRepository.findOne({ where: { id } })

        if (!user) throw new Error('Usuário não encontrado')

        await this.userRepository.remove(user)

        return { message: 'Usuário removido' }
    }
}