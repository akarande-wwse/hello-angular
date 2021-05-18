export const GROUPS = [
  {
    id: 1,
    name: 'Z Capital Group',
    categories: [
      {
        id: 11,
        name: 'Firm Overview',
        folders: [
          {
            id: 111,
            name: 'Marketing Materials',
            documents: [
              {
                id: 1111,
                name: 'One Page Summary',
              },
              {
                id: 1112,
                name: 'Investor Presentation',
              },
              {
                id: 1113,
                name: 'Terms Sheet',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Private Equity Funds',
    categories: [
      {
        id: 21,
        name: 'Z Capital SSF',
        folders: [
          {
            id: 211,
            name: 'Legal Document',
            documents: [
              {
                id: 2111,
                name: 'One Page Summary',
              },
              {
                id: 2112,
                name: 'Investor Presentation',
              },
              {
                id: 2113,
                name: 'Terms Sheet',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const FORMS = {
  general: {
    bankName: '',
    accountName: '',
    accountNumber: '',
  },
  taxInfo: {
    bankName: '',
    accountName: '',
    accountNumber: '',
  },
};
