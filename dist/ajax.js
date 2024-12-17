"use strict";
function sendJsonData() {
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:3310/user"; // 替換為你的後端 API URL
    const data = {
        name: "sauyu",
        age: 26
    };
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                displayResponse(response);
            }
            else {
                console.error("Error:", xhr.statusText);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}
function displayResponse(response) {
    const responseElement = document.getElementById("response");
    if (responseElement) {
        responseElement.textContent = JSON.stringify(response, null, 2);
    }
}
// 當頁面加載完成後，發送 AJAX 請求
window.onload = function () {
    sendJsonData();
};
