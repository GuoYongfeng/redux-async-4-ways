const people = [
  { name: '郭永峰', age: 27 },
  { name: '郭琼云', age: 28 },
  { name: '郭靖', age: 30 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}
