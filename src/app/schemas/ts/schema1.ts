import { ISchema } from '@next-gen/formular-engine';

export const schema1: ISchema = {
    type: 'form',
    label: 'Formular',
    children: [
        {
            type: 'input',
            label: 'Name:',
            field: 'Erstes Feld',
        },
        {
            type: 'input',
            label: 'Adresse:',
            multiline: true,
            field: 'Erstes Feld',
        },
        {
            type: 'button',
            label: 'OK',
        }
    ]
}

