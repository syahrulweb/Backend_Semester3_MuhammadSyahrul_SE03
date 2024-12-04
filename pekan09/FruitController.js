/**
 * TODO 3:
 * - Import fruits dari data/fruits.js
 * - Refactor variabel ke ES6 variable
 */

const fruits = require("./fruits");

/**
 * TODO 4: Buat method index
 * TODO 5: Buat method store
 * TODO 6: Buat method update
 * TODO 7: Buat method destroy
 */

const index = () => {
  console.log("Method index - Menampilkan Buah");
  fruits.forEach((fruit) => console.log(fruit));
};

const store = (name) => {
  fruits.push(name);
  console.log(`Method store - Menambahkan buah ${name}`);
  console.log(fruits.join("\n"));
};

const update = (position, name) => {
  if (position >= 0 && position < fruits.length) {
    fruits[position] = name;
    console.log(`Method update - Update data ${position} menjadi ${name}`);
    console.log(fruits.join("\n"));
  } else {
    console.log("Invalid position");
  }
};

const destroy = (position) => {
  if (position >= 0 && position < fruits.length) {
    fruits.splice(position, 1);
    console.log(`Method destroy - Menghapus data ${position}`);
    console.log(fruits.join("\n"));
  } else {
    console.log("Invalid position");
  }
};

/**
 * TODO 8: export semua method
 */
module.exports = { index, store, update, destroy };
