var arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,1,0]
var arr_2 = []
var count = 0

for(var i=0;i<arr.length;i++){
    if(arr[i] == 1){
        // count++
        if(arr[i] == arr[i+1]){
            count++
        }
    }else{
        arr_2.push(count+1)
        count=0
    }
}

arr_2.sort()
console.log(arr_2[arr_2.length-1])

// Output : 
// 4