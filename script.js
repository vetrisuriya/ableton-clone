let liEl = document.querySelector("header .primary__nav ul:first-child li:last-child");
let subheaderEl = document.querySelector("header .primary__subheader");

liEl.addEventListener("click", function(el) {
    subheaderEl.classList.toggle("more__view");

    let classVal = liEl.querySelector("span").className;

    if(classVal.includes("plus")) {
        liEl.querySelector("span").className = "fa fa-minus";
    }
    else {
        liEl.querySelector("span").className = "fa fa-plus";
    }
})


//  mobile menu
let mobileBtn = document.querySelector(".mobile__btn");
let mobileBtnParent = mobileBtn.parentElement;
let mobileNav = document.querySelector(".responsive__nav");

mobileBtn.addEventListener("click", function() {
    mobileBtnParent.classList.toggle("mobile__logo-active");
    mobileNav.classList.toggle("mobile__nav-active");

    if(mobileBtn.querySelector("span").className.includes("down")) {
        mobileBtn.querySelector("span").className = "fa fa-caret-up";
    }
    else {
        mobileBtn.querySelector("span").className = "fa fa-caret-down";
    }
})