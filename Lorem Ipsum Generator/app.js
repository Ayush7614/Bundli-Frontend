// lorem text
const text = [
      `Leverage agile frameworks to provide a robust synopsis for high level
       overviews. Iterative approaches to corporate strategy foster collaborative
       thinking to further the overall value proposition. Organically grow the 
       holistic world view of disruptive innovation via workplace diversity
       and empowerment.`,
      `Bring to the table win-win survival strategies to ensure proactive
       domination. At the end of the day, going forward, a new normal that 
       has evolved from generation X is on the runway heading towards a 
       streamlined cloud solution. User generated content in real-time will 
       have multiple touchpoints for offshoring.`,
      `Capitalize on low hanging fruit to identify a ballpark value added 
       activity to beta test. Override the digital divide with additional 
       clickthroughs from DevOps. Nanotechnology immersion along the 
       information highway will close the loop on focusing solely on the 
       bottom line.`,
      `Podcasting operational change management inside of workflows to 
       establish a framework. Taking seamless key performance indicators
       offline to maximise the long tail. Keeping your eye on the ball 
       while performing a deep dive on the start-up mentality to derive 
       convergence on cross-platform integration`,
       `Proactively envisioned multimedia based expertise and cross-media 
        growth strategies. Seamlessly visualize quality intellectual capital
        without superior collaboration and idea-sharing. Holistically 
        pontificate installed base portals after maintainable products`,
       `Objectively innovate empowered manufactured products whereas parallel
        platforms. Holisticly predominate extensible testing procedures for 
        reliable supply chains. Dramatically engage top-line web services 
        vis-a-vis cutting-edge deliverables`,
        `Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate one-to-one customer service with 
        robust ideas. Dynamically innovate resource-leveling customer service 
        for state of the art customer service.`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e){
    e.preventDefault();
    const value = parseInt(amount.value) ; 
    const random = Math.floor(Math.random() * text.length);
   
    if(isNaN(value) || value<= 0 || value>7){
        result.innerHTML= `<p class="result">${text[random]}</p>` ;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText
          .map(function (paragraph) {
            return `<p class="result">${paragraph}</p>`
        }) 
        .join("");
        result.innerHTML = tempText;
    }
}) ;