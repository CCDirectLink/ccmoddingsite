/// <reference path="main.d.ts" />

window.onload = async () => {
    const list = document.getElementById('modlist');
    const itemTemplate = document.getElementById('modlist-item-template');

    if (!templateSupported()) {
        throw new Error('Template is not supported by this browser');
    }

    const response = await fetch('https://raw.githubusercontent.com/CCDirectLink/CCModDB/master/mods.json');
    /** @type {Mods} */
    const { mods } = await response.json();

    let first = true;
    for (const name in mods) {
        addItem(mods[name], first);
        first = false;
    }

    function templateSupported() {
        return 'content' in itemTemplate;
    }

    /**
     * 
     * @param {Mod} mod 
     * @param {boolean} first
     */
    function addItem(mod, first) {
        /** @type {HTMLLIElement} */
        const item = document.importNode(itemTemplate.content, true);

        item.querySelector('.name').innerText = mod.name;
        item.querySelector('span.mdl-list__item-sub-title').innerText = mod.description;
        item.querySelector('.github').href = mod.page[0].url;
        item.querySelector('.download').href = mod.archive_link;

        list.appendChild(item);
    }
}