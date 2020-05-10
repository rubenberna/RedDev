const triggerEmail = require('../config/nodemailer');

const taskCreated = (task) => {
  const message = {
    from: '"RedCarrots" <dev@redcarrots.be>',
    to: '"Davy" <davy@redcarrots.be>, "RedCarrots" <dev@redcarrots.be>',
    subject: 'New task created',
    html: `<p>Hi,</p>
      <p>A new task has been created!</p>
      <p><span><b>Title:</b></span> ${task.title}</p>
      <p><span><b>Requester:</b></span> ${task.requester}</p>
      <p><span><b>Type:</b></span> ${task.type}</p>
      <p><span><b>Description:</b></span> ${task.description}</p>
      <p>Check our <a href="http://team.redcarrots.be/ongoing" target="_blank">ongoing projects</a>.</p>
      <p>Please use the 'Message' tab inside the task details to communicate.</p>
      <p>Thanks!</p>
      <p>RedCarrots team</p>
    `
  }
  triggerEmail(message)
}

const taskAssigned = (taskObj) => {

  const message = {
    from: '"RedCarrots" <dev@redcarrots.be>',
    to: `<${taskObj.task.requester}>, <${taskObj.dev}@redcarrots.be>`,
    subject: 'Task assigned',
    html: `<p>Hi,</p>
      <p>Your task has been assigned to: ${taskObj.dev}</p>
      <p><span><b>Title:</b></span> ${taskObj.task.title}</p>
      <p><span><b>Requester:</b></span> ${taskObj.task.requester}</p>
      <p><span><b>Type:</b></span> ${taskObj.task.type}</p>
      <p><span><b>Description:</b></span> ${taskObj.task.description}</p>
      <p>We'll get it done as soon as possible!</p>
      <p>Check our <a href="http://team.redcarrots.be/ongoing" target="_blank">ongoing projects</a>.</p>
      <p>Please use the 'Message' tab inside the task details to communicate.</p>
      <p>RedCarrots team</p>
    `
  }
  triggerEmail(message)
}

const taskFinished = (task) => {

  const message = {
    from: '"RedCarrots" <dev@redcarrots.be>',
    to: `<${task.requester}>`,
    subject: 'Task completed',
    html: `<p>Hi,</p>
      <p>Your task has been completed!</p>
      <p><span><b>Title:</b></span> ${task.title}</p>
      <p><span><b>Developer:</b></span> ${task.dev}</p>
      <p><span><b>Type:</b></span> ${task.type}</p>
      <p><span><b>Description:</b></span> ${task.description}</p>
      <p>Check our <a href="http://team.redcarrots.be/ongoing" target="_blank">ongoing projects</a>.</p>
      <p>Please use the 'Message' tab inside the task details to communicate.</p>
      <p>Thanks!</p>
      <p>RedCarrots team</p>
    `
  }
  triggerEmail(message)
}

const poke = (task) => {

  const message = {
    from: '"RedCarrots" <dev@redcarrots.be>',
    to: `<${task.dev}@redcarrots.be>`,
    subject: "You've been poked!",
    html: `<p>Hi ${task.dev},</p>
      <p>The requester ${task.requester} is looking for a conclusion on the task:</p>
      <h4>${task.title}</h4>
      <p>Could you please have a look and provide an update?</p>
      <p>Please use the 'Message' tab inside the task details to communicate.</p>
      <p>Thanks!</p>
      <p>RedCarrots team</p>
    `
  }
  triggerEmail(message)
}

const sendMsg = (msg) => {

  let attach
  if (msg.files) {
    attach = [
      {
        filename: msg.files.file.name,
        content: msg.files.file.data
      }
    ]
  } else attach = null

  const message = {
    from: '"RedCarrots" <dev@redcarrots.be>',
    to: `<${msg.body.to}>`,
    attachments: attach,
    subject: `New msg from ${msg.body.from}` ,
    html: `<p>Hi,</p>
      <p>There's a new msg from ${msg.body.from} regarding the task: <h4>${msg.body.title}</h4></p>
      <p>Message:</p>
      <p><i>${msg.body.msg}</i></p>
      <p>Check our <a href="http://team.redcarrots.be/ongoing" target="_blank">ongoing projects</a>.</p>
      <p>Please use the 'Message' tab inside the task details to communicate.</p>
      <p>Thanks!</p>
      <p>RedCarrots team</p>
    `
  }
  triggerEmail(message)
}

module.exports = {
  taskCreated,
  taskAssigned,
  taskFinished,
  poke,
  sendMsg
}
