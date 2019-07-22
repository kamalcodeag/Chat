"use strict";



let specContainer = document.querySelector(".spec-container");
let specSupport = document.querySelector(".spec-support");
let specChatBox = document.querySelector(".spec-chat-box");

specSupport.onclick = function () {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-block");
    specSupport.classList.add("d-none");
}

let userInput = document.querySelector("#input");
let chatBoxMain = document.querySelector(".spec-chat-box-main");
let specSend = document.querySelector(".spec-send");

function SendMessage() {
    let mainValue = userInput.value.trim();

    if (mainValue !== "") 
    {
        let chatLineCustomer = document.createElement("div");
        let chatLineSupporter = document.createElement("div");

        if (mainValue[0].toUpperCase() !== mainValue[0]) {
            // let chatLineCustomer = document.createElement("div");
            chatLineCustomer.className = "p-2 d-flex align-items-center justify-content-end spec-message spec-chat-line-customer spec-hover";
            let customerMessage = document.createElement("p");
            customerMessage.className = "mb-0 pr-2 text-white";
            customerMessage.innerText = mainValue;
            let customerPhoto = document.createElement("img");
            customerPhoto.setAttribute("src", "img/customer.jpg");
            customerPhoto.setAttribute("class", "spec-customer");
            chatBoxMain.appendChild(chatLineCustomer);
            chatLineCustomer.appendChild(customerMessage);
            chatLineCustomer.appendChild(customerPhoto);
            userInput.value = "";
        }
        else {
            // let chatLineSupporter = document.createElement("div");
            chatLineSupporter.className = "py-2 px-3 d-flex align-items-center spec-message spec-chat-line-supporter spec-hover";
            let supporterPhoto = document.createElement("img");
            supporterPhoto.setAttribute("src", "img/supporter.jpg");
            supporterPhoto.setAttribute("class", "spec-supporter");
            let supporterMessage = document.createElement("p");
            supporterMessage.className = "mb-0 pl-2 text-white";
            supporterMessage.innerText = mainValue;
            chatBoxMain.appendChild(chatLineSupporter);
            chatLineSupporter.appendChild(supporterPhoto);
            chatLineSupporter.appendChild(supporterMessage);
            userInput.value = "";
        }

        // let specTopRight = document.querySelector(".spec-top-right");

        // chatLineCustomer.onclick = function () {
        //     specTopRight.classList.remove("d-none");
        //     specTopRight.classList.add("d-block");
        // }

        // chatLineSupporter.onclick = function () {
        //     specTopRight.classList.remove("d-none");
        //     specTopRight.classList.add("d-block");
        // }

        let specTopRight = document.querySelector(".spec-top-right");
        let specMessage = document.querySelectorAll(".spec-message");

        [...specMessage].map(message => 
        { 
            message.onclick = function()
            {
                this.classList.toggle("spec-selected");
                specTopRight.classList.remove("d-block");

                for(let i=0; i<specMessage.length; i++)
                {
                    if(specMessage[i].classList.contains("spec-selected"))
                    {
                        specTopRight.classList.add("d-block");
                    }
                }
            }

        })

        specTopRight.onclick = function()
        {
            [...document.querySelectorAll(".spec-selected")].map(message => message.remove());
        }

        
        specChatBox.scrollTo(0, specChatBox.scrollHeight);

    }
}

userInput.onkeydown = function (e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
        SendMessage();
    }
    else if (e.keyCode === 27) {
        userInput.value = "";
    }
    else {
        return;
    }
}

specSend.onclick = function (e) {
    SendMessage();
}





