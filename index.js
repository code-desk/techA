const options = [
  {
    label: 'x + 2',
    func: (x) => x + 2,
  },
  {
    label: 'x^2',
    func: (x) => x**2,
  }
]

options.forEach(option => {
  console.log({
    label: option.label, 
    func: option.func(5)
  });
})