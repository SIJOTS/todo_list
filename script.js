$(document).ready(function () {
    ajax();

    function ajax() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                var output = "";
                for (var i = 0; i < response.length; i++) {
                    output +=
                        `<tr id="row${i}">
                    <th scope="row"> 
                    <input class="form-check-input box" type="checkbox" ${response[i].completed ? "checked disabled='true'" : ""} value="" id="flexCheckDefault">
                    </th>
                    <td>${response[i].title} </td>
                </tr> `

                }
                document.getElementById("demo").innerHTML = output;
            }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
    }

    var checkboxes = $("input:checkbox:checked").length;
    console.log("number of checked", checkboxes)

    $("#demo").on("click", "input.box", function (row) {

        var checkboxes = $("input:checkbox:checked").length;
        if (checkboxes == 95) {
            setTimeout(() => { alert("Congrats. 5 Tasks  Completed") }, 100);
        }

    });





});