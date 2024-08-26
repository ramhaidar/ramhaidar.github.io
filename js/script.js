function askForName() {
    let name = prompt("Please enter your name:");
    let welcomeMessage = document.getElementById("welcomeMessage");

    welcomeMessage.textContent = name
        ? `Hi ${name}, Welcome To The Website`
        : "Hi, Welcome To The Website";
}

function updateTime() {
    let currentTimeElement = document.getElementById("currentTime");
    let currentDate = new Date();

    currentTimeElement.textContent = currentDate.toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    });
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Nama harus diisi.");
        return false;
    }
    if (date === "") {
        alert("Tanggal Lahir harus diisi.");
        return false;
    }
    if (!gender) {
        alert("Jenis Kelamin harus dipilih.");
        return false;
    }
    if (message === "") {
        alert("Pesan harus diisi.");
        return false;
    }

    let formOutput = `
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${date}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender.value === "male" ? "Laki-Laki" : "Perempuan"
        }</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;

    document.getElementById("formOutput").innerHTML = formOutput;
    return false;
}

window.onload = function () {
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        askForName();
        updateTime();
        setInterval(updateTime, 1000);
    }
};
