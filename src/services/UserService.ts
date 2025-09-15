import { AppDataSource } from '../data-source'
import { Achievement } from '../models/Achievement';
import { User } from '../models/User'

export class UserService {
    private userRepository = AppDataSource.getRepository(User)
    private achievementRepository = AppDataSource.getRepository(Achievement)

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

        if (!user) throw new Error('Usuário não encontrado')

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

        await this.userRepository.save(user)

        const userClone: any = { ...user }

        delete userClone.password;

        return userClone;
    }


    async remove(id: number) {
        const user = await this.userRepository.findOne({ where: { id } })

        if (!user) throw new Error('Usuário não encontrado')

        return await this.userRepository.remove(user)
    }

    async ranking() {
        const users = await this.userRepository.find({ select: {id: true, name: true, score:true}, order: { score: "DESC"}, take: 10 })
        return users
    }

    async createAchievement(user: User) {
        if(user.score > 1000) {
            const ach = await this.achievementRepository.findOne({ where: { title: "Usuário mais que lendário", user: user.id} })
            if(!ach) {
                console.log(ach)
                const achievement = this.achievementRepository.create({ title: "Usuário mais que lendário", user: user });
                await this.achievementRepository.save(achievement);
            }
        }
    }


    async changeScore(id: number, data: { score: number }) {
        const user = await this.userRepository.findOne({ where: { id } })
        if (!user) throw new Error('Usuário não encontrado')

        user.score += data.score;

        await this.userRepository.save(user)

        await this.createAchievement(user);

        const clone: any = { ...user };
        delete clone.password;
        return clone; 
    }


}