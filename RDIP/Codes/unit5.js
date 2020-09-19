var corpus = [
  'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
  'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
  'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.',
];
var stemmer = new Snowball('English');

var subheading = document.getElementById('head');
var description = document.getElementById('desc');
var corpuscontent = document.getElementById('corpus');
var answer = document.getElementById('ans');
var submit = document.getElementById('sub');
var nanswer = document.getElementById('answer');
var x, wordcount, uniquewordcount, newtypecount;

function clearf() {
  subheading.innerHTML = '';
  description.innerHTML = '';
  corpuscontent.innerHTML = '';
  answer.innerHTML = '';
  submit.innerHTML = '';
  nanswer.innerHTML = '';
}

function intro() {
  subheading.innerHTML = 'Introduction';
  description.style.margin = '0px 5px';
  description.innerHTML =
    'Tokens correspond to the total number of word counts in a text while type corresponds to the total count of unique words in a text.<br><br>';
  document.getElementById('image1').style.display = '';
}
function theory() {
  description.style.margin = '0px 0px';
  subheading.innerHTML = 'Theory';
  document.getElementById('image1').style.display = 'none';
  var extra =
    "<b>Type vs token distinction</b><br><br>The type/token distinction is related to that between universals and particulars. Tokens are concrete particular instances of a general and abstract type.<br>There is only one word 'the' (type) but many instances of it found on this page (token).<br>For eg:<ul><li>Beethovenâ??s Fifth Symphony and performances of it</li><li>the white elephant and specimens of it</li><li>Kentucky Fried Chicken and its centres</li><br><b>Types - (continued)</b><br><br>Study this example again: Do not waste time as wasting time does a lot of harm.<br><br>Now, we notice that 'waste' and 'wasting' share a common root. So do 'do' and 'does'.<br>Do we consider them as different types? The second approach is to consider them as a single type as inflections(different grammatical forms) of the same word (type).<br>Therefore,<br>#tokens=12 #types(root)=9</ul>";
  description.innerHTML =
    '<b>Definition</b><br><br><b>Tokens</b> correspond to the total number of word counts in a text while type corresponds to the total count of unique words in a text. We can say that language consists of various types of words and all the particular instances of these words are called tokens.<br><br>For Eg: Do not waste time as wasting time does a lot of harm.<br><br>Here,<br>#tokens=12<br>#types=11 (time has been repeated twice)<br><br>' +
    extra;
}
function objective() {
  subheading.innerHTML = 'Objective';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    '<br><hr><br>The objective of this experiment is to impart basic knowledge about the distinction between types and tokens.<br><br><hr>';
}

function comparen(l) {
  var f = isNaN(newtypecount);
  if (f) {
    alert('Please enter a valid number as input');
    return;
  }
  if (l == newtypecount) {
    document.getElementById('newtypeinput').style.backgroundColor = 'Green';
    nanswer.innerHTML =
      "<center><font color='Green' size='5px'>Right Answer</center>";
  } else {
    document.getElementById('newtypeinput').style.backgroundColor = 'Red';
    nanswer.innerHTML =
      "<center><font color='Red' size='5px'>Wrong Answer</center>";
  }
}

function stem() {
  newtypecount = document.getElementById('newtypeinput').value;
  var stemstring = '';
  if (x == 'corpus1') stemstring = corpus[0];
  if (x == 'corpus2') stemstring = corpus[1];
  if (x == 'corpus3') stemstring = corpus[2];

  stemstring = stemstring.replace(/[^a-zA-Z ]/g, '');
  stemstring = stemstring.toLowerCase();
  var stemstring1 = stemstring.split(' ');
  var str = [];
  var j = 0;
  for (i = 0; i < stemstring1.length; i++) {
    if (
      stemstring1[i] == 'the' ||
      stemstring1[i] == 'of' ||
      stemstring1[i] == 'to' ||
      stemstring1[i] == 'very' ||
      stemstring1[i] == 'does' ||
      stemstring1[i] == 'off' ||
      stemstring1[i] == 'me' ||
      stemstring1[i] == 'you' ||
      stemstring1[i] == 'up' ||
      stemstring1[i] == 'can' ||
      stemstring1[i] == 'than' ||
      stemstring1[i] == 'did'
    ) {
      continue;
    } else {
      stemmer.setCurrent(stemstring1[i]);
      stemmer.stem();
      str[j] = stemmer.getCurrent();
      j++;
    }
  }
  str = new Set(str);
  str = Array.from(str);
  comparen(str.length);
}

