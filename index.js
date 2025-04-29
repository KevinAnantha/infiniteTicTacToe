let turn = "silang"
let dataLingkaran = []
let dataSilang = []
let win = false
let timer_status = false
let countdown;  
let timer_value;

document.getElementById('turn').innerText = `Giliran : ${turn}`

function main(x, y){

    if(timer_status){
        if(countdown){
            clearInterval(countdown);
        }    

    }

    let timer = timer_value;

    if(win){
        return
    }

    let hurufX = x.toString()
    let hurufY = y.toString()

    let idTarget = hurufX + hurufY

    if(dataSilang.length >= 0 && turn == "silang"){
        for(id of dataSilang){
            if(id == idTarget){
                return
            }
        }
        for(id of dataLingkaran){
            if(id == idTarget){
                return
            }
        }
    }else if(dataLingkaran.length >= 0 && turn == "lingkaran"){
        for(id of dataSilang){
            if(id == idTarget){
                return
            }
        }
        for(id of dataLingkaran){
            if(id == idTarget){
                return
            }
        }
    }
    
    // cek apakah sudah terisi
    // looping array data lingkaran dan data silang, apakah ada dalam array tersebut

    let targetDiv = document.getElementById(idTarget)
    targetDiv.classList.add(turn) // add style (simbol) ke koordinat yang sudah dipilih

    if(turn == "silang"){
        if(dataSilang.length === 3){
            let targetHapus = dataSilang[0]
            document.getElementById(targetHapus).classList.remove(turn)
            // document.getElementById(targetHapus).style.opacity = "1"
            document.getElementById(targetHapus).classList.remove("bg-danger")
            document.getElementById(targetHapus).classList.remove("bg-warning")
            dataSilang.shift()
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataSilang[0]
            let idFade2 = dataSilang[1]
            // document.getElementById(idFade).style.opacity = "0.3"
            document.getElementById(idFade).classList.add("bg-danger")
            // document.getElementById(idFade2).style.opacity = "0.5"
            document.getElementById(idFade2).classList.add("bg-warning")
        }else if(dataSilang.length === 2){
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataSilang[0]
            let idFade2 = dataSilang[1]
            // document.getElementById(idFade).style.opacity = "0.3"
            document.getElementById(idFade).classList.add("bg-danger")
            // document.getElementById(idFade2).style.opacity = "0.5"
            document.getElementById(idFade2).classList.add("bg-warning")
        }else if(dataSilang.length === 1){
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataSilang[0]
            document.getElementById(idFade).classList.add("bg-warning")
        }else{
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
        }

    }else{
        if(dataLingkaran.length === 3){
            let targetHapus = dataLingkaran[0]
            document.getElementById(targetHapus).classList.remove(turn)
            // document.getElementById(targetHapus).style.opacity = "1"
            document.getElementById(targetHapus).classList.remove("bg-danger")
            document.getElementById(targetHapus).classList.remove("bg-warning")
            dataLingkaran.shift()
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataLingkaran[0]
            let idFade2 = dataLingkaran[1]
            // document.getElementById(idFade).style.opacity = "0.3"
            document.getElementById(idFade).classList.add("bg-danger")
            // document.getElementById(idFade2).style.opacity = "0.5"
            document.getElementById(idFade2).classList.add("bg-warning")
        }else if(dataLingkaran.length === 2){
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataLingkaran[0]
            let idFade2 = dataLingkaran[1]
            // document.getElementById(idFade).style.opacity = "0.3"
            document.getElementById(idFade).classList.add("bg-danger")
            // document.getElementById(idFade2).style.opacity = "0.5"
            document.getElementById(idFade2).classList.add("bg-warning")
        }else if(dataLingkaran.length === 1){
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataLingkaran[0]
            document.getElementById(idFade).classList.add("bg-warning")
        }else{
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
        }

    }

    if(timer_status){
        countdown = setInterval(()=>{
            document.getElementById("timer").innerText = `timer : ${timer}`;
    
            if(timer <= 0){
                clearInterval(countdown);
                timeout_winning();
            }    

            timer--;

        },1000)
    
    }

    turn = turn == "silang" ? "lingkaran" : "silang"

    document.getElementById('turn').innerText = `Giliran : ${turn}`


}

function set_timer(){
    timer_value = document.getElementById("timer_value").value;   
    document.getElementById("timer").innerText = `Timer value : ${timer_value}s`
    timer_status = true;
}

function winning(){
    let nextTurn = turn == "silang" ? "lingkaran" : "silang"
    let cols = document.getElementsByClassName('col')

    if(turn === "silang"){
        let arraySilang = dataSilang.slice()
        var array = arraySilang.sort()
    }else{
        let arrayLingkaran = dataLingkaran.slice()
        var array = arrayLingkaran.sort()
    }

    let arrayInt = []
    for(x of array){
        arrayInt.push(parseInt(x));
    }

    // console.log(arrayInt[2])
    // return

    if(arrayInt[2] - arrayInt[1] == 1 && arrayInt[1] - arrayInt[0] == 1){
        win = true
    }else if(arrayInt[2] - arrayInt[1] == 10 && arrayInt[1] - arrayInt[0] == 10){
        win = true
    }else if(arrayInt[2] - arrayInt[1] == 9 && arrayInt[1] - arrayInt[0] == 9){
        win = true
    }else if(arrayInt[2] %11 == 0 && arrayInt[1] %11 == 0 && arrayInt[0] %11 == 0){
        win = true
    }

    if(win){
        console.log(`${turn} winning`)
        
        arrayInt.forEach(element => {
            let line = document.getElementById(element).classList
            line.remove("bg-warning")
            line.remove("bg-danger")
            line.add("bg-success")
        });

        let winning = document.getElementById("turn")
        winning.innerHTML = `Winner : ${turn}`
        document.getElementById("timer").innerText = "";
        return true
    }
}

function timeout_winning(){

    let prevTurn = turn == "silang" ? "lingkaran" : "silang";

    if(turn === "silang"){
        dataLingkaran.forEach(element =>{
            let line = document.getElementById(element).classList
            line.remove("bg-warning")
            line.remove("bg-danger")
            line.add("bg-success")
        })
    }else{
        dataSilang.forEach(element =>{
            let line = document.getElementById(element).classList
            line.remove("bg-warning")
            line.remove("bg-danger")
            line.add("bg-success")
        })
    }

    let winning = document.getElementById("turn")
    winning.innerHTML = `Winner : ${prevTurn}`
    document.getElementById("timer").innerText = "";
    return true

}
