
const schema1 = `import { ISchema } from '@next-gen/formular-engine';

export const schema1: ISchema = {
    type: 'form',
    label: 'Formular',
    children: [
        {
            type: 'input',
            label: 'Name:',
            field: 'Erstes Feld',
            required: true,
        },
        {
            type: 'button',
            label: 'OK',
        }
    ]
}

`

export default schema1