function continuebutton() {
  submit.innerHTML =
    "<br><center>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.<br><br>#new types:<br><input type='text' id='newtypeinput'></center>";
  answer.innerHTML =
    "<center><button id='submit1' value='Submit' onclick='stem()'>Submit</button></center>";
}

function ver() {
  var tokens = document.getElementById('tokeninput').value;
  var types = document.getElementById('typeinput').value;
  var f1 = isNaN(tokens);
  var f2 = isNaN(types);
  if (f1 || f2) {
    alert('Please enter a valid number in both the input');
    return;
  }
  if (wordcount == tokens) {
    document.getElementById('tokeninput').style.backgroundColor = 'Green';
  } else {
    document.getElementById('tokeninput').style.backgroundColor = 'Red';
  }

  if (uniquewordcount == types) {
    document.getElementById('typeinput').style.backgroundColor = 'Green';
  } else {
    document.getElementById('typeinput').style.backgroundColor = 'Red';
  }
  if (wordcount == tokens && uniquewordcount == types) {
    answer.innerHTML =
      "<center><font color='Green' style = 'font-size:20px'>Right answer</font><br><br><button id='continue' onclick='continuebutton()'>Continue</button></center>";
  } else {
    answer.innerHTML =
      "<center><font color='Red' style = 'font-size:20px'>Wrong answer</font></center>";
  }
}

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
      '<center><button id="submit" value="Submit" onclick="ver()">Submit</button></center>';
    var pattern = /[^a-zA-Z ]/g;
    var str = corpus[0];
    var s1 = str.toLowerCase();
    s1 = s1.replace(pattern, '');
    var s2 = s1.split(' ');
    wordcount = s2.length; //*******************//
    var uniquewords = new Set(s2);
    uniquewordcount = uniquewords.size; //*******************//
    answer.innerHTML = '';
    nanswer.innerHTML = '';
  }
  if (x == 'corpus2') {
    corpuscontent.innerHTML =
      corpus[1] +
      '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="tokeninput" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="typeinput" size="5"></td></tr></table><br></center>';
    submit.innerHTML =
      '<center><button id="submit" value="Submit" onclick="ver()">Submit</button></center>';
    var pattern = /[^a-zA-Z ]/g;
    var str = corpus[1];
    var s1 = str.toLowerCase();
    s1 = s1.replace(pattern, '');
    var s2 = s1.split(' ');
    wordcount = s2.length; //*******************//
    var uniquewords = new Set(s2);
    uniquewordcount = uniquewords.size; //*******************//
    answer.innerHTML = '';
    nanswer.innerHTML = '';
  }
  if (x == 'corpus3') {
    corpuscontent.innerHTML =
      corpus[2] +
      '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="tokeninput" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="typeinput" size="5"></td></tr></table><br></center>';
    submit.innerHTML =
      '<center><button id="submit" value="Submit" onclick="ver()">Submit</button></center>';
    var pattern = /[^a-zA-Z ]/g;
    var str = corpus[2];
    var s1 = str.toLowerCase();
    s1 = s1.replace(pattern, '');
    var s2 = s1.split(' ');
    wordcount = s2.length; //*******************//
    var uniquewords = new Set(s2);
    uniquewordcount = uniquewords.size; //*******************//
    answer.innerHTML = '';
    nanswer.innerHTML = '';
  }
}
function experiment() {
  subheading.innerHTML = 'Experiment';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    "<center><select id='corpus' onchange = 'drop()'><option value='select'>---Select a corpus---</option><option value='corpus1'>Corpus 1</option><option value='corpus2'>Corpus 2</option><option value='corpus3'>Corpus 3</option></select></center>";
}

function quiz() {
  subheading.innerHTML = 'Quizzes';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    'Give number of types and tokens for the following sentences:<ol><li>What did you do?</li><li>Two and two makes four.</li><li>Ram eats an apple afteat eating a banana.</li><li>April will come here after 10th of April.</li><li>John drinks tea and George takes cold drink.</li></ol>';
}
function procedure() {
  subheading.innerHTML = 'Procedure';
  description.style.margin = '0px 0px';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    '<b><u>STEP1 :</u></b> Select the corpus.<br><b><u>STEP2 :</u></b> Submit the number of tokens and types in the given text box.<br><b><u>STEP3 :</u></b> If your answer is correct, you can enter the number of types of root and check your answer.';
}
