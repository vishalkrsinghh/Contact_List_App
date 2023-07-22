let edit = document.getElementsByClassName("edit");
let nme = document.getElementsByClassName("nme");
let phne = document.getElementsByClassName("phne");
let tk1 = document.getElementsByClassName("tk1");
let tk2 = document.getElementsByClassName("tk2");
let fa_trash_can = document.getElementsByClassName("fa-trash-can");
let td1= document.getElementsByClassName("td1");


for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
        let textName = nme[i].innerText;
        let textPhone = phne[i].innerText;
        nme[i].innerHTML = `<form action="/update/${i}" method="post" class="form" style=" border: 1px solid; width: fit-content;"><input type="text" name="contactName" class="NAME" placeholder="Name here" required maxlength="24" value="${textName}" size="10"> <button type="submit" class="tickBtn"><i class="fa-solid fa-check fa-sm tk1"></i></button> </form>`
        phne[i].innerHTML = `<form action="/update/${i}" method="post" class="form" style=" border: 1px solid; width: fit-content;"><input type="text" name="phone" placeholder="Mobile No." class="PHONE" required minlength="10" maxlength="10" size="10" value="${textPhone}"> <button type="submit" class="tickBtn"><i class="fa-solid fa-check fa-sm tk2"></i></button> </form>`

        let NAME = document.getElementsByClassName("NAME");
        let PHONE = document.getElementsByClassName("PHONE");
        for (let j = 0; j < PHONE.length; j++) {
            PHONE[j].onfocus = function () {
                for (let jj = 0; jj < PHONE.length; jj++) {
                    tk2[jj].style.display = "none";
                    tk1[jj].style.display = "none";
                }
                tk2[j].style.display = "inline";
            }
            tk2[j].style.display = "none";
            tk1[j].style.display = "none";
        }
        for (let k = 0; k < NAME.length; k++) {
            NAME[k].onfocus = function () {
                for (let kk = 0; kk < NAME.length; kk++) {
                    tk2[kk].style.display = "none";
                    tk1[kk].style.display = "none";
                }
                tk1[k].style.display = "inline";
            }
        }
        fa_trash_can[i].style.display = "none";
        edit[i].style.display = "none";
    }
}