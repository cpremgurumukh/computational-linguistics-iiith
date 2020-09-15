var corpus = [
  'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
  'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
  'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.',
];

var subheading = document.getElementById('head');
var description = document.getElementById('desc');
var corpuscontent = document.getElementById('content');
var answer = document.getElementById('solution');
var submit = document.getElementById('submit');
var manswer = document.getElementById('answer');
var x, wordcount, uniquewordcount, newtypecount;

function drop() {
  x = '';
  x = document.getElementById('corpus').value;
  if (x == 'select') {
    alert('Select a corpus');
  }
  if (x == 'corpus1') {
    corpuscontent.innerHTML =
      corpus[0] +
      '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="tokeninput" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="typeinput" size="5"></td></tr></table><br></center>';
    submit.innerHTML =
      '<center><button id="submit" value="Submit" onclick="verify()">Submit</button></center>';
    var pattern = /[^a-zA-Z ]/g;
    var str = corpus[0];
    var s1 = str.toLowerCase();
    s1 = s1.replace(pattern, '');
    var s2 = s1.split(' ');
    wordcount = s2.length; //***//
    var uniquewords = new Set(s2);
    uniquewordcount = uniquewords.size; //***//
    answer.innerHTML = '';
    manswer.innerHTML = '';
  }
  if (x == 'corpus2') {
    corpuscontent.innerHTML =
      corpus[1] +
      '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="tokeninput" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="typeinput" size="5"></td></tr></table><br></center>';
    submit.innerHTML =
      '<center><button id="submit" value="Submit" onclick="verify()">Submit</button></center>';
    var pattern = /[^a-zA-Z ]/g;
    var str = corpus[1];
    var s1 = str.toLowerCase();
    s1 = s1.replace(pattern, '');
    var s2 = s1.split(' ');
    wordcount = s2.length; //***//
    var uniquewords = new Set(s2);
    uniquewordcount = uniquewords.size; //***//
    answer.innerHTML = '';
    manswer.innerHTML = '';
  }
  if (x == 'corpus3') {
    corpuscontent.innerHTML =
      corpus[2] +
      '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="tokeninput" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="typeinput" size="5"></td></tr></table><br></center>';
    submit.innerHTML =
      '<center><button id="submit" value="Submit" onclick="verify()">Submit</button></center>';
    var pattern = /[^a-zA-Z ]/g;
    var str = corpus[2];
    var s1 = str.toLowerCase();
    s1 = s1.replace(pattern, '');
    var s2 = s1.split(' ');
    wordcount = s2.length; //***//
    var uniquewords = new Set(s2);
    uniquewordcount = uniquewords.size; //***//
    answer.innerHTML = '';
    manswer.innerHTML = '';
  }
}
function exp() {
  subheading.innerHTML = 'Experiment';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    "<center><select id='corpus' onchange = 'drop()'><option value='select'>---Select a corpus---</option><option value='corpus1'>Corpus 1</option><option value='corpus2'>Corpus 2</option><option value='corpus3'>Corpus 3</option></select></center>";
}
