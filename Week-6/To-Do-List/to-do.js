const button = document
  .getElementById("liveToastBtn")
  .addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("task");
  const value = input.value.trim();

  if (value === "") {
    $(".toast.success").toast("hide");
    $(".toast.error").toast("show");
    return;
  }

  const list = document.querySelector("#list");
  let isDuplicate = false;
  const items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerText === value) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    $(".toast.success").toast("hide");
    $(".toast.error").text("Bu öğe zaten listeye eklenmiş.").toast("show");
  } else {
    const listDOM = document.createElement("li");
    listDOM.innerText = value;
    list.appendChild(listDOM);
    input.value = "";
    $(".toast.error").toast("hide");
    $(".toast.success").toast("show");
  }
  input.blur();
}
