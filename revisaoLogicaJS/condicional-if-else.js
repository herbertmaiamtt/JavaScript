let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

if(comprouBilhete){
    console.log("Sim, comprou o bilhete")
}else{
    console.log("Não, não comprou o bilhete")
}
