
const apiKey = '';
let serpData = [];
let newData = [];
let competitorSites = [];
let keyword;
let keyWordCount = 0;

const btn = document.querySelector('#button-addon2');
const textFeald = document.querySelector('#comment');
const urlFeald = document.querySelector('#urlFeald');
const spinner = document.querySelector('#spin');
spinner.style.display = "none";


btn.addEventListener('click', function() {
  if(textFeald.value != ''){
    spinner.style.display = "block";
    let lines = textFeald.value.split('\n');
    let lin = lines.length;
    for(const searchKeyword of lines){
      makeRequest(searchKeyword, lin);
    }
  }else{
    alert('Please Enter Keyword');
  }

});

makeRequest = (searchKeyword, lin) =>{
  axios.get(`http://api.serpstack.com/search?access_key=${apiKey}&num=20&query=${searchKeyword}`)
      .then(function (response) {
          serpData.push(response.data);
          spinner.style.display = "none";
          keyword = searchKeyword;
          keyWordCount++;
          console.log('request');
          filterData();
          if(lin == keyWordCount){
            findCompetitors();
          }
      })
      .catch(function (error) {
          console.log(error);
      })
}

let filterData = (siteRank) => {
  let maxPosition = 0;
  for(let site of serpData){
    let org = site.organic_results;
     for(let elm of org){
       if(siteRank){
         if(elm.position > siteRank && maxPosition < 5){
           maxPosition++;
           const newJsaon = new Object;
           newJsaon.rank = elm.position;
           newJsaon.url = elm.domain;
           newJsaon.keyword = keyword;
           newData.push(newJsaon);
           competitorSites.push(elm.domain);
           serpData = [];
         }
       }else{
         findWebsite(elm);
       }
     }
  }
}
