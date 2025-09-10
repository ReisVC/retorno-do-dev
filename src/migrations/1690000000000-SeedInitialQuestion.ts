// src/migrations/1690000000000-SeedInitialQuestion.ts

import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedInitialQuestion1690000000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Inserindo a pergunta

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
