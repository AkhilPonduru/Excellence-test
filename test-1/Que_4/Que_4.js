var get = document.getElementById("btn")
var parent = document.getElementById("container")


var data=[]
        function loadsome(){
            var xhr=new XMLHttpRequest()
            var url="https://http://www.example.com/api/get/1"
            xhr.open("GET",url)
            xhr.send()

            xhr.onload=function(){
                data=JSON.parse(this.responseText)
                console.log(data)
                var html=""
                for(i in data){
                    html += `
                                <div class="arrange">

                                </div>
                            `
                    parent.innerHTML=html
                }
            }
        }
        get.addEventListener("click",loadsome)