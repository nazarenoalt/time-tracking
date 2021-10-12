import fetchData from "./fetchData.js";

const dailyButton = document.querySelector('#daily'),
      weeklyButton = document.querySelector('#weekly'),
      monthlyButton = document.querySelector('#monthly');


const changeTimeFrame = (elements) => {
  elements.forEach(element => {
    element.addEventListener('click', () => {
      fetchData(element.id);
      const activeList = document.querySelector('.active-listItem');
      if(activeList) {
        activeList.classList.remove('active-listItem');
        element.classList.add('active-listItem');
      }
      
    })
  })
}

changeTimeFrame([dailyButton, weeklyButton, monthlyButton])
