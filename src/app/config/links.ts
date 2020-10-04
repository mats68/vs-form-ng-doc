export interface ILink {
    id: number,
    link: string,
    label: string,
    fragment?: string,
    children?: ILinks,
}
export interface ILinks extends Array<ILink> { }

export const AppLinks: ILinks = [
    {
        id: 1,
        link: '',
        label: 'Features',
    },
    {
        id: 2,
        link: 'installation',
        label: 'Installation',
        children: [
            {
                id: 201,
                link: 'installation',
                fragment: 'install',
                label: 'Installation',
            },
            {
                id: 202,
                link: 'installation',
                fragment: 'basic-usage',
                label: 'Basic Usage',
            }
        ]
    },
    {
        id: 3,
        link: 'concepts',
        label: 'Concepts',
    },
    {
        id: 4,
        link: 'api',
        label: 'API',
    },
]