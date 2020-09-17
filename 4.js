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
  console.log(option.label, option.func(5));
})