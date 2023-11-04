export interface INavItem {id: number, path: string, pathName: string};

interface INavItems { admin: INavItem[], user: INavItem[]};

export const navItems: INavItems = {
    admin: [
        {id: 1, path: "kategorije-pica", pathName: "Kategorije pića"},
        {id: 2, path: "popis-pica", pathName: "Popis pića"},
        {id: 3, path: "zaposlenici", pathName: "Zaposlenici"},
        {id: 4, path: "blagajna", pathName: "Blagajna"},
        {id: 5, path: "upute", pathName: "Upute"},
    ],
    user: [
        {id: 1, path: "", pathName: ""},
        {id: 2, path: "", pathName: ""},
    ]
};
