document.querySelector('.head__item2__inp').oninput = function(){
    let mov = document.querySelectorAll('li')
    if(val == ''){
        mov.forEach((elem) => {
            if(elem.innerText.search(val)==-1){
                elem.clasList.add('none')
            }
            else{
                elem.clasList.remove('none')
            }
        });
    }

}
/////////////////////////////////////////////////////
//////////////////////////
////////////////////
////////////////
//////////
//////
////
let link = document.querySelector('.listt')
let newsic = document.createElement('li')
newsic.innerHTML = '<a class="listnew" href="https://hydramovies.com/wp-content/uploads/2018/04/New-York-Doll-Movie-Poster.jpg">New York Doll</a>'
link.appendChild(newsic)
let h1 = document.createElement('h1')
h1.innerHTML = 'Stranger Things'
h1.classList.add('h11')
link.appendChild(h1)
// .ATTRIBUTE_NODE.toExponential............\
/////////////////////////////
