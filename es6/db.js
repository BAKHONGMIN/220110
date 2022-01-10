// let naviText = ['네번째 그림', '작품들', '문의'];
// let naviLink = ['/company.html', '/work.html','/board.html'];

// var naviTag = '';


// for(var i in naviText){
// naviTag = '<a href=\"'+naviLink[i]+'\">'+naviText[i]+'</a>';
// }
// // /company.html 태그에 4번째 그림

// // naviTag += '<a href=\"'+naviLink[0]+'\">'+naviText[0]+'</a>';
// // 이렇게 해야 반복됨
// console.log(naviTag);

// naviTag='';

// var naviArr = [

//     ['네번째 그림','/company.html'],
//     ['작품들','/work.html'],
//     ['문의','/board.html'],
// ];
// for(var i in naviArr){
//     naviTag = '<a href=\"'+naviArr[i][1]+'\">'+naviArr[I][0]+'</a>';
//     }

//     console.log("2."+naviTag);


let naviText = ['네번째그림','작품들','문의'];
let naviLink = ['/company.html','/work.html','/board.html'];

var naviTag = '';

for(var i in naviText){
    naviTag +='<a href=\"'+naviLink[i]+'\">'+naviText[i]+'</a>'; 
}

console.log("1."+naviTag);

naviTag = '';

let naviArr = [
    ['네번째그림','/company.html'],
    ['작품들','/work.html'],
    ['문의','/board.html'],
];

for(var i in naviArr){
    naviTag +='<a href=\"'+naviArr[i][1]+'\">'+naviArr[i][0]+'</a>'; 
}

console.log("2."+naviTag);

// let naviText = ['네번째그림', '작품들','문의'];
// let naviLink = ['/Company.html','/work.html','/board.html'];

// var naviTag = '';

// for(var i in naviText){
//     naviTag += '<a href=\"'+naviLink[i]+'\">'+naviText[i]+'</a>';
// }
//     console.log("1."+naviTag);

// let naviArr = [
//     ['네번째그림','/Company.html'],
//     ['작품들','/work.html'],
//     ['무의','/board.html'],

// ];

// for( var i in naviArr){
//     naviTag +='<a href+\"'+naviArr[i][1]+'\">'+naviArr[i][0]+'</a>';
// }
// console.log("2."+naviTag);
let naviobj = [
    {   text : "네번째그림",
        link : "/commpany.html",
    },
    {   text : "작품들",
        link : "/work.html",    
    },
    {   text : "문의",
        link : "/board.html",
    },
]

naviTag = '';

for(var i in naviobj){
    naviTag +='<a href=\"'+naviobj[i].link+'\">'+naviobj[i].text+'</a>'; 
}

console.log("3."+naviTag);
