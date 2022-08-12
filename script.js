function btnClickHandeler() {
    var xhr = new XMLHttpRequest()
    console.log(xhr);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            console.log(this.responseText);
            var dataObject = JSON.parse(data)
            for (var i = 0; i < dataObject.length; i++) {
                var tr = document.createElement("tr")
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                td1.innerHTML = dataObject[i].name;
                td2.innerHTML = dataObject[i].phone;
                td3.innerHTML = dataObject[i].email;
                td4.innerHTML = dataObject[i].username;
                td5.innerHTML = dataObject[i].address.city;
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                document.getElementById("test").appendChild(tr);
            }

        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
    xhr.send();
}