const triggerEmail = require('../config/nodemailer');

const taskCreated = (task) => {

  const message = {
    from: '"RedCarrots" <dev@redcarrots.be>',
    to: '"Ruben" <ruben@redcarrots.be>, "RedCarrots" <dev@redcarrots.be>',
    subject: 'New task created',
    html: `<p>Hi,</p>
      <p>A new task has been created!</p>
      <p><span><b>Title:</b></span> ${task.title}</p>
      <p><span><b>Requester:</b></span> ${task.requester}</p>
      <p><span><b>Type:</b></span> ${task.type}</p>
      <p><span><b>Description:</b></span> ${task.description}</p>
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
      <p>Thanks!</p>
      <p>RedCarrots team</p>
    `
  }
  triggerEmail(message)
}

module.exports = {
  taskCreated,
  taskAssigned,
  taskFinished
}
