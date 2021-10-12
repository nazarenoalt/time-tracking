const timePanels = document.querySelectorAll('time-panel')

const fetchData = (frame) => {
  fetch('../../data.json')
  .then(data => data.json())
  .then(data => {
    data.forEach(panel => {
      const timePanel = document.createElement('time-panel');
      const container = document.querySelector('#general-panel');
      timePanel.setAttribute('area', panel.title);
      timePanel.setAttribute('time', panel.timeframes[frame].current);
      timePanel.setAttribute('previous-date', panel.timeframes[frame].previous);
      container.append(timePanel);
    })
  });
}

/*
  ISSUE:
    If I fetch all this data the component won't be updated, but will be added bew set of components. 
    My next task is to solve this so the components can be correctly updated
*/
fetchData('weekly')