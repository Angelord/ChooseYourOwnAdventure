var DESCR_GROUP_ID = "descr_group";
var OPTION_GROUP_ID = "option_group";

var curNode;
var descrProgress = 0;

main();

function main() {
    
    displayNode(STORY["entry"]);
}

function displayNode(storyNode) { 

    curNode = storyNode;
    descrProgress = 0;

    clearOptionBtns();

    $("#" + DESCR_GROUP_ID).fadeOut("fast", function() {
            $("#" + DESCR_GROUP_ID).empty();
            $("#" + DESCR_GROUP_ID).fadeIn(0);

            for(i = 0; i < storyNode.description.length; i++) {
                setTimeout( function() { expandDescription(storyNode) }, i * 800);
            }
        }
    );
}

function expandDescription(storyNode) {
    var storyNodeRef = storyNode ? storyNode : curNode;

    var descr = document.createElement("p");
    var id = "descr_" + descrProgress;
    descr.setAttribute("class", "primary");
    descr.setAttribute("id", id);
    descr.innerHTML = storyNodeRef.description[descrProgress];
    
    descrProgress++;
    var enableOptions = (descrProgress == storyNodeRef.description.length);

    $("#" + DESCR_GROUP_ID).append(descr);
    $("#" + id).fadeIn("slow", function() {
        if(enableOptions) {
            displayOptions();
        }
    }  
    );
}

function displayOptions(storyNode) {
    var storyNodeRef = storyNode ? storyNode : curNode;

    for(i = 0; i < storyNodeRef.options.length; i++) {
        addOptionBtn(storyNodeRef.options[i], i);
    }
}

function clearOptionBtns() {
    $("#" + OPTION_GROUP_ID).empty();
}

function addOptionBtn(option, index) {

    var btn = document.createElement("button");
    var btnTex = document.createTextNode(option.text);
    btn.appendChild(btnTex);
    btn.setAttribute("onclick", "onOptionClick("+ index +")");

    var spacer = document.createElement("div");
    spacer.classList.add("spacer");

    var divEl = document.getElementById(OPTION_GROUP_ID);
    divEl.appendChild(btn);
    divEl.appendChild(spacer);

    return btn;
}

function onOptionClick(optIndex) {
    if(curNode) {
        var newNode = curNode.options[optIndex].goto;
        displayNode(STORY[newNode]);
    }
}