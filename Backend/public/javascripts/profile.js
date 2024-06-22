document.querySelector(".pen-icon").addEventListener("click",() => {
    document.querySelector(".formfile input").click();
});

document.querySelector(".formfile input").addEventListener("change",() => {
    document.querySelector(".formfile").submit();
});