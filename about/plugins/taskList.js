// const USER_ID = parseInt(Math.random() * 1000)
function generateTime() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();
  let timeString = '' + hours;
  timeString += (minutes < 10 ? ':0' : ':') + minutes;
  timeString += (seconds < 10 ? ':0' : ':') + seconds;

  return timeString
}

const mockData = [
  {
    time: generateTime(),
    type: 'system',
    // label: '欢迎光临',
    message: 'Thanks for your visiting, here is my resume, let me introduce myself first.'
  },
  { time: generateTime(), type: 'info', label: 'ChineseName', message: '许艺彬' },
  { time: generateTime(), type: 'info', label: 'EnglishName', message: 'jieny' },
  { time: generateTime(), type: 'info', label: 'Sex', message: 'Male' },
  { time: generateTime(), type: 'warning', label: 'Age', message: '27（1992）' },
  { time: generateTime(), type: 'success', label: 'School', message: 'GuangZhou University（广州大学）' },
  {
    time: generateTime(),
    type: 'error',
    label: 'Experence',
    message: {
      text: 'Here is my work experence:',
      list: [
        {
          // type: 'info',
          // label: '1947-1951', // 自动会加个冒号
          message: '2016-2017 SZ'
        },
        { message: '2017-2018 DB' },
        { message: '2018-2019 PA' }
      ]
    }
  }
];

const taskList = {
  echo: {
    description: 'Echoes input',
    echo(pushToList, input) {
      input = input.split(' ')
      input.splice(0, 1)
      const p = new Promise(resolve => {
        pushToList({ time: generateTime(), label: 'Echo', type: 'success', message: input.join(' ') });
        resolve({ type: 'success', label: '', message: '' })
      })
      return p
    }
  },
  defaultTask: {
    description: 'this is default task.',
    defaultTask(pushToList) {
      let i = 0;
      const p = new Promise(resolve => {
        const interval = setInterval(() => {
          mockData[i].time = generateTime()
          pushToList(mockData[i]);
          i++
          if (!mockData[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Done', message: 'My self introduction is over!' })
          }
        }, 100);
      })
      return p
    }
  },
  open: {
    description: 'Open a specified url in a new tab.',
    open(pushToList, input) {
      const p = new Promise((resolve, reject) => {
        let url = input.split(' ')[1]
        if (!url) {
          reject({ type: 'error', label: 'Error', message: 'a url is required!' })
          return
        }
        pushToList({ type: 'success', label: 'Success', message: 'Opening' })

        if (input.split(' ')[1].indexOf('http') === -1) {
          url = 'http://' + input.split(' ')[1]
        }
        window.open(url, '_blank')
        resolve({ type: 'success', label: 'Done', message: 'Page Opened!' })
      })
      return p;
    }
  }

}
