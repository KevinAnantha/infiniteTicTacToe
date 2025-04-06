let turn = "silang"
let dataLingkaran = []
let dataSilang = []
let win = false

document.getElementById('turn').innerText = `Giliran : ${turn}`

function main(x, y){

    if(win){
        return
    }

    let hurufX = x.toString()
    let hurufY = y.toString()

    let idTarget = hurufX + hurufY

    if(dataSilang.length > 0 && turn == "silang"){
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
    }else if(dataLingkaran.length > 0 && turn == "lingkaran"){
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
    targetDiv.classList.add(turn)

    if(turn == "silang"){
        if(dataSilang.length === 3){
            let targetHapus = dataSilang[0]
            document.getElementById(targetHapus).classList.remove(turn)
            document.getElementById(targetHapus).style.opacity = "1"
            dataSilang.shift()
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataSilang[0]
            document.getElementById(idFade).style.opacity = "0.5"
        }else if(dataSilang.length === 2){
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataSilang[0]
            document.getElementById(idFade).style.opacity = "0.5"
            targetDiv.classList.add(turn)
        }else{
            dataSilang.push(idTarget)
            if(winning()){
                return
            }
            targetDiv.classList.add(turn)
        }

    }else{
        if(dataLingkaran.length === 3){
            let targetHapus = dataLingkaran[0]
            document.getElementById(targetHapus).classList.remove(turn)
            document.getElementById(targetHapus).style.opacity = "1"
            dataLingkaran.shift()
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataLingkaran[0]
            document.getElementById(idFade).style.opacity = "0.5"
        }else if(dataLingkaran.length === 2){
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
            let idFade = dataLingkaran[0]
            document.getElementById(idFade).style.opacity = "0.5"
            targetDiv.classList.add(turn)
        }else{
            dataLingkaran.push(idTarget)
            if(winning()){
                return
            }
            targetDiv.classList.add(turn)
        }

    }

    turn = turn == "silang" ? "lingkaran" : "silang"

    document.getElementById('turn').innerText = `Giliran : ${turn}`


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
            line.add("bg-success")
        });
        return true
    }
}

