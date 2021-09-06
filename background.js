console.log("background running........");

chrome.browserAction.onClicked.addListener(buttonclick);

function buttonclick(tab){
    console.log("button cicked.....");
    getvalues();
}
function storeValues(Windows){
    console.log(Windows.length);
    chrome.storage.local.set({Recrntwindows:Windows });
}
    
  function getvalues(){  
      console.log("insidde........getvalues");
      chrome.storage.local.get(['Recrntwindows'], function(result) {
         let windowsarray=result.Recrntwindows;
        for( let i=0;i<windowsarray.length;i++){
            console.log(windowsarray[i].id)
            
           let alltabs=windowsarray[i].tabs;
        
           for(let j=0;j<alltabs.length;j++){
               console.log(alltabs[j].url)
           }
        }
    });
}


chrome.windows.getAll({"populate":true},function(allWindows){
console.log(allWindows.length);
storeValues(allWindows);

});

