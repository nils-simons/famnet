

async function loadStatus() {
    const resp = await fetch('/api/status');
    const data = await resp.json();
    console.log(data);

    document.getElementById('toggle').checked = data.data.enabled
}

loadStatus();


async function toggle() {
    const resp = await fetch('/api/status/toggle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    loadStatus()
}