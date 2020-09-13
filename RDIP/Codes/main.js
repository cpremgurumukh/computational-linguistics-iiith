var eng = [
  [
    'John ate an apple before afternoon',
    'before afternoon John ate an apple',
    'John before afternoon ate an apple',
  ],
  [
    'some students like to study in the night',
    'at night some students like to study',
  ],
  ['John and Mary went to church', 'Mary and John went to church'],
  [
    'John went to church after eating',
    'after eating John went to church',
    'John after eating went to church',
  ],
  ['did he go to market', 'he did go to market'],
  [
    'the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
    'my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics',
  ],
  [
    'John goes to the library and studies',
    'John studies and goes to the library',
  ],
  ['John ate an apple so did she', 'she ate an apple so did John'],
  [
    'the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',
    'after she noticed the error the teacher returned the book',
  ],
  [
    'I told her that I bought a book yesterday',
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book',
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her',
  ],
];

var hin = [
  [
    'राम और श्याम बाजार गयें',
    'राम और श्याम गयें बाजार',
    'बाजार गयें राम और श्याम',
    'गयें बाजार राम और श्याम',
  ],
  [
    'राम सोया और श्याम भी',
    'श्याम सोया और राम भी',
    'सोया श्याम और राम भी',
    'सोया राम और श्याम भी',
  ],
  [
    'मैंने उसे बताया कि राम सो रहा है',
    'मैंने उसे बताया कि सो रहा है राम',
    'उसे मैंने बताया कि राम सो रहा है',
    'उसे मैंने बताया कि सो रहा है राम',
    'मैंने बताया उसे कि राम सो रहा है',
    'मैंने बताया उसे कि सो रहा है राम',
    'उसे बताया मैंने कि राम सो रहा है',
    'उसे बताया मैंने कि सो रहा है राम',
    'बताया मैंने उसे कि राम सो रहा है',
    'बताया मैंने उसे कि सो रहा है राम',
    'बताया उसे मैंने कि राम सो रहा है',
    'बताया उसे मैंने कि सो रहा है राम',
  ],
  [
    'राम खाकर सोया',
    'खाकर राम सोया',
    'राम सोया खाकर',
    'खाकर सोया राम',
    'सोया राम खाकर',
    'सोया खाकर राम',
  ],
  [
    'बिल्लियों को मारकर कुत्ता सो गया',
    'मारकर बिल्लियों को कुत्ता सो गया',
    'बिल्लियों को मारकर सो गया कुत्ता',
    'मारकर बिल्लियों को सो गया कुत्ता',
    'कुत्ता सो गया बिल्लियों को मारकर',
    'कुत्ता सो गया मारकर बिल्लियों को',
    'सो गया कुत्ता बिल्लियों को मारकर',
    'सो गया कुत्ता मारकर बिल्लियों को',
  ],
  [
    'एक लाल किताब वहाँ है',
    'एक लाल किताब है वहाँ',
    'वहाँ है एक लाल किताब',
    'है वहाँ एक लाल किताब',
  ],
  [
    'एक बड़ी सी किताब वहाँ है',
    'एक बड़ी सी किताब है वहाँ',
    'बड़ी सी एक किताब वहाँ है',
    'बड़ी सी एक किताब है वहाँ',
    'वहाँ है एक बड़ी सी किताब',
    'वहाँ है बड़ी सी एक किताब',
    'है वहाँ एक बड़ी सी किताब',
    'है वहाँ बड़ी सी एक किताब',
  ],
];
/* ---------- */

var heading = document.getElementById('head');
var desc = document.getElementById('desc');
var desc2 = document.getElementById('desc2');
var select = document.getElementById('selec');
var seldesc = document.getElementById('selec1');
var desc3 = document.getElementById('desc3');
var desc4 = document.getElementById('desc4');
var sentence = document.getElementById('statement');
var reform = document.getElementById('form');
var correctness = document.getElementById('correctnesspara');
var res = document.getElementById('result');
var correctanswers = document.getElementById('correctansp');
var j, btncount, r;
var finalsentence = '';
var clickcount = 0;
var x;
var answers = '';

function Randomizerfun(jumbled) {
  var jumble = jumbled.split(' ');
  var i = jumble.length,
    temp,
    randomi;
  while (0 !== i) {
    randomi = Math.floor(Math.random() * i);
    i -= 1;
    temp = jumble[i];
    jumble[i] = jumble[randomi];
    jumble[randomi] = temp;
  }
  return jumble;
}
function Getcorrect() {
  correctanswers.style.display = '';
  res.innerHTML =
    "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='showansbtn' onclick='Hidecorrect()'>Hide correct sentence</button></center>";
}
function Hidecorrect() {
  res.innerHTML =
    "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='showansbtn' onclick='Getcorrect()'>GET ANSWERS</button></center>";
  correctanswers.style.display = 'none';
}
function Getcorrectans() {
  answers = '';
  var totalanswers = 0;
  correctanswers.innerHTML = '';
  if (x == 'english') {
    totalanswers = eng[r].length - 1;
    res.innerHTML =
      "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='showansbtn' onclick='Hidecorrect()'>Hide correct sentence</button></center>";
    for (i = 0; i <= totalanswers; i++) {
      answers += '<center>' + eng[r][i] + '<br></center>';
    }
    correctanswers.style.display = '';
    correctanswers.innerHTML = answers;
  } else if (x == 'hindi') {
    totalanswers = hin[r].length - 1;
    res.innerHTML =
      "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='showansbtn' onclick='Hidecorrect()'>Hide correct sentence</button></center>";
    for (i = 0; i <= totalanswers; i++) {
      answers += '<center>' + hin[r][i] + '<br></center>';
    }
    correctanswers.style.display = '';
    correctanswers.innerHTML = answers;
  }
}
function Correction() {
  var fs = finalsentence.trim();
  var result;
  correctanswers.innerHTML = '';
  //answers="";
  if (x == 'english') result = eng[r].includes(fs);
  else if (x == 'hindi') result = hin[r].includes(fs);

  if (result == true)
    res.innerHTML =
      "<center><font color = 'green'>Right Answer!!!</font></center>";
  else
    res.innerHTML =
      "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='showansbtn' onclick='Getcorrectans()'>GET CORRECT SENTENCE</button></center>";
}
function Reformsentence() {
  for (i = 0; i <= j.length - 1; i++) {
    document.getElementById('btn' + i).style.display = '';
  }
  finalsentence = '';
  sentence.innerHTML = finalsentence;
  reform.innerHTML = '';
  desc4.innerHTML = '';
  correctness.innerHTML = '';
  clickcount = 0;
  res.innerHTML = '';
  answers = '';
  correctanswers.innerHTML = '';
}

