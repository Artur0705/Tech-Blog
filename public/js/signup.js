async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/register', {
            method: 'post',
            body: JSON.stringify({
                name,
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#form-register').addEventListener('submit', signupFormHandler);