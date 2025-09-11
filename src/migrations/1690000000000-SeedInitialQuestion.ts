// src/migrations/1690000000000-SeedInitialQuestion.ts

import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedInitialQuestion1690000000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Inserindo a pergunta

        // Lista de perguntas que serão inseridas quando rodar o código
        const questions = [
            {
                question: 'Quem é a criatura que guia Frodo e Sam para Mordor',
                answers: [
                    { answer: 'Gollum', correct: true },
                    { answer: 'Legolas', correct: false },
                    { answer: 'Bilbo', correct: false },
                    { answer: 'Saruman', correct: false }
                ]
            },
            {
                question: 'Qual o nome da espada empunhada por Aragorn?',
                answers: [
                    { answer: 'Andúril', correct: true },
                    { answer: 'Glamdring', correct: false },
                    { answer: 'Sting', correct: false },
                    { answer: 'Orcrist', correct: false }
                ]
            },
            {
                question: 'Qual é o verdadeiro nome de Gollum?',
                answers: [
                    { answer: 'Gríma', correct: false },
                    { answer: 'Sméagol', correct: true },
                    { answer: 'Déagol', correct: false },
                    { answer: 'Saruman', correct: false }
                ]
            },
            {
                question: 'Quem forjou o Um Anel?',
                answers: [
                    { answer: 'Celebrimbor', correct: false },
                    { answer: 'Gandalf', correct: false },
                    { answer: 'Sauron', correct: true },
                    { answer: 'Elrond', correct: false }
                ]
            },
            {
                question: 'Quantos membros formam a Sociedade do Anel?',
                answers: [
                    { answer: '7', correct: false },
                    { answer: '9', correct: true },
                    { answer: '5', correct: false },
                    { answer: '10', correct: false }
                ]
            },
            {
                question: 'Qual é o nome da espada reforjada para Aragorn?',
                answers: [
                    { answer: 'Narsil', correct: false },
                    { answer: 'Sting', correct: false },
                    { answer: 'Andúril', correct: true },
                    { answer: 'Glamdring', correct: false }
                ]
            },
            {
                question: 'Qual o nome da montanha onde o Um Anel deve ser destruído?',
                answers: [
                    { answer: 'Montanha Solitária', correct: false },
                    { answer: 'Monte Neblina', correct: false },
                    { answer: 'Montanha da Perdição', correct: true },
                    { answer: 'Monte Fogo', correct: false }
                ]
            }
        ];

        for (const q of questions) {
            // Inserir a pergunta
            const result = await queryRunner.query(`
                INSERT INTO questions (question) 
                VALUES (?)`,
                [q.question]
            );

            const questionId = result.insertId;

            // Inserir as respostas
            const answerValues = q.answers.map(a => [a.answer, a.correct, questionId]);

            await Promise.all(answerValues.map(values =>
                queryRunner.query(`
                    INSERT INTO answers (answer, correct, questionId)
                    VALUES (?, ?, ?)`, values)
            ));
        }

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM answers`);
        await queryRunner.query(`DELETE FROM questions`);
    }
}
