import { AppDataSource } from "../data-source";
import { Answer } from "../models/Answer";
import { Question } from "../models/Question";

export class QuestionService {
    private questionRepository = AppDataSource.getRepository(Question)
    private answerRepository = AppDataSource.getRepository(Answer)


    async findById(id: number) {
        const question = await this.questionRepository.findOne({ where: { id } })

        if (!question) throw new Error('Pergunta não encontrada');

        const answers = await this.answerRepository.find({ where: { question: { id: question.id } } });

        const result = { ...question, answers };

        return result;
    }

    async findAll() {
        const questions = await this.questionRepository.find({ select: { id: true, question: true }, relations: ['answers'] });

        if (!questions) throw new Error('Pergunta não encontrada');

        return questions;

    }

    async validateQuestion(data: { questionId: number; answerId: number }) {

        // Verifica se a pergunta existe
        const question = await this.questionRepository.find({ where: { id: data.questionId } });
        if (question.length === 0) return { message: 'Pergunta não encontrada.', isCorrect: false };

        // Verifica se a pergunta existe e trás junto as alternativas
        // para verificar se a alternativa pertence a pergunta
        const searchQuestion = await this.questionRepository.findOne({ where: { id: data.questionId }, relations: ['answers'] });
        if (!searchQuestion) return { message: 'Pergunta não encontrada.', isCorrect: false };

        // Verifica se a resposta existe
        const answer = await this.answerRepository.find({ where: { id: data.answerId } });
        if (answer.length === 0) return { message: 'Resposta não encontrada.', isCorrect: false };

        // Verifica se a resposta pertence a pergunta
        const searchAnswer = searchQuestion.answers.find(a => a.id === data.answerId);
        if (!searchAnswer) return { message: 'Resposta incorreta.', isCorrect: false };

        const result = {
            question, answer,
            message: searchAnswer.correct ? 'Resposta correta!' : 'Resposta incorreta.', isCorrect: searchAnswer.correct
        };

        return result;
    }

}
