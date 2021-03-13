var obj =[
    {id : 4, name : "abc"},
    {id : 10, name : "ab2"},
    {id : 5, name : "abc3"},
    {id : 6, name : "abc5"}
]

var temp = 0

   for(var i=0;i<obj.length;i++){
       for(var j=i+1;j<obj.length;j++){
           if(obj[i].id > obj[j].id){
                temp = obj[i].id
                obj[i].id = obj[j].id
                obj[j].id = temp
           }
       }
   }

   console.log(obj)