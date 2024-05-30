/* eslint-disable no-use-before-define */
interface Movie {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    isPlatformClient: boolean;
    user: {
      typeId: string;
      id: string;
    };
  };
  createdBy: {
    isPlatformClient: boolean;
    user: {
      typeId: string;
      id: string;
    };
  };
  productType: {
    typeId: string;
    id: string;
  };
  masterData: {
    current: MovieData;
    staged: MovieData;
    published: boolean;
    hasStagedChanges: boolean;
  };
  key: string;
  priceMode: string;
  lastVariantId: number;
}

interface MovieData {
  name: {
    'en-US': string;
  };
  categories: string[];
  categoryOrderHints: object;
  slug: {
    'en-US': string;
  };
  metaTitle: {
    'en-US': string;
  };
  metaDescription: {
    'en-US': string;
  };
  masterVariant: {
    id: number;
    sku: string;
    key: string;
    prices: PriceObject[];
    images: ImageMovie[];
    attributes: AttributeMovie[];
    assets: [];
    availability: {
      isOnStock: boolean;
      availableQuantity: number;
      version: number;
      id: string;
    };
  };
  variants: [];
  searchKeywords: object;
}

interface PriceObject {
  id: string;
  value: PriceValue;
  discounted: {
    value: PriceValue;
    discount: {
      typeId: string;
      id: string;
    };
  };
}

interface PriceValue {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

interface ImageMovie {
  url: string;
  dimensions: {
    w: number;
    h: number;
  };
}

export interface AttributeMovie {
  name: string;
  value: string;
}

export const movie: Movie = {
  id: '9bbd415f-8e50-437d-91b8-9f7fc2ca7098',
  version: 17,
  versionModifiedAt: '2024-05-29T14:19:30.595Z',
  lastMessageSequenceNumber: 8,
  createdAt: '2024-05-25T18:27:58.979Z',
  lastModifiedAt: '2024-05-29T14:19:30.595Z',
  lastModifiedBy: {
    isPlatformClient: true,
    user: {
      typeId: 'user',
      id: '8ef03768-83fd-4d1b-891b-95f977f14719',
    },
  },
  createdBy: {
    isPlatformClient: true,
    user: {
      typeId: 'user',
      id: '8ef03768-83fd-4d1b-891b-95f977f14719',
    },
  },
  productType: {
    typeId: 'product-type',
    id: '8b16ac3f-506a-4782-ad30-f73f19cd382e',
  },
  masterData: {
    current: {
      name: {
        'en-US': 'The Shawshank Redemption',
      },
      categories: [],
      categoryOrderHints: {},
      slug: {
        'en-US': 'the-shawshank-redemption',
      },
      metaTitle: {
        'en-US': '',
      },
      metaDescription: {
        'en-US': '',
      },
      masterVariant: {
        id: 1,
        sku: 'ED-STD',
        key: 'standart',
        prices: [
          {
            id: 'bae6ef71-3942-4763-8ebb-98c66d0bdc9c',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 1099,
              fractionDigits: 2,
            },
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 934,
                fractionDigits: 2,
              },
              discount: {
                typeId: 'product-discount',
                id: '43462069-bba0-4ea2-9481-2ea27debf134',
              },
            },
          },
        ],
        images: [
          {
            url: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
            dimensions: {
              w: 1200,
              h: 1800,
            },
          },
          {
            url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/09/09/ShawshankRedempt_184Pyxurz.jpg',
            dimensions: {
              w: 1600,
              h: 1049,
            },
          },
        ],
        attributes: [
          {
            name: 'duration',
            value: '2h 22m',
          },
          {
            name: 'description',
            value:
              'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
          },
          {
            name: 'casts',
            value: 'Tim Robbins, Morgan Freeman, Bob Gunton',
          },
          {
            name: 'country',
            value: 'USA',
          },
        ],
        assets: [],
        availability: {
          isOnStock: true,
          availableQuantity: 10,
          version: 1,
          id: 'f4b9ff8a-6371-463b-bf91-9448cce3b617',
        },
      },
      variants: [],
      searchKeywords: {},
    },
    staged: {
      name: {
        'en-US': 'The Shawshank Redemption',
      },
      categories: [],
      categoryOrderHints: {},
      slug: {
        'en-US': 'the-shawshank-redemption',
      },
      metaTitle: {
        'en-US': '',
      },
      metaDescription: {
        'en-US': '',
      },
      masterVariant: {
        id: 1,
        sku: 'ED-STD',
        key: 'standart',
        prices: [
          {
            id: 'bae6ef71-3942-4763-8ebb-98c66d0bdc9c',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 1099,
              fractionDigits: 2,
            },
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 934,
                fractionDigits: 2,
              },
              discount: {
                typeId: 'product-discount',
                id: '43462069-bba0-4ea2-9481-2ea27debf134',
              },
            },
          },
        ],
        images: [
          {
            url: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
            dimensions: {
              w: 1200,
              h: 1800,
            },
          },
          {
            url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/09/09/ShawshankRedempt_184Pyxurz.jpg',
            dimensions: {
              w: 1600,
              h: 1049,
            },
          },
        ],
        attributes: [
          {
            name: 'duration',
            value: '2h 22m',
          },
          {
            name: 'description',
            value:
              'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
          },
          {
            name: 'casts',
            value: 'Tim Robbins, Morgan Freeman, Bob Gunton',
          },
          {
            name: 'country',
            value: 'USA',
          },
        ],
        assets: [],
        availability: {
          isOnStock: true,
          availableQuantity: 10,
          version: 1,
          id: 'f4b9ff8a-6371-463b-bf91-9448cce3b617',
        },
      },
      variants: [],
      searchKeywords: {},
    },
    published: true,
    hasStagedChanges: false,
  },
  key: 'tt0111161',
  priceMode: 'Embedded',
  lastVariantId: 1,
};