function Sentenceformation(id, value) {
  desc4.style.textAlign = 'center';
  desc4.innerHTML =
    "<br><font color='darkblue'><b>Formed Sentence</b></font><font color='blue'> <i>(after selecting words):</i></font><br>";
  finalsentence += value + ' ';
  sentence.style.textAlign = 'center';
  sentence.innerHTML = finalsentence;
  document.getElementById(id).style.display = 'none';
  reform.innerHTML =
    "<center><button id='refornbtn' onclick='Reformsentence()'>Re-form the sentence</button></center>";
  clickcount++;
  if (btncount == clickcount) {
    correctness.innerHTML =
      "<center><button id='correctnessbtn' onclick='Correction()'>Check the sentence</button></center>";
  }
}
function Dropdownmenu() {
  x = '';
  x = document.getElementById('lang').value;
  if (x == 'select') {
    answers = '';
    correctanswers.innerHTML = '';
    clickcount = 0;
    btncount = 0;
    seldesc.innerHTML = '';
    desc3.innerHTML = '';
    desc2.innerHTML = '';
    desc4.innerHTML = '';
    desc4.style.textAlign = 'left';
    sentence.innerHTML = '';
    reform.innerHTML = '';
    correctness.innerHTML = '';
    res.innerHTML = '';
  }
  if (x == 'english') {
    answers = '';
    correctanswers.innerHTML = '';
    reform.innerHTML = '';
    sentence.innerHTML = '';
    correctness.innerHTML = '';
    desc4.innerHTML = '';
    finalsentence = '';
    res.innerHTML = '';
    seldesc.innerHTML =
      '<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>';
    desc3.style.color = 'blue';
    desc3.innerHTML =
      '<center><i>(select the buttons in proper order)</i></center>';
    r = Math.floor(Math.random() * 9);
    var jumbled = eng[r][0];
    j = Randomizerfun(jumbled);
    desc2.style.textAlign = 'center';
    var b = '';
    var bs = '';
    clickcount = 0;
    btncount = 0;
    for (i = 0; i <= j.length - 1; i++) {
      val = j[i];
      b =
        "  <button id='btn" +
        i +
        "'onclick='Sentenceformation(this.id,this.value)' value='" +
        val +
        "'>" +
        val +
        '</button>  ';
      bs += b;
      btncount++;
    }
    desc2.innerHTML = bs.trim();
  }
  if (x == 'hindi') {
    answers = '';
    correctanswers.innerHTML = '';
    reform.innerHTML = '';
    sentence.innerHTML = '';
    correctness.innerHTML = '';
    desc4.innerHTML = '';
    finalsentence = '';
    res.innerHTML = '';
    seldesc.innerHTML =
      '<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>';
    desc3.style.color = 'blue';
    desc3.innerHTML =
      '<center><i>(select the buttons in proper order)</i></center>';
    r = Math.floor(Math.random() * 6);
    var jumbled = hin[r][0];
    j = Randomizerfun(jumbled);
    desc2.style.textAlign = 'center';
    var b = '';
    var bs = '';
    btncount = 0;
    clickcount = 0;
    for (i = 0; i <= j.length - 1; i++) {
      val = j[i];
      b =
        "  <button id='btn" +
        i +
        "'onclick='Sentenceformation(this.id,this.value)' value='" +
        val +
        "'>" +
        val +
        '</button>  ';
      bs += b;
      btncount++;
    }
    desc2.innerHTML = bs.trim();
  }
}
function experiment() {
  heading.innerHTML = 'Experiment';
  select.innerHTML =
    "<select id='lang' onchange = 'Dropdownmenu()'><option value='select'>---Select Language---</option><option value='english'>English</option><option value='hindi'>Hindi</option></select>";
  seldesc.innerHTML = '';
  desc3.innerHTML = '';
  desc.innerHTML = '';
  desc2.innerHTML = '';
  desc4.innerHTML = '';
  desc4.style.textAlign = 'left';
  sentence.innerHTML = '';
  reform.innerHTML = '';
  correctness.innerHTML = '';
  res.innerHTML = '';
  answers = '';
  correctanswers.innerHTML = '';
}
