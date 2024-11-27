$(document).ready(function(){

    // Fetch All data from Database ========================>
        function loadData(){
            $('#loadTable').html("");
            $.ajax({
                url:'http://localhost/php_api/fetch_all.php',
                type: 'GET',
                success: function(response){
                    // console.log(response);
                    if(response.status == false){
                        $('#loadTable').append("<tr><td colspan='6'>"+ response.Message +"</td></tr>");
                    }else{
                        $.each(response, function(key,value){
                            $('#loadTable').append("<tr>"
                                +"<td>"+ value.id +"</td>"
                                +"<td>"+ value.uname +"</td>"
                                +"<td>"+ value.mobile +"</td>"
                                +"<td>"+ value.age +"</td>"
                                +"<td>"+ value.city +"</td>"
                                +"<td class='text-center'><button id='editBtn' data-bs-toggle='modal' data-bs-target='#exampleModal' data-eid='"+value.id+"' class='btn btn-sm btn-success mx-1'>Edit</button> <button id='dltBtn' data-did='"+value.id+"' class='btn btn-sm btn-danger mx-1'>Delete</button></td>"+
                                "</tr>");
                        });
                    }
                }
            });
        }
        loadData();

    // Fetch Single data from Database ========================>
        $(document).on('click','#editBtn',function(){
            var user_Id = $(this).attr('data-eid');
            var obj = {uid:user_Id};
            var jsonData = JSON.stringify(obj);
            
            $.ajax({
                url: 'http://localhost/php_api/fetch_single.php',
                type: 'POST',
                data: jsonData,
                success: function(response) {
                    // console.log(response);
                   $('#userId').val(response[0].id);
                   $('#userName').val(response[0].uname);
                   $('#userMobile').val(response[0].mobile);
                   $('#userAge').val(response[0].age);
                   $('#userCity').val(response[0].city);
                }
            });
        });


    // <!-------------- Function for formdata to JSON object ------------->
        function jsonObj(formId){
            var arr = $(formId).serializeArray();
            
                var obj = {};
                for(i=0; i<arr.length; i++) {
                    if(arr[i].value == ""){
                        return false;
                    }
                    obj[arr[i].name] = arr[i].value;
                }
                var jsonData = JSON.stringify(obj);

                return jsonData;
        }

    // Insert data into Database ========================>
        $("#AddData").on("click",function(e){
            e.preventDefault();

            var jsonobject = jsonObj("#insertForm");

            if(jsonobject == false){
                alert('All Fields are Mandatory');
            }else{
                $.ajax({
                    url:'http://localhost/php_api/insert.php',
                    type:'POST',
                    data: jsonobject,
                    success: function(response){
                        // console.log(response);
                        loadData();
                        alert(response.Message);
                        $('#insertForm').trigger("reset");
                    }
                });
            }
        });

    // Update data into Database ========================>
        $("#updateBtn").on("click",function(e){
            e.preventDefault();

            var jsonobject = jsonObj("#userDataForm");

            if(jsonobject == false){
                alert('All Fields are Mandatory');
            }else{
                $.ajax({
                    url:'http://localhost/php_api/update.php',
                    type:'POST',
                    data: jsonobject,
                    success: function(response){
                        // console.log(response);
                        $('.btn-close').click();
                        loadData();
                        alert(response.Message);
                        $('#userDataForm').trigger("reset");
                    }
                });
            }
        });

    // Delete data from Database ========================>
        $(document).on("click", "#dltBtn", function () {
            if(confirm('Are You sure you want to delete ?')){
                var userId = $(this).attr('data-did');
                var obj = { uid: userId };
                var jsonData = JSON.stringify(obj);

                $.ajax({
                    url: 'http://localhost/php_api/delete.php',
                    type: 'POST',
                    data: jsonData,
                    success: function(response){
                        // console.log(response);
                        // alert(response.Message);
                        loadData();
                    }
                });
            }
        });

    // Search data from Database ========================>
        $('#searchInput').on('keyup',function(){
            var searchData = $(this).val();

            var obj = { search: searchData};
            var jsonData = JSON.stringify(obj);
            // console.log(searchData);
            // console.log(jsonData);
            $.ajax({
                url: 'http://localhost/php_api/search.php',
                type: 'POST',
                data: jsonData,
                success: function(response){
                    $('#loadTable').html("");
                    $.each(response, function(key,value){
                        $('#loadTable').append("<tr>"
                            +"<td>"+ value.id +"</td>"
                            +"<td>"+ value.uname +"</td>"
                            +"<td>"+ value.mobile +"</td>"
                            +"<td>"+ value.age +"</td>"
                            +"<td>"+ value.city +"</td>"
                            +"<td class='text-center'><button id='editBtn' data-bs-toggle='modal' data-bs-target='#exampleModal' data-eid='"+value.id+"' class='btn btn-sm btn-success mx-1'>Edit</button> <button id='dltBtn' data-did='"+value.id+"' class='btn btn-sm btn-danger mx-1'>Delete</button></td>"+
                            "</tr>");
                    });
                }
            });
        });

});