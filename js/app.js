
const apiKey = '';
//let newData = [];
let compatitorKeyWords = [];
let keyword;
let globalData = compatitorKeyWords;
let keyTable;
let keywordLines = 0;
let modelActivation = false;



const btn = document.querySelector('#button-addon2');
const textFeald = document.querySelector('#comment');
const urlFeald = document.querySelector('#urlFeald');
const spinner = document.querySelector('#spin');
spinner.style.display = "none";



btn.addEventListener('click', function() {
  if(textFeald.value != '' && urlFeald.value != ''){
    spinner.style.display = "block";
    let lines = textFeald.value.split('\n');
    let lin = lines.length;
    findCompetitors();

  }else{
    alert('Please Enter Keyword And Url');
    }
  });

makeRequest = (searchKeyword, lin) =>{
  const jsonData= require('dummy.json');
  console.log(jsonData);


  // axios.get(`http://api.serpstack.com/search?access_key=${apiKey}&num=20&query=${searchKeyword}`)
  //     .then(function (response) {
  //         let apiData = [response.data];
  //         keyword = searchKeyword;
  //         keywordLines++;
  //         console.log(apiData);
  //         //filterData(apiData);
  //         if(lin == keywordLines){
  //           findCompetitors();
  //
  //         }
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     })
 }
