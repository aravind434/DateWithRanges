
    window.onload = ()=>{
        var startDate = document.getElementById("start_date");
        var endDate = document.getElementById("end_date");

        startDate.onchange = ()=>{
            endDate.min = startDate.value;
            endDate.disabled = false;
        }
        endDate.onchange = ()=>{
            startDate.max = endDate.value;
        }

        // setting current date to start date picker.
        var currentDate = new Date();
        var dd = (currentDate.getDate()).toString().padStart(2, '0');
        var mm = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // January starts from 0, so added with 1
        var yyyy = currentDate.getFullYear();
        currentDate = yyyy + '-' + mm + '-' + dd;
        startDate.min = currentDate;
    }