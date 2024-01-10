const book = {
  name: "Lord of the Rings",
  pages: 234,
};

const { name, pages } = book;

console.log(book);
console.log(book.name);
console.log(name);
console.log(pages);

function calculateArea(h, w, d = 3) {
  return h * w * d;
}

const box1 = calculateArea(2, 3);
console.log(box1);
