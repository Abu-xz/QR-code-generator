let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");

let btn = document.getElementById("btn");

btn.onclick = function () {
    if (qrText.value == "") {
        qrText.classList.add("shake");
        setTimeout(() => {
            qrText.classList.remove("shake");
        }, 1000);
    } else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value} `;
    }
};
