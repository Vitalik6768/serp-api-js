const findWebsite = (elm, siteRank) => {

   if(elm.domain == urlFeald.value){
     header = document.querySelector('#header');
     header.innerText = urlFeald.value;
     cardText = document.querySelector('.card-text');
     document.querySelector('.card-text').innerText += `
     Key Word: ${keyword}
     Rank: ${elm.position}
     `;
     let siteRank = elm.position;
     filterData(siteRank);
   }
}

const findCompetitors = () =>{
  const counts = {};
  competitorSites.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
      });
  for (let key in counts) {
      if(counts[key] > 1){
        createList(key);
      }
    }
  }



const createList = (key) =>{
  let li = document.createElement('li');
  li.className = "list-group-item d-flex justify-content-between align-items-start";
  let divA = document.createElement('div');
  divA.className = "ms-2 me-auto";
  let divB = document.createElement('div');
  divB.className = "fw-bold";
  divB.innerText = `${key}`;
  let divC = document.createElement('div');
  // li.appendChild(badge);
  li.appendChild(divA);
  divA.appendChild(divB);
  divA.insertBefore(divC, null);

  for(let site of newData){
    if(site.url == key){
      let p = document.createElement('p');
      p.innerText=` Key Word: ${site.keyword} | Rank: ${site.rank} `;
      divC.appendChild(p);
    }
    document.querySelector('ol').appendChild(li);
  }
}
