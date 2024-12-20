參考網站：https://ithelp.ithome.com.tw/articles/10240749

## 專案目的
建立一個express簡單前後端範例，目前已經可以成功讓前端吃到後端api，並透過parcel套件解決瀏覽器同源政策問題。

## 待解決問題
1. parcel目前會有cache讀取問題，本專案放在d槽，但parcel緩存檔會在c曹自行建立，目前雖然在「 --cache-dir」中把緩存指定到c槽，但是發現parcel不會根據使用者檔案修改後自動修改檔案，每一次啟動parcel時，還是需要先刪除「dist」資料夾裡面的內容，並重新執行build以及start功能。
2. 建議之後可以使用web-pack打包工具，或者是執行專案時不要放在d曹。