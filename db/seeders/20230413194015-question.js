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
        answers: 'Австралия',
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
        answers: 'Комплименты',
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
        answers: 'Неправильно',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 4,
        questions: 'Вы увидите это даже с закрытыми глазами. Что?',
        answers: 'Сон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 5,
        questions: 'На какой вопрос нельзя ответить «да»? ',
        answers: 'Вы спите?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 5,
        questions: 'На какой вопрос нельзя ответить «нет»? ',
        answers: 'Вы живы?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 5,
        questions: 'Почему собака лает?',
        answers: 'Потому что говорить не умеет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 5,
        questions: 'На какие сутки обычно происходит усвоение информации неспешно думающим человеком',
        answers: 'На седьмые',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 5,
        questions:
          'Какой месяц в году имеет 28 дней?',
        answers: 'Каждый месяц',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 5,
        questions: 'Когда человек бывает в комнате без головы?',
        answers: 'Когда высовывает её из окна',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 6,
        questions: 'Мотылек замкнул крылышками контакты. Какое жаргонное слово в программировании появилось по этому случаю?',
        answers: 'Bug',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 6,
        questions: 'Какому устройству дал имя винтовочный патрон американского происхождения?',
        answers: 'HDD/Винчестер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 6,
        questions: 'Работая удаленно, мы всегда остаемся на связи благодаря новейшим технологиям. Какова при этом нагрузка на ИТ-инфраструктуру, не каждый задумывается. Какое количество данных генерирует групповой видеозвонок в Skype на 5 участников?',
        answers: 'Около 2 Гб',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 6,
        questions: 'Что называют тонким клиентом в ИТ-индустрии?',
        answers: 'Компьютер или программу, переносящие задачи по обработке информации на сервер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 6,
        questions:
          'У водителей и администраторов дата-центров есть один общий показатель: они тратят примерно одинаковое время на стояние в пробках и попытки выяснить, что именно не работает в системе. Сколько же времени они на это тратят?',
        answers: '42',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 6,
        questions: 'Какой код ошибки протокола HTTP говорит о том, что ресурс заблокирован по требованию правительственных органов?',
        answers: '451',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({ truncate: { cascade: true } });
  },
};
