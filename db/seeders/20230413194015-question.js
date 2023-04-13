'use strict';
const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        theme_id: 1,
        questions: 'Как звали маму Македонского?',
        answers: 'Олимпиада',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        questions: 'Какое название имеет правитель при маленьком монархе?',
        answers: 'Регент',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        questions: 'Сколько лет длилась столетняя война?',
        answers: '116',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        questions: 'В каком году началась первая мировая война? ',
        answers: '1914',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        questions:
          'Именно этот вид транспорта встречал Ленина на территории Финляндского вокзала. Какой?',
        answers: 'Броневик',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        questions: 'Назовите озеро, где было Ледовое побоище.',
        answers: 'Чутское',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        questions: 'Самая маленькая часть света?',
        answers: 'Австралия.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        questions: 'Где находится Аравийская пустыня?',
        answers: 'В Африке',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        questions: 'Самая большая гора Европы?',
        answers: 'Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        questions: 'Лондондерри расположен в ...',
        answers: 'Северная Ирландия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        questions:
          'В грамматике этой страны все существительные должны писаться с большой буквы. Назовите страну.',
        answers: 'Германия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        questions: 'Что в море является ориентиром для моряка?',
        answers: 'Полярная звезда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        questions: 'Без чего скакал именитый всадник Томаса Рида?',
        answers: 'Без головы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        questions: 'Именно этого сыщика сыграл Джим Керри. Какого?',
        answers: 'Эйс Вентура',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        questions: 'Назовите планету-родину Супермена.',
        answers: 'Криптон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        questions: 'Имя киногероя Аль Пачино в «Крёстном отце» было ...',
        answers: 'Майкл',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        questions:
          'Какой город наводнен призраками в «Охотниках за привидениями»?',
        answers: 'Нью-Йорк',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        questions: 'Какой цвет присутствует почти в каждом кадре «Сияния»?',
        answers: 'Красный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions: 'Каждый человек уносит это, если сейчас будет опасность. Что?',
        answers: 'Ноги',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions: 'Чаще всего ухажёры делают на это ставку. На что?',
        answers: 'комплименты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions: 'Назовите сказку, где была битва за урожай.',
        answers: 'Репка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions: 'Если увидели зелёного человечка, то должны ...',
        answers: 'Перейти дорогу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions:
          'Какое слово всегда пишется неправильно?',
        answers: 'неправильно',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions: 'Вы увидите это даже с закрытыми глазами. Что?',
        answers: 'сон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({ truncate: { cascade: true } });
  },
};
