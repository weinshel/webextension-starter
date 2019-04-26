async function runOnLoad() {
    console.log('this is a print statement!')

    const tabs = await browser.tabs.query({})
    const tabTitles = tabs.map(tab => tab.title)
    const tabTitleString = tabTitles.join(', ')
    document.getElementById('opentabs-content').innerHTML = tabTitleString

    const topSites = await browser.topSites.get()
    const topSitesTitles = topSites.map(site => site.title)
    const topSitesString = topSitesTitles.join(', ')
    document.getElementById('topsites-content').innerHTML = topSitesString
}

document.onload = runOnLoad()