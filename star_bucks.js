let  BigCup= document.querySelector("#img");
let cupImg= document.querySelectorAll('li img');

cupImg.forEach((cup)=>
{
    cup.addEventListener("click",()=>{
        let cupname=cup.getAttribute(
            "src"
        );

        change_cup(cupname);
    })
})
function change_cup(cup){
    BigCup.children[0].src = cup;
}