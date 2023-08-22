"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        title: "mancing",
        description:
          "kegiatan lelaki sejati untuk melatih kesabaran dan menunggu dia(ikan)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "belajar",
        description:
          "kegiatan belajar semua bahasa agar dapat memahamimu(programming language) ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "debugging",
        description:
          "kegiatan mencari error agar tidak selalu salah di matamu(vscode)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
