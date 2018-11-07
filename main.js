let print =document.querySelector('#quote0');
let print1 =document.querySelector('#quote1');
let print2 =document.querySelector('#quote2');
let print3 =document.querySelector('#quote3');


let submit = document.querySelector('.faEllipsis_change');
let bought = document.querySelector('#bought');
let bought1 = document.querySelector('#bought1');
let bought2 = document.querySelector('#bought2');

submit.addEventListener('click',
function change(){
  let rizo = ["'I love it. I could never see myself without it. I get a fresh batch every month' -Red J.","'It's amazing paper I swear. They last years and are pretty indestructible. Just don't shop for it anywhere else' -Shiggy Z.","'OMG!! I've told my friends and family and would prefer if you guys all use Munder Difflin no matter what.' -Ekieul S.","'Gimme some more paper. I just can' have enough ... I may be a horder but I've hoarded gold! -Jonny M.'"];
  let forward = Math.floor(Math.random() * 3) ;
  print.innerHTML= rizo[forward];

});


submit.addEventListener('click',
function change(){
  let rizo = ["'I love it. I could never see myself without it. I get a fresh batch every month' -Red J.","'It's amazing paper I swear. They last years and are pretty indestructible. Just don't shop for it anywhere else' -Shiggy Z.","'OMG!! I've told my friends and family and would prefer if you guys all use Munder Difflin no matter what.' -Ekieul S.","'Gimme some more paper. I just can' have enough ... I may be a horder but I've hoarded gold! -Jonny M.'"];
  let forward = Math.floor(Math.random() * 3) ;
  print1.innerHTML= rizo[forward];

});

submit.addEventListener('click',
function change(){
  let rizo = ["'I love it. I could never see myself without it. I get a fresh batch every month' -Red J.","'It's amazing paper I swear. They last years and are pretty indestructible. Just don't shop for it anywhere else' -Shiggy Z.","'OMG!! I've told my friends and family and would prefer if you guys all use Munder Difflin no matter what.' -Ekieul S.","'Gimme some more paper. I just can' have enough ... I may be a horder but I've hoarded gold! -Jonny M.'"];
  let forward = Math.floor(Math.random() * 3) ;
  print2.innerHTML= rizo[forward];

});

submit.addEventListener('click',
function change(){
  let rizo = ["'I love it. I could never see myself without it. I get a fresh batch every month' -Red J.","'It's amazing paper I swear. They last years and are pretty indestructible. Just don't shop for it anywhere else' -Shiggy Z.","'OMG!! I've told my friends and family and would prefer if you guys all use Munder Difflin no matter what.' -Ekieul S.","'Gimme some more paper. I just can' have enough ... I may be a horder but I've hoarded gold! -Jonny M.'"];
  let forward = Math.floor(Math.random() * 3) ;
  print3.innerHTML= rizo[forward];

});

bought.addEventListener('click', function(){
  alert('Sold Out 😢');
});
bought1.addEventListener('click', function(){
  alert('Sold Out 😢');
});
bought2.addEventListener('click', function(){
  alert('Sold Out 😢');
});

let drama =document.querySelector('#motto');
addEventListener('load', function(){
  addEventListener('scroll', function(){
    drama.style.backgroundColor = document.documentElement.scrollTop > 900
    ? '#e6f2ff' : '#ffffff';

  });
});
// addEventListener('load', function(){
//   addEventListener('scroll', function(){
//     drama.style.backgroundColor = document.documentElement.scrollTop > 2000
//     ? '#ffffff' : '#e6f2ff';
//   });
// });
