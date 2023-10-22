const pickerOptions = { set: 'apple', onEmojiSelect: function(emoji) {
  const textbox = document.getElementById('textbox');
  const start = textbox.selectionStart;
  const end = textbox.selectionEnd;
  const text = textbox.value;
  const before = text.substring(0, start);
  const after = text.substring(end, text.length);
  textbox.value = before + emoji.native + after;
  
  // Atualiza a posição do cursor para depois do emoji inserido
  textbox.selectionStart = textbox.selectionEnd = start + emoji.native.length;
  
  document.querySelector("#emoji-picker").style.display = 'none';
} }
const picker = new EmojiMart.Picker(pickerOptions)

let pickerContainer = document.querySelector("#emoji-picker");
pickerContainer.appendChild(picker);

const button = document.getElementById('btnEmoji');
button.addEventListener('click', function(event) {
  event.stopPropagation();
  pickerContainer.style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnBold").addEventListener("click", function() {
      formatText('bold');
      console.log('teste');
  });
  document.getElementById("btnItalic").addEventListener("click", function() {
      formatText('italic');
  });
  document.getElementById("btnUnderline").addEventListener("click", function() {
      formatText('underline');
  });
  document.getElementById("reset").addEventListener("click", function() {
    var textarea = document.getElementById("textbox");
    textarea.value = ''; // Limpar o conteúdo do textarea
    Toastify({
      text: "Resetado",
      duration: 33000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #0367A6, #0367A6)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
});

  document.getElementById("copy").addEventListener("click", function() {
      var textarea = document.getElementById("textbox");
      var textoParaCopiar = textarea.value;
      navigator.clipboard.writeText(textoParaCopiar).then(function() {
        Toastify({
          text: "Texto copiado!",
          duration: 33000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #0367A6, #0367A6)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      }).catch(function(err) {
        //alert("Não foi possível copiar o texto: ", err);
        Toastify({
          text: "Não foi possível copiar o texto: " + err,
          duration: 33000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #0367A6, #0367A6)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      });
  });

  document.querySelector("#pos1").addEventListener('click', ()=>setTextToCurrentPos1());
  document.querySelector("#pos2").addEventListener('click', ()=>setTextToCurrentPos2());
  document.querySelector("#pos3").addEventListener('click', ()=>setTextToCurrentPos3());
  document.querySelector("#pos4").addEventListener('click', ()=>setTextToCurrentPos4());
  document.querySelector("#pos5").addEventListener('click', ()=>setTextToCurrentPos5());
  document.querySelector("#pos6").addEventListener('click', ()=>setTextToCurrentPos6());
  document.querySelector("#pos7").addEventListener('click', ()=>setTextToCurrentPos7());
  document.querySelector("#pos8").addEventListener('click', ()=>setTextToCurrentPos8());
  document.querySelector("#pos9").addEventListener('click', ()=>setTextToCurrentPos9());
  document.querySelector("#pos10").addEventListener('click', ()=>setTextToCurrentPos10());
  document.querySelector("#pos11").addEventListener('click', ()=>setTextToCurrentPos11());
  document.querySelector("#pos12").addEventListener('click', ()=>setTextToCurrentPos12());
  document.querySelector("#pos13").addEventListener('click', ()=>setTextToCurrentPos13());
  document.querySelector("#pos14").addEventListener('click', ()=>setTextToCurrentPos14());
  document.querySelector("#pos15").addEventListener('click', ()=>setTextToCurrentPos15());


const boldSansCharMap = {
  0: "𝟬",
  1: "𝟭",
  2: "𝟮",
  3: "𝟯",
  4: "𝟰",
  5: "𝟱",
  6: "𝟲",
  7: "𝟳",
  8: "𝟴",
  9: "𝟵",
  a: "𝗮",
  b: "𝗯",
  c: "𝗰",
  d: "𝗱",
  e: "𝗲",
  f: "𝗳",
  g: "𝗴",
  h: "𝗵",
  i: "𝗶",
  j: "𝗷",
  k: "𝗸",
  l: "𝗹",
  m: "𝗺",
  n: "𝗻",
  o: "𝗼",
  p: "𝗽",
  q: "𝗾",
  r: "𝗿",
  s: "𝘀",
  t: "𝘁",
  u: "𝘂",
  v: "𝘃",
  w: "𝘄",
  x: "𝘅",
  y: "𝘆",
  z: "𝘇",
  A: "𝗔",
  B: "𝗕",
  C: "𝗖",
  D: "𝗗",
  E: "𝗘",
  F: "𝗙",
  G: "𝗚",
  H: "𝗛",
  I: "𝗜",
  J: "𝗝",
  K: "𝗞",
  L: "𝗟",
  M: "𝗠",
  N: "𝗡",
  O: "𝗢",
  P: "𝗣",
  Q: "𝗤",
  R: "𝗥",
  S: "𝗦",
  T: "𝗧",
  U: "𝗨",
  V: "𝗩",
  W: "𝗪",
  X: "𝗫",
  Y: "𝗬",
  Z: "𝗭",
};
const italicCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝘢",
  b: "𝘣",
  c: "𝘤",
  d: "𝘥",
  e: "𝘦",
  f: "𝘧",
  g: "𝘨",
  h: "𝘩",
  i: "𝘪",
  j: "𝘫",
  k: "𝘬",
  l: "𝘭",
  m: "𝘮",
  n: "𝘯",
  o: "𝘰",
  p: "𝘱",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝘵",
  u: "𝘶",
  v: "𝘷",
  w: "𝘸",
  x: "𝘹",
  y: "𝘺",
  z: "𝘻",
  A: "𝘈",
  B: "𝘉",
  C: "𝘊",
  D: "𝘋",
  E: "𝘌",
  F: "𝘍",
  G: "𝘎",
  H: "𝘏",
  I: "𝘐",
  J: "𝘑",
  K: "𝘒",
  L: "𝘓",
  M: "𝘔",
  N: "𝘕",
  O: "𝘖",
  P: "𝘗",
  Q: "𝘘",
  R: "𝘙",
  S: "𝘚",
  T: "𝘛",
  U: "𝘜",
  V: "𝘝",
  W: "𝘞",
  X: "𝘟",
  Y: "𝘠",
  Z: "𝘡",
};

function underline(text) {
  return text.split("").join("̲") + "̲";
}

function applyCharMap(map, text) {
  let out = "";
  for (let c of text.split("")) {
    if (map[c] !== undefined) out += map[c];
    else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
    else out += c;
  }
  return out;
}

function formatText(type) {
  const textbox = document.getElementById("textbox");
  const selection = textbox.value.slice(
    textbox.selectionStart,
    textbox.selectionEnd
  );

  if (selection) {
    let formattedText;
    switch (type) {
      case "bold":
        formattedText = applyCharMap(boldSansCharMap, selection);
        break;
      case "italic":
        formattedText = applyCharMap(italicCharMap, selection);
        break;
      case "underline":
        formattedText = underline(selection);
        break;
      default:
        return;
    }
    insertTextAtSelection(textbox, formattedText);
  }
}

function insertTextAtSelection(textbox, text) {
  const before = textbox.value.substring(0, textbox.selectionStart);
  const after = textbox.value.substring(
    textbox.selectionEnd,
    textbox.value.length
  );
  textbox.value = before + text + after;
  textbox.selectionStart = before.length;
  textbox.selectionEnd = before.length + text.length;
}

function setTextToCurrentPos1() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " → " + x.slice(curPos);
}

function setTextToCurrentPos2() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ⇨ " + x.slice(curPos);
}

function setTextToCurrentPos3() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ⇝ " + x.slice(curPos);
}

function setTextToCurrentPos4() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ◆ " + x.slice(curPos);
}

function setTextToCurrentPos5() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ✦ " + x.slice(curPos);
}

function setTextToCurrentPos6() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ← " + x.slice(curPos);
}

function setTextToCurrentPos7() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ⇦ " + x.slice(curPos);
}

function setTextToCurrentPos8() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ⇜ " + x.slice(curPos);
}

function setTextToCurrentPos9() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ◈ " + x.slice(curPos);
}

function setTextToCurrentPos10() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ✧ " + x.slice(curPos);
}

function setTextToCurrentPos11() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " · " + x.slice(curPos);
}

function setTextToCurrentPos12() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " ◦ " + x.slice(curPos);
}

function setTextToCurrentPos13() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + " • " + x.slice(curPos);
}

function setTextToCurrentPos14() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + "❝" + x.slice(curPos);
}

function setTextToCurrentPos15() {
  let textbox = document.getElementById("textbox");
  let curPos = textbox.selectionStart;
  console.log(curPos);
  let x = textbox.value;
  textbox.value = x.slice(0, curPos) + "❞" + x.slice(curPos);
}


});