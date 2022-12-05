browser.menus.create({
    id: "imgops-finder",
    title: "Search with ImgOps",
    contexts: ["image"]
    });
    
    browser.menus.onClicked.addListener(async function (info, tab) {
    if (info.menuItemId == "imgops-finder") {
        if (info.srcUrl) {
            let newTab = await browser.tabs.create({ 'active': true, 'url': "https://imgops.com/"+info.srcUrl, 'index': tab.index+1 });
            }
    }
    });