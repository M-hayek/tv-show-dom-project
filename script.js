//You can edit ALL of the code here
function setup() {

  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  let searachEngin = document.querySelector ("#search-input");
  searachEngin.addEventListener ("keyup", searchEpisodes);
  }

  function searchEpisodes () {
    const allEpisodes = getAllEpisodes();
        let filteredEpisodes = allEpisodes.filter (filterEpisodes);
        console.log(filteredEpisodes);
   }

  function filterEpisodes(episode) {
    let searchEngine= document.queryselector ("#search-input");
  console.log(searchEngine.value);
   if (episode.name.toLowercase().includes(searchEngine.value.toLowercase())){
     return true;
   } else {
     return false;
   }
  }
  


const rootElem = document.getElementById("root");

function makePageForEpisodes(episodeList) {
 
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  // rootElem.textContent = "Got" + episodeList.length + " epsiode(s)";
  episodeList.forEach (createCard);
 
   
}

function createCard(episode) {

  let card = document.createElement ("span");
  rootElem.appendChild(card);

  let episodeName =  document.createElement ("h2");
  card.appendChild (episodeName);
  episodeName.innerText = episode.name;

  let episodeCode = document.createElement ("h5");
  card.appendChild (episodeCode);
  let seasonPadding = "";
  if(episode.season < 10) {
    seasonPadding = "0";
  }
  let codeText =  "S" + seasonPadding + episode.season;
  episodeCode.innerText = codeText + "E0" + episode.number;

  
  let episodeImage = document.createElement ("img");
  card.appendChild (episodeImage);
  episodeImage.src = episode.image.medium;

  let episodeSummary = document.createElement ("span");
  card.appendChild (episodeSummary);
  episodeSummary.innerHTML = episode.summary;

      // console.log(epsiode.name);
   // console.log(epsiode.image.medium);
 
 }






window.onload = setup;
