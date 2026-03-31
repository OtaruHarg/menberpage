var menubars = [0,
    ["null","No.001","小樽端俱","19歳(大学2年生)","12/21","プログラミング、TRPG、動画編集"],
    ["null","No.002","仮野乙孤","20歳(大学2年生)","4/1","動画編集、食べ歩き"],
    ["null","No.003","篠崎武総","20歳(大学2年生)","6/20","鉄道、史跡巡り、小説の創作"],
    ["null","No.004","ゆば","20歳(大学3年生)","1/27","?"],
    ["null","No.005","富吉永史","20歳(大学2年生)","9/9","ウーパールーパー、オオサンショウウオ"],
];
var page = 1;


function left(){
    page = page - 1;
    if(page >= menubars.length){
        page = 1;
    }else if(page <= 0){
        page = menubars.length - 1;
    }
    change_page(page);
}

function right(){
    page = page + 1;
    if(page >= menubars.length){
        page = 1;
    }else if(page <= 0){
        page = menubars.length;
    }
    change_page(page);
}

function change_page(x){
    document.getElementById("number").textContent = menubars[x][1];
    document.getElementById("name").textContent   = menubars[x][2];
    document.getElementById("nenrei").textContent = menubars[x][3];
    document.getElementById("bd").textContent     = menubars[x][4];
    document.getElementById("shumi").textContent  = menubars[x][5];
}