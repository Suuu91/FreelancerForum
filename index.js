const names = [`Alice`, `Jacob`,`David`,`Emily`,`Irene`,`Alex`,`Kelly`]
setInterval(() => {
  const ul = document.querySelector(`#names`)
  const li = document.createElement(`li`)
  const index = Math.floor(Math.random()*names.length)
  li.innerText = names[index]
  ul.append(li)
}, 3000)

const occupations = [`Writer`,`Pharmacist`,`Teacher`,`Engineer`,`Doctor`,`Architect`,`Web Developer`]
setInterval(() => {
  const ul = document.querySelector(`#occupations`)
  const li = document.createElement(`li`)
  const index = Math.floor(Math.random()*occupations.length)
  li.innerText = occupations[index]
  ul.append(li)
}, 3000)

const priceArray = [30,50]
setInterval(() => {
  const ul = document.querySelector(`#prices`)
  const li = document.createElement(`li`)
  const wage = Math.ceil(Math.random()*100)
  li.innerText = `$${wage}`
  priceArray.push(wage)
  ul.append(li)
}, 3000);

setInterval(() => {
  const h2 = document.querySelector(`h2`)
  const averageSalary = Math.ceil(priceArray.reduce((acc,wage) => {
  return acc + wage
  },0) / priceArray.length)
  h2.innerText = `The average starting price is $${averageSalary}`
},3000)