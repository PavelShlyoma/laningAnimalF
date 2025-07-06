function openCatalog(evt, tabname) {
    let i, tabcontent, tablinks, openTabs;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    tablinks = document.getElementsByClassName("catalog-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    openTabs = document.getElementById(tabname);
    openTabs.className += " active";
    evt.currentTarget.className += " active";
}
