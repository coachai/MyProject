

var score;
var title;
var url;
var timestamp;
var AuId;
var Aukarma;
var AuId1;
var Aukarma1;
var AuId2;
var Aukarma2;
var AuId3;
var Aukarma3;
var AuId4;
var Aukarma4;
var AuId5;
var Aukarma5;
var AuId6;
var Aukarma6;
var AuId7;
var Aukarma7;
var AuId8;
var Aukarma8;
var AuId9;
var Aukarma9;
var formattedTime;
var parsed = null;
var result;
var tenData=[];
var arr = [];
var user = [];
var scoreList=[];
var AuIdList = [];
var AukarmaList = [];



var HttpClient = function() {
   this.getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};
}



function loadDoc() {

getStory();//get Story data


var delayMillis = 1000; //1 second

setTimeout(function() {
  // code to be executed after 1 second
  sortScore(scoreList);
      scoreList =[];       
      user = [];
}, delayMillis);

}

function getStory()
{
var client = new HttpClient();
 client.getJSON('https://hacker-news.firebaseio.com/v0/topstories.json', function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
   
  
    CountList (data,1, data.length);
  }
});}

function CountList(data, min, max)
{  // 
    for (var i = 0; i < 10; i++) 
   {var x = Math.floor(Math.random() * (max - min + 1)) + min;
  
   
   getItem(data[x]);
  
   }
   ;
}

function getItem (Id){
var client2 = new HttpClient();
var url = "https://hacker-news.firebaseio.com/v0/item/"+ Id + ".json ";
 client2.getJSON(url, function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
   scoreList.push(data)
  }
});}


function sortScore(data)
{     
  result = data.sort(function(a, b){
              return b.score-a.score});
 
var lastResult = JSON.stringify(result, null, "    ")
result = null;
parsed = JSON.parse(lastResult);

getAllUser()
}


function getAllUser()
{   
           getUser ( parsed[0].by);
           getUser ( parsed[1].by);
           getUser ( parsed[2].by);
           getUser ( parsed[3].by);
           getUser ( parsed[4].by);
           getUser ( parsed[5].by);
           getUser ( parsed[6].by);
           getUser ( parsed[7].by);
           getUser ( parsed[8].by);
           getUser ( parsed[9].by);
           
}
 

function getUser (UId){//alert('Your ITEM ID result is:  ' + Id);

var client3 = new HttpClient();
var url = "https://hacker-news.firebaseio.com/v0/user/"+ UId + ".json ";
 client3.getJSON(url, function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
  
     user.push(data);

	AuId= user[0].id;
    Aukarma= user[0].karma;
    AuId1 = user[1].id;
    Aukarma1 = user[1].karma;
    AuId2 = user[2].id;
    Aukarma2 = user[2].karma;
    AuId3 = user[3].id;
    Aukarma3 = user[3].karma;
    AuId4 = user[4].id;
    Aukarma4 = user[4].karma;
    AuId5 = user[5].id;
    Aukarma5 = user[5].karma;
    AuId6 = user[6].id;
    Aukarma6 = user[6].karma;
    AuId7 = user[7].id;
    Aukarma7 = user[7].karma;
    AuId8 = user[8].id;
    Aukarma8 = user[8].karma;
    AuId9 = user[9].id;
    Aukarma9 = user[9].karma;
  
    
  AuIdList.push(AuId);
  AuIdList.push(AuId1);
  AuIdList.push(AuId2);
  AuIdList.push(AuId3);
  AuIdList.push(AuId4);
  AuIdList.push(AuId5);
  AuIdList.push(AuId6);
  AuIdList.push(AuId7);
  AuIdList.push(AuId8);
  AuIdList.push(AuId9);
  
  AukarmaList.push(Aukarma);
  AukarmaList.push(Aukarma1);
   AukarmaList.push(Aukarma2);
  AukarmaList.push(Aukarma3);
   AukarmaList.push(Aukarma4);
  AukarmaList.push(Aukarma5);
   AukarmaList.push(Aukarma6);
  AukarmaList.push(Aukarma7);
   AukarmaList.push(Aukarma8);
  AukarmaList.push(Aukarma9);

      user = [];
      dataBinding();
     // cleanData();
  }
});}


function dataBinding()
{ 
  var table = document.getElementById("myTable");
  
  for(var i=0;i<10;i++)
  { 
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    
    cell1.innerHTML = parsed[i].title;
    cell2.innerHTML = parsed[i].url;
     RealTime(parsed[i].time);
    cell3.innerHTML = formattedTime;
    cell4.innerHTML = parsed[i].score;
    cell5.innerHTML = AuIdList[i];
    cell6.innerHTML = AukarmaList[i];
   }
   
 parsed=[];
   
}


function RealTime(unix_timestamp)
{var date = new Date(unix_timestamp*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
 formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

function cleanData()
{  
    document.getElementById("myTable").deleteRow(1);
    document.getElementById("myTable").deleteRow(2);
    document.getElementById("myTable").deleteRow(3);
    document.getElementById("myTable").deleteRow(4);
    document.getElementById("myTable").deleteRow(5);
    document.getElementById("myTable").deleteRow(6);
    document.getElementById("myTable").deleteRow(7);
    document.getElementById("myTable").deleteRow(8);
 }

