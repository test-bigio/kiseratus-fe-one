type RowObj = {
    id: number;
    data: object;
};

const tableDataCheck: RowObj[] = [
    {
        id: 1,
        data: [
            {
                type: 'text',
                label: 'Apa itu Hewan',
                maxSize: 10,
                typeNumber: null,
                value: null
            }
        ]
    }
];

export default tableDataCheck;
