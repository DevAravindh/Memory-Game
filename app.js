const board = document.querySelector('.board');
const wintext = document.querySelector('.win');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>
{
    location.reload();
})
wintext.classList.add('wintext')

const cardList=[
    {names:'html',img:'<img src="images/html.png" alt="">'},
    {names:'css',img:'<img src="images/css.png" alt="">'},
    {names:'java',img:'<img src="images/javascript.png" alt="">'},
    {names:'angular',img:'<img src="images/angular.png" alt="">'},
    {names:'tailwind',img:'<img src="images/tailwind.png" alt="">'},
    {names:'react',img:'<img src="images/react.png" alt="">'},
    {names:'css',img:'<img src="images/css.png" alt="">'},
    {names:'angular',img:'<img src="images/angular.png" alt="">'},
    {names:'tailwind',img:'<img src="images/tailwind.png" alt="">'},
    {names:'java',img:'<img src="images/javascript.png" alt="">'},
    {names:'react',img:'<img src="images/react.png" alt="">'},
    {names:'html',img:'<img src="images/html.png" alt="">'}
]

display();

cardList.sort(()=>Math.random()-0.5);


function display()
{
    cardList.forEach((cards,index)=>
    {
        const div = document.createElement('div');
        div.setAttribute('id',index)
        div.classList.add('card');
        div.classList.add('active');
        board.append(div);
        div.addEventListener('click',flipcard)
    })
}

let flippedItems = [];
let matchcount = 0
function flipcard()
{
if(flippedItems.length<2 && this.classList.contains('active'))
{
    const cardId = this.getAttribute('id');
    flippedItems.push(this);
    console.log(cardId);
    this.classList.remove('card')
    this.classList.add('front')
    this.innerHTML = cardList[cardId].img;
}
if(flippedItems[0].id==flippedItems[1].id)
{
    flippedItems = [];
    this.classList.add('card')
    this.classList.remove('front')
    this.innerHTML='';
}
if(flippedItems.length===2)
{
    setTimeout(checkMatch,2000)
    console.log(flippedItems[0].id);
    console.log(flippedItems[1].id);
}
}

function checkMatch()
{
    const cardId1 = flippedItems[0].getAttribute('id');
    const cardId2 = flippedItems[1].getAttribute('id');
    if(cardList[cardId1].names === cardList[cardId2].names)
    {
        flippedItems[0].classList.remove('active');
        flippedItems[1].classList.remove('active');
        flippedItems[0].classList.remove('front');
        flippedItems[1].classList.remove('front');
        flippedItems[0].innerHTML='';
        flippedItems[1].innerHTML='';
        matchcount++;
        matchover()
    }
    else
    {
        flippedItems[0].classList.add('card');
        flippedItems[1].classList.add('card');
        flippedItems[0].classList.remove('front');
        flippedItems[1].classList.remove('front');
        flippedItems[0].innerHTML='';
        flippedItems[1].innerHTML='';
    }
flippedItems=[];
}

function matchover()
{
    if(matchcount === cardList.length/2)
    {
        wintext.textContent ='Match Over!';
        wintext.classList.add('wintext')
    }
} 

//-----------------------------------------------------------------