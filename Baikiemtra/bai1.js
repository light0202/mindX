
function timSoNguyenTo (a) {
    
     for (let i=2; i<a; i++) {
        if ( a%i === 0) return false
        
    
    }return true
   
    
} 

 


function tongSoNguyenTo (a,b) {
    a= Number(a)
    b= Number(b)
    let tong=0
    for (let i=a; i<=b; i++) {
        if (i===2 || i===3 || timSoNguyenTo(i)) {
            tong +=i
            

        }

    }
    console.log(tong)
    result.innerHTML=`<strong>Kết quả:</strong>${tong}`
    
}

function checkInput(a,b) {
   
    if (isNaN(a) || isNaN (b)){
        alert ("Vui lòng nhập số")
        return false
    } else if (a>=b){
        alert ("a<b")
        return false
    }
    return true
}


const a = document.getElementById ('numberA')
const b = document.getElementById ('numberB')
const btn = document.getElementById ('btn_tinh')
const result=document.getElementById('result')




btn.onclick = () => {
    checkInput(a.value , b.value)
    tongSoNguyenTo(a.value , b.value)
    
     
    

    
}