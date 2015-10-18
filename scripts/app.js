var data2 = 
{
  data:[
  {
    planets:[
    {
      "earth":[
      {
        type:"planet"
      },
      {
        size:1000
      },
      {
        population:7000000000
      },
      {
        coordinates: 123456
      },
      {
        information: "Formed around 4.6 billions years ago. The planet is habitable, and owned by the UEE."
      }
    ]}
  ]}
]};

//var moreData = {planets:[]}

var planets = '{"earth":{"type":"planet","name":"Earth", "population":1200}, "population":50, "info":"Formed around 4.6 billion years ago. The planet is habitable, and owned by the UEE. Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar Systems four terrestrial planets, and the only astronomical object known to harbor life."}';

function startup() {
  speak = responsiveVoice.speak
  button = document.getElementById('start');
  if (button.innerText.toLowerCase() == 'start') {
    button.innerText = "Listening";
    responsiveVoice.setDefaultVoice("UK English Male");
    main();
  }
}

function main(){
  var data3 = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';
  var json = JSON.parse(planets);
  speak('information' + json['info']);
  /*
  speak('population');
  speak(json['earth'].population);
  speak(json['earth'].type);
  */
  console.log(data2.data.planets['earth'].type);
}
