/*//filter
const scores=[10,30,15,25,50,40,5];
const filt = scores.filter( (score)=>{
    return score>20;
}

);
console.log(filt);
const users=[
    {name:'mathews', premium:true},
    {name:'esther',premium:false},
    {name:'parish',premium:false},
    {name:'maguire',premium:true}
];
const premiumUsers= users.filter(user=>
    //user=> user.premium
    
    {return user.premium

    });
    console.log(premiumUsers);
    //Map
    const prices=[20,10,30,25,15,40,80,5];
    const salePrices= prices.map((price)=> {return price/2;});
    //price=>price/2
    console.log(salePrices);
    const products =[
        {name:'omo',price:20},
        {name:'sunlight',price:40},
        {name:'ariel',price:30},
        {name:'power clean',price:10},
        {name:'bright clean',price:50}
    ];
    const saleProducts=products.map((product)=>{
        if(product.price>30){
            //declaring product.price=product.price/2 is destructive
            return{name:product.name,price:product.price/2};

        }else{
            return product;
        }
    }
    );
    console.log(saleProducts);/*`prices now${saleProducts.price} from ${products.price}`);*/
    //reduce method
/*    const scorez=[10,20,60,40,70,90,30];
    const result=scorez.reduce((acc,curr)=>{
        if(curr>50){
            acc++;
        }
        return acc;
    },0
    );
    console.log(result);*/

    //const points=[
      //  {player:'zakari',points:50},
        //{player:'zeus',points:30},
        //{player:'zakari',points:70},
        //{player:'malcom', points:60}];
        /*
const zakariPoints=points.reduce((acc, curr)=>{
    if(curr.player==='zakari'){
        acc+=curr.points;

    }return acc;
},0);
console.log(zakariPoints);*/
//*find method
//const scores=[10,5,0.40,60,10,20,70]; 
//scores.sort((a,b)=>b-a);/*
//const highScore=scores.find((score)=> score>50);
//console.log(highScore);/*/
//sort method
/*
const students=['mario','luigi','wesley','aaron','zeus'];
students.sort();
students.reverse();
console.log(students);
points.sort((a,b)=>{
if(a.points>b.points)
{
    return -1;
}else if(b.points>a.points){
    return 1;
}else{
    return 0;
}
});*/
//easier code block is //return b.score-a.score;
//console.log(points);
//console.log(scores);
const products=[
    {name:'gold star', price:30},
    {name:'green shell', price:10},
    {name:'red shell', price:40},
    {name:'banana skin', price:5},
    {name:'mushroom', price:50}
];
//const filtered=products.filter(product=>products.price>20);
//const promos=filtered.map(product=>{
 //   return `${product.name}is kshs${product.price/2}`;
//});
const promos=products
.filter(product=>product.price > 20)
.map(product=>`the${product.name}is ${product.price /2}shillings`);
console.log(promos);