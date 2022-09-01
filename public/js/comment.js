async function commentFormHandler(event) {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim();

    const post_id = document.querySelector('form').getAttribute('data-id');

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);