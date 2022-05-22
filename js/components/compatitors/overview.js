class Overview{
  constructor(){
    this.overview = document.getElementById('overview');
    this.filterdKeyWord;
  }

createOverview(){
  overview.innerHTML = `
  <!-- <input type="text" id="keywordInput" value="dfg"> -->
  <div class="row">
    <div class="col">
     <div class="card mt-5 bg-light">
       <div class="d-flex justify-content-between p-2">
        <h5 class='mt-2' id = "compatitors">Compatitors :  0</h5>
        <div id="selectedKeyword"></div>
        <div class="d-flex">
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tablemodel">
Keywords
</button>
&nbsp;&nbsp;
        <input type="text" id='keywordInput' class="form-control w-50" placeholder="Web Site">
        &nbsp;&nbsp;
        <button type="button" id='filter' class="btn btn-primary">Filter</button>
      </div>
      </div>
    </div>
    </div>
  </div>
  `
  this.startFilter();
  this.compatitorsCount();
}

startFilter(){
  let btnFilter = document.getElementById('filter');
  let keywordFilter = document.querySelector('#keywordInput');

    btnFilter.addEventListener('click', function() {
      let feladValue = keywordFilter.value;
      if(feladValue != ''){
        o.keyWordFilter(feladValue);
      }else{
        alert('no keyword');
      }
      });

}

keyWordFilter(feladValue){
  let objnew = [];
  for(let com of compatitorKeyWords){
    let keywordF = feladValue;
    const newMainData = newData.filter(n => n.keyword == keywordF && n.url == com.url);
    if(newMainData != ''){
      objnew.push({url: com.url, lowerRank: com.lowerRank,
        higherRank: com.higherRank});
    }
  }
  globalData = objnew;
  n.createTable();
  this.compatitorsCount();
  this.selectedKeyWord(feladValue);


}
compatitorsCount(){
  let compatitors = document.getElementById('compatitors');
  const competitorSites = globalData.map(function (b){return b.url;})
  compatitors.innerText = `Compatitors :  ${competitorSites.length}`
}

selectedKeyWord(feladValue){
  let keyWord = document.getElementById('selectedKeyword');
  this.filterdKeyWord = keyWord;
  keyWord.innerHTML = `
  <h5 class='mt-2 bg-green'>${feladValue}  <i class="fa fa-times"
  onclick="o.removeSelectedKeyWord()">
  </i></h5>
  `
}

removeSelectedKeyWord(){
  this.filterdKeyWord.innerHTML = '';
  globalData = compatitorKeyWords;
  n.createTable();
  this.compatitorsCount()
}

}

const o = new Overview();
