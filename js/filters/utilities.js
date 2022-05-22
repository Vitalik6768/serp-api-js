

// const filterData = (apiData) => {
//   for(let site of apiData){
//       let org = site.organic_results;
//       const url = apiData.filter(n => n.domain == urlFeald.value);
//       const findMyUrl = url.map(function (b){ return b.domain; })
//        for(let elm of org){
//             if(findMyUrl[0] == urlFeald.value){
//               const newJsaon = new Object;
//               newJsaon.rank = elm.position;
//               newJsaon.url = elm.domain;
//               newJsaon.keyword = keyword;
//               newData.push(newJsaon);
//               apiData = [];
//           }
//         }
//    }
//    console.log()
//  }

const findCompetitors = () =>{
  const counts = {};
  const competitorSites = newData.map(function (b){return b.url;})
  let urlReapidNumber = 1;
  competitorSites.forEach((x) => {
    if(x != urlFeald.value){
      counts[x] = (counts[x] || 0) + 1;}
    });
    for (let key in counts) {
        if(counts[key] > urlReapidNumber){
          filterLowerHigherKeyWordsRanks(key)
          }
     }
     n.createTable();
     o.createOverview();
     keyWordRanks();

  }

  const filterLowerHigherKeyWordsRanks = (key) =>{
    let lowerRank = 0;
    let higherRank = 0;
    const newJsaon = new Object;
    const getCompatitorRanks3 = newData.filter(n => n.url == key);
    for(let i of getCompatitorRanks3){
      const getCompatitorRanks2 = newData.filter(n => n.url == urlFeald.value
      && n.keyword == i.keyword);
      const competitorSites = getCompatitorRanks2.map(function (b){return b.rank;})
      if(competitorSites.length != 0){
        if(competitorSites[0] > i.rank){
          higherRank += 1;
        }else{
          lowerRank += 1;
        }
    }
  }
    newJsaon.url = key;
    newJsaon.lowerRank = lowerRank;
    newJsaon.higherRank = higherRank;
    newJsaon.page = newJsaon.page;
    compatitorKeyWords.push(newJsaon);
    spinner.style.display = "none";
  }

//find Key words that no exists in compatitors
const findLowCompatitionKeywords = () =>{
  let lines = textFeald.value.split('\n');
  let ifExist = false;
  const competitorSitesIntable = compatitorKeyWords.map(function (d){ return d.url; })

  for(let k of lines){
      ifExist = false;
      const mainData = newData.filter(n => n.keyword == k);
      const competitorSites = mainData.map(function (b){ return b.url; })
       competitorSites.forEach((element) => {
         if(competitorSitesIntable.includes(element)){
                ifExist = true;
            }
       });
  if(ifExist == false){console.log(k);};
  }
}

//find compatition keywords
 const comKywords = (url, keyRank) =>{

   const myModal = document.querySelector('#tipi')
   myModal.innerHTML = ``;

   const getCompatitorRanks = newData.filter(n => n.url == url);
  // console.log(getCompatitorRanks);
   for (let comKey of getCompatitorRanks){
        const myData = newData.filter(n => n.url == urlFeald.value
        && n.keyword == comKey.keyword )
        const myKeyWordRank = myData.map(function (b){return b.rank;})
        if(keyRank == 'lowerRank'){
          if(comKey.rank > myKeyWordRank[0]){
            //console.log(` Lower Rank Keyword ${comKey.keyword} Rank ${comKey.rank}`);
            compareKeywordH = comKey.keyword;
            myWebSite = myWebsiteRanks(compareKeywordH);
            myModal.innerHTML += `<p>KEYWORD:</br> ${comKey.keyword}</br> RANK:</br> ${comKey.rank}
            </br>PAGE: </br>${comKey.page}</br>
            </p></br>
            <p>My Site:</br>
            rank: ${myWebSite[1]}</br>
            page:${myWebSite[2]}
            </p>
            </br>
            <hr class="style1">
            `;
          }
        }else{
          if(comKey.rank < myKeyWordRank[0]){
            compareKeywordL = comKey.keyword;
            myWebSite2 = myWebsiteRanks(compareKeywordL);
            myModal.innerHTML += `<p>Keyword: ${comKey.keyword}</br> Rank: ${comKey.rank}
            Page: <a href="${comKey.page} rel="noopener noreferrer" target="_blank"">${comKey.page}</a></br>
            </p></br>
            <p>My Site:</br>
            rank: ${myWebSite2[1]}</br>
            page:<a href="${myWebSite2[2]} rel="noopener noreferrer" target="_blank"">${myWebSite2[2]}</a>
            </p>
            </br>
            <hr class="style1">
            `;

          }
        }
   }
}
//COMPARE RANKS
function myWebsiteRanks(compareKeyword){
  let myarr = [];
  const myRanks = newData.filter(n => n.url == urlFeald.value && n.keyword == compareKeyword);
  for(let i of myRanks){
    newPageUrl = i.page.slice(0, -1)
    myarr.push(i.url, i.rank, newPageUrl,);
  }
  return myarr;
}

function keyWordRanks(){
  let keyWordsData = [];
  let compatitorCount = 0;
  let keywords = textFeald.value.split('\n');
  let compatitors = compatitorKeyWords.map(function (d){ return d.url; })
  for(let key of keywords){
    let filterKeyword = newData.filter(n => n.keyword == key);
    for(f of filterKeyword){
      if(compatitors.includes(f.url)){
        compatitorCount ++;
      }
    }
    keyWordsData.push({keyword: key, compatitors:compatitorCount});
    compatitorCount = 0;
  }
  keyTable = new Ktable(keyWordsData);
}
