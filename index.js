$("#liveToastBtn").click(() => {
  //function to collect api data when button is clicked and append it to html
  $("p").empty(); //removes content on what element you push it on.
  $.get("https://icanhazdadjoke.com/slack", (data) => {
    console.log(data.attachments[0].text);
    funnyjoke = data.attachments[0].text;
    $(".joke").append(`<p> ${funnyjoke} </p>`);
  });
});

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}
