const f2 = () => {
  return [
    (x) => x + 2,
    (y) => y * 2,
  ];
}

const [ff1, ff2] = f2();
console.log(ff1(1));
console.log(ff2(2));
