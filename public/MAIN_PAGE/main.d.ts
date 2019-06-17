interface Mods {
    mods: {
        [name: string]: Mod
    };
}

interface Mod {
    name: string;
    description: string;
    licence: string | null;
    page: {
        name: string,
        url: string,
    }[];
    archive_link: string;
    hash: { [algorithm: string]: string };
    version: string;
}