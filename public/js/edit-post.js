async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;
    const id = document.querySelector('form').getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);