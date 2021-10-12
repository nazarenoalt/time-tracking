const timePanels = document.querySelectorAll('time-panel')

const fetchData = (frame) => {
  fetch('../../data.json')
  .then(data => data.json())
  .then(data => {
    data.forEach(panel => {
      const existingPanel = document.getElementById(panel.title);
      if(existingPanel) {
        existingPanel.setAttribute('time', panel.timeframes[frame].current);
        existingPanel.setAttribute('previous-date', panel.timeframes[frame].previous);
      } else {
        const timePanel = document.createElement('time-panel');
        const container = document.querySelector('#general-panel');
        timePanel.setAttribute('area', panel.title);
        timePanel.setAttribute('time', panel.timeframes[frame].current);
        timePanel.setAttribute('previous-date', panel.timeframes[frame].previous);
        timePanel.setAttribute('id', panel.title);
        container.append(timePanel);
      }
      
      
    })
  });
}

fetchData('weekly')

export default fetchData;