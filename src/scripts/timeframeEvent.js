import "./fetchData.js";

const dailyButton = document.querySelector('#daily-button'),
      weeklyButton = document.querySelector('#weekly-button'),
      monthlyButton = document.querySelector('#monthly-button');


const changeTimeFrame = (elements) => {
  elements.forEach(element => {
    element.addEventListener('click', () => {
      console.log(element.getAttribute('id'))
    })
  })
}

changeTimeFrame([dailyButton, weeklyButton, monthlyButton])
