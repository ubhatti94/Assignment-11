let savedState= {
    title:"",
    note:""
}

function onTextChange(obj) {
  var elem = obj.target;
  if (elem.old_value !== elem.value) {
    savedState[obj.target.id] = elem.old_value;
    elem.old_value = elem.value;
    window.localStorage.setItem(obj.target.id, elem.value);
    console.log("saved", elem.value);
  }
  return false;
}

//title
var title = document.getElementById("title");
if (title.addEventListener) {
  title.addEventListener("input", onTextChange.bind(title), false);
  title.addEventListener("keyup", onTextChange.bind(title), false);
  title.addEventListener("change", onTextChange.bind(title), false);
} else if (title.attachEvent) {
  title.attachEvent("onpropertychange", onTextChange.bind(title));
}

//note
var note = document.getElementById("note");
if (note.addEventListener) {
  note.addEventListener("input", onTextChange.bind(note), false);
  note.addEventListener("keyup", onTextChange.bind(note), false);
  note.addEventListener("change", onTextChange.bind(note), false);
} else if (title.attachEvent) {
  note.attachEvent("onpropertychange", onTextChange.bind(note));
}

var clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  console.log("cleared");
  localStorage.clear();
  let title = document.getElementById("title");
  let note = document.getElementById("note");
  title.value = "";
  note.value = "";
});

var undo = document.getElementById("undo");
undo.addEventListener("click", () => {
  console.log("undo");
  let title = document.getElementById("title");
  let note = document.getElementById("note");

  let tempTitle = title.value;
  let tempNote = note.value;

  title.value = savedState.title;
  note.value = savedState.note;

  savedState.title = tempTitle;
  savedState.note  = tempNote;

});
