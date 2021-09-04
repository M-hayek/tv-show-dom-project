//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
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

  let episodeCode = document.createElement ("p");
  card.appendChild (episodeCode);
  episodeCode.innerText = "S0" + episode.season + "E0" + episode.number;

  
  let episodeImage = document.createElement ("img");
  card.appendChild (episodeImage);
  episodeImage.src = episode.image.medium;

  let episodeSummary = document.createElement ("p");
  card.appendChild (episodeSummary);
  episodeSummary.innerText = episode.summary;

      // console.log(epsiode.name);
   // console.log(epsiode.image.medium);
 
 }

 function searchElement (epsiodeList) {
   let e
  episodeList.forEach (searchEngine);
 }
 




window.onload = setup;
