window.onload=function(){!function(){let e=new XMLHttpRequest;e.open("POST","http://localhost:3310/user",!0),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&(200===e.status?function(e){let t=document.getElementById("response");t&&(t.textContent=JSON.stringify(e,null,2))}(JSON.parse(e.responseText)):console.error("Error:",e.statusText))},e.send(JSON.stringify({name:"sauyu",age:26}))}()};
//# sourceMappingURL=index.43a0ddeb.js.map
