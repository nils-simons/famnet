

async function loadClients() {
    const resp = await fetch('/api/clients')

    data = await resp.json()
    console.log(data)

    document.getElementById('clients').innerHTML = `
    <tr>
        <th>Name</th>
        <th>IP</th>
        <th>MAC</th>
        <th>Online</th>
        <th>Last Seen</th>
        <th>Actions</th>
    </tr>
    `

    for (let i = 0; i < data.data.length; i++) {
        const client = data.data[i];
        document.getElementById('clients').innerHTML += `
            <tr>
                <td>${client.name}</td>
                <td>${client.ip}</td>
                <td>${client.mac}</td>
                <td>${client.connected}</td>
                <td>${client.last_time_connected}</td>
                <td>
                    <button onclick="deleteClient('${client.ip}')">DELETE</button>
                </td>
            </tr>
        `
    }
}

loadClients()



document.getElementById('add-btn').addEventListener('click', async (e) => {
    e.target.innerHTML = '...'
    var resp = await fetch('/api/client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('add-name').value,
            ip: document.getElementById('add-ip').value,
        })
    })

    if (resp.ok) {
        window.location.reload()
        return
    }

    alert('error')
})

async function deleteClient(ip) {
    var resp = await fetch('/api/client', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ip: ip,
        })
    })

    if (resp.ok) {
        window.location.reload()
        return
    }

    alert('error')
}