type RowObj = {
    type: string;
    label: string;
    maxSize: number;
    typeNumber: string;
};

const tableDataCheck: RowObj[] = [
    {
        type: 'text',
        label: 'Apa itu Hewan',
        maxSize: 10,
        typeNumber: null
    },
    {
        type: 'date',
        label: 'Apa itu Hewan',
        maxSize: null,
        typeNumber: null
    },
    {
        type: 'number',
        label: 'Apa itu Hewan',
        maxSize: null,
        typeNumber: 'number'
    }
];

export default tableDataCheck;
