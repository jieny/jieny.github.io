const commandList = {
  contact: {
    description: 'How to contact me',
    messages: [
      { message: 'Email: 576420147@qq.com' },
      { message: 'Github: https://github.com/jieny' },
      { message: 'WeChat: kakalotto' },
      { message: 'Website: undefined' },
    ]
  },
  document: {
    description: 'Document of this project.',
    messages: [
      {
        message: {
          text: 'Under Construction',
          list: [
            // type（可省略）目前支持5个值：info,warning,success,error,system，分别对应5种颜色，用于label字段的高亮
            // label（可省略）可随意赋值，但是不建议太长，影响美观
            // message为必须字段就是纯文本内容
            { type: 'info', label: 'hello', message: 'this is a test message' }
          ]
        }
      }
    ]
  }
}
