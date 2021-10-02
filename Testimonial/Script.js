let data = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    avtar:
      "https://www.biography.com/.image/t_share/MTY2MzU2NjgxMDUwMDM5OTk5/_photo-by-per-anders-petterssongetty-images.jpg",
    name: "Nelson Mandela",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    avtar:
      "https://addicted2success.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
    name: "Steve Jobs",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    avtar:
      "https://static.onecms.io/wp-content/uploads/sites/44/2021/07/22/oprahs-under-the-sink-storage-solution-is-adorable-and-affordable.jpg",
    name: "Oprah Winfrey",
  },
  {
    text: "Life is what happens when you're busy making other plans",
    avtar:
      "https://www.gannett-cdn.com/-mm-/ae811a38ccb7ca7681c5cd9edc7e0bae36516e06/c=261-0-2174-2550/local/-/media/2015/10/08/Phoenix/Phoenix/635799268539755113-ae-lennon09e.jpg",
    name: "John Lennon",
  },
];
const quote = document.querySelector(".quote");
const name = document.querySelector(".name");
const image = document.querySelector(".avtar");
let updateTestimonial = (pointer) => {
  image.setAttribute("src", data[pointer].avtar);
  quote.textContent = data[pointer].text;
  name.textContent = data[pointer].name;
};
updateTestimonial(0);
var i = 1;
setInterval(() => {
  if (i === data.length) {
    i = 0;
  }
  updateTestimonial(i);
  i++;
}, 10000);
