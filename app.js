

// const shashankSelectorBtn = document.querySelector('#shashank-selector')
// const teenSelectorBtn = document.querySelector('#teen-selector')
// const chatHeader = document.querySelector('.chat-header')
// const chatMessages = document.querySelector('.chat-messages')
// const chatInputForm = document.querySelector('.chat-input-form')
// const chatInput = document.querySelector('.chat-input')
// const clearChatBtn = document.querySelector('.clear-chat-button')

// const messages = JSON.parse(localStorage.getItem('messages')) || []
// //  message that we are going to send.
// const CreatechatMessageElement = (message) => `
//    <div class="message ${message.sender === 'shashank' ? 'blue-bg' : 'gray-bg'}">
//      <div class="message-sender">${message.sender}</div>
//      <div class="message-text">${message.text}</div>
//      <div class="message-timestamp">${message.timestamp}</div>
//    </div>
//  `

// window.onload = () => {
//   messages.forEach((message) => {
//     chatMessages.innerHTML += CreatechatMessageElement(message)
//   })
// }

// let messageSender = 'shashank'

// const updateMessageSender = (name) => {
//   messageSender = name
//   chatHeader.innerText = `${messageSender} chatting...`
//   chatInput.placeholder = `Type here, ${messageSender}...`

//   if (name === 'shashank') {
//     shashankSelectorBtn.classList.add('active-person')
//     teenSelectorBtn.classList.remove('active-person')
//   }
//   if (name === 'teen') {
//     teenSelectorBtn.classList.add('active-person')
//     shashankSelectorBtn.classList.remove('active-person')
//   }

//   /* auto-focus the input field */
//   chatInput.focus()
// }

// shashankSelectorBtn.onclick = () => updateMessageSender('shashank')
// teenSelectorBtn.onclick = () => updateMessageSender('teen')
// //  remains upper portion

// const sendMessage = (e) => {
//   e.preventDefault()

//   const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//   const message = {
//     sender: messageSender,
//     text: chatInput.value,
//     timestamp,
//   }

//   /* Save message to local storage */
//   messages.push(message)
//   localStorage.setItem('messages', JSON.stringify(messages))
//   // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

//   /* Add message to DOM */
//   chatMessages.innerHTML += CreatechatMessageElement(message)

//   /* Clear input field */
//   chatInputForm.reset()

//   /*  Scroll to bottom of chat messages */
//   chatMessages.scrollTop = chatMessages.scrollHeight
// }

// chatInputForm.addEventListener('submit', sendMessage)

// clearChatBtn.addEventListener('click', () => {
//   localStorage.clear()
//   chatMessages.innerHTML = ''
// })<!DOCTYPE html>

        const shashankSelectorBtn = document.querySelector('#shashank-selector')
        const teenSelectorBtn = document.querySelector('#teen-selector')
        const chatHeader = document.querySelector('.chat-header')
        const chatMessages = document.querySelector('.chat-messages')
        const chatInputForm = document.querySelector('.chat-input-form')
        const chatInput = document.querySelector('.chat-input')
        const clearChatBtn = document.querySelector('#clear-chat-button')


        const messages = JSON.parse(localStorage.getItem('messages')) || []

        const CreatechatMessageElement = (message) => `
            <div class="message ${message.sender === 'shashank' ? 'blue-bg' : 'gray-bg'}">
                <div class="message-sender">${message.sender}</div>
                <div class="message-text">${message.text}</div>
                <div class="message-timestamp">${message.timestamp}</div>
            </div>
        `

        window.onload = () => {
            messages.forEach((message) => {
                chatMessages.innerHTML += CreatechatMessageElement(message)
            })
        }

        let messageSender = 'shashank'

        const updateMessageSender = (name) => {
            messageSender = name
            chatHeader.innerText = `${messageSender} chatting...`
            chatInput.placeholder = `Type here, ${messageSender}...`

            if (name === 'shashank') {
                shashankSelectorBtn.classList.add('active-person')
                teenSelectorBtn.classList.remove('active-person')
            }
            if (name === 'teen') {
                teenSelectorBtn.classList.add('active-person')
                shashankSelectorBtn.classList.remove('active-person')
            }

            chatInput.focus()
        }

        shashankSelectorBtn.onclick = () => updateMessageSender('shashank')
        teenSelectorBtn.onclick = () => updateMessageSender('teen')

        const sendMessage = (e) => {
            e.preventDefault()

            const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            const message = {
                sender: messageSender,
                text: chatInput.value,
                timestamp,
            }

            messages.push(message)
            localStorage.setItem('messages', JSON.stringify(messages))

            chatMessages.innerHTML += CreatechatMessageElement(message)

            chatInputForm.reset()
            chatMessages.scrollTop = chatMessages.scrollHeight
        }

        chatInputForm.addEventListener('submit', sendMessage)

       
        clearChatBtn.addEventListener('click', () => {
          localStorage.clear()
          chatMessages.innerHTML = ''
        })
        
  