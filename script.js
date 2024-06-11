// ******* creattion des proposition mot et phrase ------------

    let Mot = ["manger","parler","venir"]
    let phrase = ["manger du riz", "parler le français", "venir du marché"]

    //***declaration de variable ****** */

    let score = 0
    let listmot = Mot
    let i = 0 
    
    //console.log(listMot)

function afficheScore(Lescore,Nombre_passage){
    let affichage = document.querySelector(".zoneScore span")
    affichage.innerText = `${Lescore} / ${Nombre_passage}`
}
function afficheMot(proposition){
    let P_proposition = document.querySelector(".zoneProposition p")
    P_proposition.innerHTML = proposition

}


    let mot_phrase = document.getElementById("inputEcriture")
    let bouton =  document.getElementById("btnValiderMot")

    bouton.addEventListener("click",()=>{
        if(mot_phrase.value === listmot[i] ){
            score++
        }
        i++
        afficheScore(score,i)
        mot_phrase.value = ""
        if(listmot[i] === undefined){
            afficheMot("le jeux est terminer")
            bouton.disabled = true
        }else{
            afficheMot(listmot[i])
        }

    })
    

let radio = document.querySelectorAll(".optionSource input")
for(let a = 0 ; a < radio.length; a++){ 
    radio[a].addEventListener("change",(event)=>{
        if(radio[a].checked){
            let x = event.target.value  
            if(x === "1"){
                listmot = Mot
                afficheMot(listmot[i])
        }else{
            listmot = phrase
                afficheMot(listmot[i])
        }
        }        
        
    }
)
}















































// //*****cree la function qui traite le proposition*** */
// function Tproposition(Mot_Phrase){

// }

// //*****cree la function qui traite la validation des  proposition*** */





// // *******selectionné optionSource********************
// let radio = document.querySelectorAll(".optionSource input")
// for(let a = 0 ; a < radio.length; a++){ 
//     radio[a].addEventListener("change",(event)=>{
//         if(radio[a].checked){
//             let x = event.target.value  
//             if(x === "1"){
//             console.log(PropositionTexte[0])
//         }else{
//             console.log(PropositionTexte[1])
//         }
//         }        
        
//     }
// )
// }

// // bouton de validation ***************
// let bouton = document.getElementById("btnValiderMot")
// bouton.addEventListener("click",()=>{
//     let ecriture = document.getElementById("inputEcriture")
//     console.log(ecriture.value)

// })


