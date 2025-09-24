// src/migrations/1690000000000-SeedInitialQuestion.ts

import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedInitialQuestion1690000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Inserindo a pergunta

    // Lista de perguntas que serão inseridas quando rodar o código
    const questions = [
      {
        question: "Quem é a criatura que guia Frodo e Sam para Mordor",
        answers: [
          { answer: "Gollum", correct: true },
          { answer: "Legolas", correct: false },
          { answer: "Bilbo", correct: false },
          { answer: "Saruman", correct: false },
        ],
      },
      {
        question: "Qual o nome da espada empunhada por Aragorn?",
        answers: [
          { answer: "Andúril", correct: true },
          { answer: "Glamdring", correct: false },
          { answer: "Sting", correct: false },
          { answer: "Orcrist", correct: false },
        ],
      },
      {
        question: "Qual é o verdadeiro nome de Gollum?",
        answers: [
          { answer: "Gríma", correct: false },
          { answer: "Sméagol", correct: true },
          { answer: "Déagol", correct: false },
          { answer: "Saruman", correct: false },
        ],
      },
      {
        question: "Quem forjou o Um Anel?",
        answers: [
          { answer: "Celebrimbor", correct: false },
          { answer: "Gandalf", correct: false },
          { answer: "Sauron", correct: true },
          { answer: "Elrond", correct: false },
        ],
      },
      {
        question: "Quantos membros formam a Sociedade do Anel?",
        answers: [
          { answer: "7", correct: false },
          { answer: "9", correct: true },
          { answer: "5", correct: false },
          { answer: "10", correct: false },
        ],
      },
      {
        question: "Qual é o nome da espada reforjada para Aragorn?",
        answers: [
          { answer: "Narsil", correct: false },
          { answer: "Sting", correct: false },
          { answer: "Andúril", correct: true },
          { answer: "Glamdring", correct: false },
        ],
      },
      {
        question: "Qual o nome da montanha onde o Um Anel deve ser destruído?",
        answers: [
          { answer: "Montanha Solitária", correct: false },
          { answer: "Monte Neblina", correct: false },
          { answer: "Montanha da Perdição", correct: true },
          { answer: "Monte Fogo", correct: false },
        ],
      },
    ];

    for (const q of questions) {
      // Inserir a pergunta
      const result = await queryRunner.query(
        `
                INSERT INTO questions (question) 
                VALUES (?)`,
        [q.question]
      );

      const questionId = result.insertId;

      // Inserir as respostas
      const answerValues = q.answers.map((a) => [
        a.answer,
        a.correct,
        questionId,
      ]);

      await Promise.all(
        answerValues.map((values) =>
          queryRunner.query(
            `
                    INSERT INTO answers (answer, correct, questionId)
                    VALUES (?, ?, ?)`,
            values
          )
        )
      );
    }

    const users = [
      {
        name: "Diogo",
        email: "diogo@gmail.com",
        password: "@Vitor123",
        score: 5000,
      },
      {
        name: "Lia",
        email: "lia@gmail.com",
        password: "@Vitor123",
        score: 4600,
      },
      {
        name: "Rafa",
        email: "rafa@gmail.com",
        password: "@Vitor123",
        score: 4200,
      },
      {
        name: "João",
        email: "joao@gmail.com",
        password: "@Vitor123",
        score: 4100,
      },
      {
        name: "Bia",
        email: "bia@gmail.com",
        password: "@Vitor123",
        score: 4000,
      },
      {
        name: "Caio",
        email: "caio@gmail.com",
        password: "@Vitor123",
        score: 3890,
      },
      {
        name: "Nina",
        email: "nina@gmail.com",
        password: "@Vitor123",
        score: 3200,
      },
      {
        name: "Leo",
        email: "leo@gmail.com",
        password: "@Vitor123",
        score: 3000,
      },
      {
        name: "Tati",
        email: "tati@gmail.com",
        password: "@Vitor123",
        score: 2900,
      },
      {
        name: "Igor",
        email: "igor@gmail.com",
        password: "@Vitor123",
        score: 2700,
      },
    ];

    for (const user of users) {
      const values = [user.name, user.email, user.password, user.score];

      await queryRunner.query(
        `
    INSERT INTO users (name, email, password, score)
    VALUES (?, ?, ?, ?)`,
        values
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM answers`);
    await queryRunner.query(`DELETE FROM questions`);
    await queryRunner.query(`DELETE FROM users WHERE id > 0`);
  }
}
