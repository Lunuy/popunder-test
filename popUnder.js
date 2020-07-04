
function popUnder(url, options = "width=400,height=400") {
    const popup = window.open(url, "", options);
    const blank = window.open("");
    blank.close();
}