// rejex.js
// an interactive file for rejex experiments

// add a header called "rejex"
var header = document.createElement("h1");
header.innerHTML = "rejex";
document.body.appendChild(header);

// raw text to extract line numbers and lines from
var rawText = `11 Climate change and desertification have strong mutual interactions, and the land use and land cover changes 
12 associated with desertification contribute to climatic changes, whereas changes in precipitation, 
13 temperature, wind speed, and their variabilities due to climatic changes constitute factors affecting 
14 desertification (Sivakumar, 2007). These climate-desertification interactions require multi-faceted 
15 approaches to limit negative impacts on human wellbeing (Adeel et al., 2005; Archer and Tadross, 2009). 
16 While climate change can drive desertification (3.2.4.1), the process of desertification can also alter the 
17 local climate providing a feedback. This feedback can lead to either a damping of the desertification process 18 (negative feedback) or an enhancement of the desertification process (positive feedback). These feedbacks 19 can alter the carbon cycle, and hence the level of atmospheric CO2 and its related global climate change, or 20 they can alter the surface energy and water budgets directly impacting the local climate. While these 21 feedbacks occur in all climate zones (Chapter 2), here we focus on their effects in dryland regions and 22 assess the literature concerning the major desertification feedbacks to climate. The main feedback pathways 23 discussed are summarised in Figure 3.8. 24 Drylands are characterised by limited soil moisture availability compared to more humid regions. Thus, the 25 sensible heat accounts for a higher proportion of the surface net radiation than latent heat in these regions 26 (Wang and Dickinson, 2013). This tight coupling between the surface energy balance and the soil moisture 27 in semi-arid and dry sub-humid zones makes these regions susceptible to land-atmosphere feedback loops 28 that can amplify changes to the water cycle (Seneviratne et al., 2010). Changes to the land surface caused 29 by desertification can change the surface energy budget, altering the soil moisture and triggering these 30 feedbacks.
`;

// create a copy of the text
var text = rawText;

// create a rejex to match numbers in text
var numberRegex = /\d+/g;

// loop through the text and find number matches
var match;
while ((match = numberRegex.exec(text))) {
  // create a span element with the number as text
  var span = document.createElement("span");
  span.innerText = match[0];
  // add the span to the page
  document.body.appendChild(span);
}

// all spans have yellow backgrounds and black text
var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.length; i++) {
  spans[i].style.backgroundColor = "yellow";
  spans[i].style.color = "black";
}

// log loop completion with a random INTEGER between 0 and 99999
console.log(Math.floor(Math.random() * 100000));
