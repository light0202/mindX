
const a=document.getElementById("Number")
const sumit=document.getElementById("sumit")
const newWindow= window.open()

function numberOneTriangle(a) {
    
    const newWindow= window.open()
    for (let i = 1; i <= a; i++) {
        
            for (let j =1; j<=i;j++) {
                newWindow.document.write("*")
                
            }
            newWindow.document.write("<br />")
        }
        
    }

    function checkInput(a) {
   
        if (isNaN(a) ){
            alert ("Vui lòng nhập số")
            return false
        } else if (a>10 ||a<1){
            alert ("Vui lòng nhập số từ 1-10")
            return false
        }
        return true
    }



sumit.onclick = ()=> {
    checkInput(a.value)
    if(checkInput(a.value)){
    numberOneTriangle(a.value)}
}

