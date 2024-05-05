let subs = [];

function handleSubmit(event) {
    event.preventDefault(); 
    console.log(event) 
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    console.log(username)
    console.log(email)
    console.log(message)
    subs.push(username, email, message);
    console.log(subs)
}