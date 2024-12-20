async function sendJsonData() {
  const url: string = "/testApi"; // 使用代理的路徑
  const data = {
    name: "sauyu",
    age: 26,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      displayResponse(jsonResponse);
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayResponse(response: any) {
  const responseElement = document.getElementById("response");
  if (responseElement) {
    responseElement.textContent = JSON.stringify(response, null, 2);
  }
}

// 當頁面加載完成後，發送 AJAX 請求
window.onload = function () {
  sendJsonData();
};

console.log("進入第二版系統");
