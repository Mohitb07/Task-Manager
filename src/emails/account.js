const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (name , email) => {
    sgMail.send({
        to: email,
        from : 'bmohit980@gmail.com',
        subject : 'Welcome',
        text : `Welcome to the app ${name}`
    })
}

const sendGoodByeEmail = (name , email) => {
    sgMail.send({
        to: email,
        from : 'bmohit980@gmail.com',
        subject : 'Goodbye',
        text : `Goodbye ${name} thanks for your time.Let us know why u decided to leave`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}