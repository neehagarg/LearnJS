function showMessage() {
    alert("Welcome to Neeha Family House!");
}

fetch("data/rooms.json")
    .then(response => {
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        return response.json();
    })
    .then(data => {
        let html = "";
        data.forEach(room => {
            html += `
            <div>
                <h3>${room.type}</h3>
                <p>Rent: ₹${room.price}</p>
                <p>
                    ${room.available ? "Available" : "Not Available"}
                </p>
            </div>
        `;
        });
        document.getElementById("rooms").innerHTML = html;
    })
    .catch(err => {
        console.error("Failed to load rooms.json:", err);
        document.getElementById("rooms").innerHTML = "<p>Could not load room data.</p>";
    });