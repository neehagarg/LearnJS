function showMessage() {
    alert("Welcome to Neeha Family House!");
}

fetch("../data/rooms.json")
.then(response => response.json())
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

});