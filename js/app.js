
const btn = document.querySelector('#button-addon2');
const textFeald = document.querySelector('#inputKey');
const spinner = document.querySelector('#spin');
spinner.style.display = "none";

const apiKey = 'API KEY';
let serpData = [];

btn.addEventListener('click', function() {
  if(textFeald.value != ''){

    spinner.style.display = "block";

    axios.get(`http://api.serpstack.com/search?access_key=${apiKey}&num=10&query=${textFeald.value}`)
        .then(function (response) {

            serpData.push(response.data);
            spinner.style.display = "none";
            displayData();
        })
        .catch(function (error) {
            console.log(error);
        })
  }else{
    alert('Please Enter Keyword');
  }
});


function displayData(){

  for(let site of serpData){
    console.log(site);
    let org = site.organic_results;
     for(let elm of org){
         let li = document.createElement('li');
         li.className = "list-group-item list-group-item-action list-group-item-info";
         li.innerText = ` Title : ${elm.title} | Position ${elm.position}`;
         document.querySelector('ol').appendChild(li);
}

  }

}
