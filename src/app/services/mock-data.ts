export const USER = {
  id: 1,
  name: 'Akshay Karande',
  username: 'akshay123',
};

export const INVESTORS = [
  {
    id: 1,
    name: 'ABC Capital',
    userId: 1,
    complianceId: 1,
  },
  {
    id: 2,
    name: 'XYZ Capital',
    userId: 1,
    complianceId: 1,
  },
];

const FILES = [
  {
    id: 1,
    name: 'One Page Summary',
    isDirectory: false,
    complianceId: 1,
    size: 158000,
    download: true,
    print: true,
  },
  {
    id: 2,
    name: 'Investor Presentation',
    isDirectory: false,
    complianceId: 1,
    size: 321000,
    download: false,
    print: false,
  },
  {
    id: 3,
    name: 'Terms Sheet',
    isDirectory: false,
    complianceId: 1,
    size: 123000,
    download: true,
    print: true,
  },
  {
    id: 4,
    name: 'One Page Summary',
    isDirectory: false,
    complianceId: 1,
    size: 74000,
    download: false,
    print: false,
  },
];

export const FOLDERS = [
  {
    id: 1,
    name: 'Z Capital Group',
    isDirectory: true,
    items: [
      {
        id: 11,
        name: 'Firm Overview',
        isDirectory: true,
        items: [
          {
            id: 111,
            name: 'Marketing Materials',
            isDirectory: true,
            items: FILES.slice(0, 2),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Private Equity Funds',
    isDirectory: true,
    items: [
      {
        id: 21,
        name: 'Z Capital SSF',
        isDirectory: true,
        items: [
          {
            id: 211,
            name: 'Legal Document',
            isDirectory: true,
            items: [
              ...FILES.slice(2),
              {
                id: 2111,
                name: 'Archive',
                isDirectory: true,
                items: FILES.slice(-1),
              },
            ],
          },
        ],
      },
    ],
  },
];

export const COMPLIANCE = {
  id: 1,
  text: '<p>\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis\ndis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet\npurus gravida quis blandit. Auctor urna nunc id cursus metus aliquam\neleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida.\nNullam vehicula ipsum a arcu. Nullam ac tortor vitae purus faucibus ornare\nsuspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui\nid ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit\nullamcorper dignissim.\n</p>\n<p>\nMauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.\nNeque volutpat ac tincidunt vitae semper quis lectus. Sed sed risus\npretium quam vulputate dignissim suspendisse in. Urna nec tincidunt\npraesent semper feugiat nibh sed pulvinar. Ultricies lacus sed turpis\ntincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet\njusto donec enim. Vestibulum rhoncus est pellentesque elit ullamcorper. Id\naliquet risus feugiat in ante metus dictum at.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis\ndis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet\npurus gravida quis blandit. Auctor urna nunc id cursus metus aliquam\neleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida.\nNullam vehicula ipsum a arcu. Nullam ac tortor vitae purus faucibus ornare\nsuspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui\nid ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit\nullamcorper dignissim.\n</p>\n<p>\nMauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.\nNeque volutpat ac tincidunt vitae semper quis lectus. Sed sed risus\npretium quam vulputate dignissim suspendisse in. Urna nec tincidunt\npraesent semper feugiat nibh sed pulvinar. Ultricies lacus sed turpis\ntincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet\njusto donec enim. Vestibulum rhoncus est pellentesque elit ullamcorper. Id\naliquet risus feugiat in ante metus dictum at.\n</p>',
};

export const FORM = {
  id: 1,
  name: 'Wire Instructions',
};

export const FORM_DATA = {
  id: 1,
  formId: 1,
  data: [
    {
      caption: 'Intermediary Bank',
      colCount: '2',
      colSpan: 12,
      itemType: 'group',
      items: [
        { dataField: 'BankName' },
        { dataField: 'ABA Swift Code' },
        { dataField: 'AccountName' },
        { dataField: 'Account Number' },
      ],
    },
    {
      caption: 'Beneficiary Bank',
      colCount: '2',
      colSpan: 12,
      itemType: 'group',
      items: [
        { dataField: 'BankName' },
        { dataField: 'ABA Swift Code' },
        { dataField: 'AccountName' },
        { dataField: 'Account Number' },
      ],
    },
    {
      caption: 'Ultimate Beneficiary',
      colSpan: 6,
      itemType: 'group',
      items: [
        { dataField: 'Name' },
        { dataField: 'Account Name' },
        { dataField: 'Account Number' },
      ],
    },
    {
      caption: 'For Future Credit To',
      colSpan: 6,
      itemType: 'group',
      items: [
        { dataField: 'Name' },
        { dataField: 'Account Name' },
        { dataField: 'Account Number' },
      ],
    },
    {
      caption: '',
      colCount: 2,
      colSpan: 12,
      itemType: 'group',
      items: [
        {
          dataField: 'Added/Confirmed',
          editorOptions: { items: [null, 'Added', 'Confirmed'] },
        },
      ],
    },
  ],
};
