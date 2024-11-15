$(document).ready(function(){

    // Fetch All data from Database ========================>
        function loadData(){
            $('#loadTable').html("");
            $.ajax({
                url:'http://localhost/php_api/fetch_all.php',
                type: 'GET',
                success: function(response){
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
                                +"<td class='text-center'><button data-eid='"+value.id+"' class='btn btn-sm btn-warning mx-1'>Edit</button><button id='dltBtn' data-did='"+value.id+"' class='btn btn-sm btn-danger mx-1'>Delete</button></td>"+
                                "</tr>");
                        });
                    }
                }
            });
        }
        loadData();

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
                        $('#insertForm').trigger("reset");
                        alert(response.Message);
                        loadData();
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
                        alert(response.Message);
                        loadData();
                    }
                });
            }
        });

});