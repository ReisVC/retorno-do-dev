import { AppDataSource } from "../data-source";
import { Answer } from "../models/Answer";
import { Question } from "../models/Question";

export class QuestionService {
    private questionRepository = AppDataSource.getRepository(Question)
    private answerRepository = AppDataSource.getRepository(Answer)


    // async create(data: { name: string; email: string; password: string }) {
    //     const exists = await this.userRepository.findOne({ where: { email: data.email } })
    //     if (exists) throw new Error('E-mail já cadastrado')
    //     const user = this.userRepository.create(data)
    //     await this.userRepository.save(user)

    //     const clone: any = { ...user }

    //     delete clone.password

    //     return clone
    // }

    async findById(id: number) {
        const question = await this.questionRepository.findOne({ where: { id } })

        if (!question) throw new Error('Pergunta não encontrada');

        const answers = await this.answerRepository.find({ where: { question: { id: question.id } } });

        const result = { ...question, answers };

        return result;
    }

    async findAll() {
        const questions = await this.questionRepository.find({select: { id: true, question: true }, relations: ['answers'] });

        if (!questions) throw new Error('Pergunta não encontrada');

        return questions;

    }
    //     if (!user) throw new Error('Usuário não encontrado')

    //     const clone: any = { ...user }

    //     delete clone.password

    //     return clone
    // }
}
