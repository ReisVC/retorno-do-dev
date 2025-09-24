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
      {
        question: "Quem é o Rei de Rohan durante a Guerra do Anel?",
        answers: [
          { answer: "Théoden", correct: true },
          { answer: "Denethor", correct: false },
          { answer: "Boromir", correct: false },
          { answer: "Faramir", correct: false },
        ],
      },
      {
        question: "Qual é o nome da torre onde Saruman reside?",
        answers: [
          { answer: "Orthanc", correct: true },
          { answer: "Barad-dûr", correct: false },
          { answer: "Minas Tirith", correct: false },
          { answer: "Dol Guldur", correct: false },
        ],
      },
      {
        question: "Quem salva Frodo dos Espectros do Anel no Vau de Bruinen?",
        answers: [
          { answer: "Gandalf", correct: false },
          { answer: "Arwen", correct: true },
          { answer: "Éowyn", correct: false },
          { answer: "Galadriel", correct: false },
        ],
      },
      {
        question: "Qual o nome da criatura que ataca Gandalf em Moria?",
        answers: [
          { answer: "Troll", correct: false },
          { answer: "Balrog", correct: true },
          { answer: "Orc", correct: false },
          { answer: "Uruk-hai", correct: false },
        ],
      },
      {
        question: "Qual dos seguintes NÃO é um hobbit?",
        answers: [
          { answer: "Sam", correct: false },
          { answer: "Frodo", correct: false },
          { answer: "Merry", correct: false },
          { answer: "Gimli", correct: true },
        ],
      },
      {
        question: "Quem destrói o Um Anel, mesmo que indiretamente?",
        answers: [
          { answer: "Frodo", correct: false },
          { answer: "Gollum", correct: true },
          { answer: "Sam", correct: false },
          { answer: "Aragorn", correct: false },
        ],
      },
      {
        question: "Qual o nome da cidade élfica onde Frodo se recupera após ser ferido?",
        answers: [
          { answer: "Valfenda", correct: true },
          { answer: "Lothlórien", correct: false },
          { answer: "Minas Tirith", correct: false },
          { answer: "Edoras", correct: false },
        ],
      },
      {
        question: "Quem é o pai de Boromir e Faramir?",
        answers: [
          { answer: "Théoden", correct: false },
          { answer: "Elrond", correct: false },
          { answer: "Denethor", correct: true },
          { answer: "Isildur", correct: false },
        ],
      },
      {
        question: "Que ser mágico ajuda Gandalf na batalha nos Campos de Pelennor?",
        answers: [
          { answer: "Árvore", correct: false },
          { answer: "Águia Gigante", correct: true },
          { answer: "Balrog", correct: false },
          { answer: "Warg", correct: false },
        ],
      },
      {
        question: "Quem é a Dama de Lothlórien?",
        answers: [
          { answer: "Éowyn", correct: false },
          { answer: "Arwen", correct: false },
          { answer: "Galadriel", correct: true },
          { answer: "Shelob", correct: false },
        ],
      },
      {
        question: "O que é Sting?",
        answers: [
          { answer: "Um cajado", correct: false },
          { answer: "Uma espada élfica", correct: false },
          { answer: "Uma adaga élfica", correct: true },
          { answer: "Um arco", correct: false },
        ],
      },
      {
        question: "Qual o nome do reino dos anões visitado em 'O Hobbit'?",
        answers: [
          { answer: "Erebor", correct: true },
          { answer: "Gondor", correct: false },
          { answer: "Moria", correct: false },
          { answer: "Rohan", correct: false },
        ],
      },
      {
        question: "Quem mata o Rei Bruxo de Angmar?",
        answers: [
          { answer: "Gandalf", correct: false },
          { answer: "Aragorn", correct: false },
          { answer: "Éowyn", correct: true },
          { answer: "Boromir", correct: false },
        ],
      },
      {
        question: "Qual o nome do elfo que é parte da Sociedade do Anel?",
        answers: [
          { answer: "Thranduil", correct: false },
          { answer: "Elrond", correct: false },
          { answer: "Legolas", correct: true },
          { answer: "Celeborn", correct: false },
        ],
      },
      {
        question: "Qual criatura tenta devorar Frodo e Sam perto de Cirith Ungol?",
        answers: [
          { answer: "Balrog", correct: false },
          { answer: "Gollum", correct: false },
          { answer: "Shelob", correct: true },
          { answer: "Nazgûl", correct: false },
        ],
      },
      {
        question: "Qual o nome do pai de Aragorn?",
        answers: [
          { answer: "Isildur", correct: false },
          { answer: "Elendil", correct: false },
          { answer: "Arathorn", correct: true },
          { answer: "Denethor", correct: false },
        ],
      }

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
        score: 4000,
      },
      {
        name: "Lia",
        email: "lia@gmail.com",
        password: "@Vitor123",
        score: 2120,
      },
      {
        name: "Rafa",
        email: "rafa@gmail.com",
        password: "@Vitor123",
        score: 1500,
      },
      {
        name: "Noah",
        email: "joao@gmail.com",
        password: "@Vitor123",
        score: 1200,
      },
      {
        name: "Bia",
        email: "bia@gmail.com",
        password: "@Vitor123",
        score: 1000,
      },
      {
        name: "Caio",
        email: "caio@gmail.com",
        password: "@Vitor123",
        score: 800,
      },
      {
        name: "Nina",
        email: "nina@gmail.com",
        password: "@Vitor123",
        score: 670,
      },
      {
        name: "Jorge",
        email: "jorge@gmail.com",
        password: "@Vitor123",
        score: 400,
      },
      {
        name: "Tati",
        email: "tati@gmail.com",
        password: "@Vitor123",
        score: 200,
      },
      {
        name: "Igor",
        email: "igor@gmail.com",
        password: "@Vitor123",
        score: 100,
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
