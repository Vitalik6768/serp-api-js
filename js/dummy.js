
const btn = document.querySelector('#button-addon2');
const textFeald = document.querySelector('#inputKey');
const spinner = document.querySelector('#spin');
spinner.style.display = "none";


let serpData = [];
let testData = {
    "general": {
        "language": "en",
        "location": "United States",
        "mobile": false,
        "basic_view": false,
        "search_type": "text"
    },
    "organic": [
        {

            "rank": 1,
            "link": "#",
            "display_link": "en.wikipedia.org › wiki › Greenland",
            "title": "Greenland - Wikipedia",
            "description": "Greenland is the world's largest island, located between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago. It is an autonomous territory ..."
        },
        {
            "rank": 2,
            "url":"www.tipi.com",
            "link": "#",
            "display_link": "visitgreenland.com",
            "title": "Greenland - The Official Tourism Site. Find your adventure ...",
            "description": "All about Greenland. Find travel offers and ideas for your next adventure. Get inspired and plan your trip to Greenland here."
        },
        {
            "rank": 3,
            "link": "#",
            "display_link": "www.britannica.com › ... › Islands & Archipelagos",
            "title": "Greenland | History, Geography, & Culture | Britannica",
            "description": "Greenland, the world's largest island, lying in the North Atlantic Ocean. Greenland is noted for its vast tundra and immense glaciers. Map of Greenland highlighting ..."
        },
        {
            "rank": 4,
            "link": "#",
            "display_link": "www.imdb.com › title",
            "title": "Greenland (2020) - IMDb",
            "description": "Directed by Ric Roman Waugh. With Gerard Butler, Morena Baccarin, Roger Dale Floyd, Scott Glenn. A family struggles for survival in the face of a cataclysmic ...",
            "extensions": [
                {
                    "text": "Rating: 6.5/10",
                    "rating": true
                },
                {
                    "text": "2,062 votes"
                }
            ]
        },
        {
            "rank": 5,
            "link": "#",
            "display_link": "nsidc.org › greenland-today",
            "title": "Greenland Ice Sheet Today | Surface Melt Data presented by ...",
            "description": "Melting through the peak of Greenland's summer melt season has been well above the 1981 to 2010 average, but below the levels of many ...",
            "extensions": [
                {
                    "text": "Aug 12, 2020",
                    "inline": true
                }
            ]
        },
        {
            "url": "www.newsite.com",
            "rank": 6,
            "link": "#",
            "display_link": "www.bbc.com › news › world-europe-18249474",
            "title": "Greenland profile - BBC News - BBC.com",
            "description": "Greenland is the world's largest island and an autonomous Danish dependent territory with limited self-government and its own parliament.",
            "extensions": [
                {
                    "text": "Jul 23, 2018",
                    "inline": true
                }
            ]
        },
        {
            "rank": 7,
            "link": "#",
            "display_link": "www.bbc.com › news › science-environment-54127279",
            "title": "Climate change: Warmth shatters section of Greenland ice ...",
            "description": "A big chunk of ice has broken away from the Arctic's largest remaining ice shelf - 79N, or Nioghalvfjerdsfjorden - in north-east Greenland.",
            "extensions": [
                {
                    "text": "Sep 14, 2020",
                    "inline": true
                }
            ]
        },
        {
            "url":"www.myurl.com",
            "rank": 8,
            "link": "#",
            "display_link": "www.cia.gov › library › publications › the-world-factbook › geos",
            "title": "North America :: Greenland — The World Factbook - Central ...",
            "description": "View Greenland Photo Gallery. ONE-PAGE SUMMARY. View 25 photos of. GREENLAND. TRAVEL FACTS. The World Factbook Country/Location Photo Gallery ..."
        }
    ],
    "knowledge": {
        "name": "Greenland",
        "description": "Greenland is the world's largest island, located between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago. It is an autonomous territory within the Kingdom of Denmark.",
        "description_source": "Wikipedia",
        "description_link": "#"
    },
    "related": [
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+population&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoAHoECCcQAQ",
            "text": "greenland population"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+people&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoAXoECCcQAg",
            "text": "greenland people"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+map&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoAnoECCcQAw",
            "text": "greenland map"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+country&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoA3oECCcQBA",
            "text": "greenland country"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+trailer&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoBHoECCcQBQ",
            "text": "greenland trailer"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+capital&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoBXoECCcQBg",
            "text": "greenland capital"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=nuuk,+greenland&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoBnoECCcQBw",
            "text": "nuuk, greenland"
        },
        {
            "link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=greenland+tourism&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQ1QIoB3oECCcQCA",
            "text": "greenland tourism"
        }
    ],
    "people_also_ask": [
        {
            "question": "Is Greenland a safe country?",
            "question_link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=Is+Greenland+a+safe+country%3F&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQzmd6BAgaEAw",
            "answer_source": "Is Greenland Safe? 8 Things I Wish I Knew Before I Went",
            "answer_link": "#",
            "answer_display_link": "www.worldnomads.com \› how-to-stay-safe-while-exploring-greenlandwww.worldnomads.com \› how-to-stay-safe-while-exploring-greenland",
            "answer_html": "Greenland is not a place you have to worry about crime. According to the statistical website, Numbeo, Greenland rates as low for crime and high for safety.Oct 24, 2019"
        },
        {
            "question": "Can people go to Greenland?",
            "question_link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=Can+people+go+to+Greenland%3F&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQzmd6BAgaEBc",
            "answer_source": "How to Visit Greenland and What To Do While You're on the Island",
            "answer_link": "#",
            "answer_display_link": "www.eaglecreek.com \› trending-2018-how-and-why-visit-greenlandwww.eaglecreek.com \› trending-2018-how-and-why-visit-greenland",
            "answer_html": "No flights go directly to Greenland from North America, so the simplest option for tourists from this side of the globe involves going through Reykjavik, Iceland. From there, you can fly to several cities on the island, including Nuuk\—Greenland's capital and largest city with around 15,000 residents.Dec 11, 2017"
        },
        {
            "question": "What country owns Greenland?",
            "question_link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=What+country+owns+Greenland%3F&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQzmd6BAgaECM",
            "answer_source": "Greenland profile - BBC News",
            "answer_link": "#",
            "answer_display_link": "www.bbc.com \› news \› world-europe-18249474www.bbc.com \› news \› world-europe-18249474",
            "answer_html": "DenmarkGreenland is the world's largest island and an autonomous Danish dependent territory with limited self-government and its own parliament. Denmark contributes two thirds of Greenland's budget revenue, the rest coming mainly from fishing.Jul 23, 2018"
        },
        {
            "question": "What is Greenland best known for?",
            "question_link": "https://www.google.com/search?hl=en&adtest=on&gl=us&uule=w+CAIQICINVW5pdGVkIFN0YXRlcw&q=What+is+Greenland+best+known+for%3F&sa=X&ved=2ahUKEwiI3Mrb6_rrAhUQPK0KHZEQCXMQzmd6BAgaEC0",
            "answer_source": "Greenland | History, Geography, & Culture | Britannica",
            "answer_link": "#",
            "answer_display_link": "www.britannica.com \› place \› Greenlandwww.britannica.com \› place \› Greenland",
            "answer_html": "Greenland, the world's largest island, lying in the North Atlantic Ocean. Greenland is noted for its vast tundra and immense glaciers."
        }
    ]
}


 function displsyTestData(){
   serpData.push(testData);

   for(let site of serpData){
     let org = site.organic;
     console.log(site);
      for(let elm of org){

          let li = document.createElement('li');
          li.className = "list-group-item list-group-item-action list-group-item-info";
          li.innerText = ` Title : ${elm.title} | Position ${elm.rank}`;
          document.querySelector('ol').appendChild(li);
}
   }
 }

displsyTestData();
