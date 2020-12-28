var config = {
    accessToken: 'pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A',
    style: 'mapbox://styles/jhjanicki/ckj75pj5nf46r19mhaqvqigus',
    theme: 'light',
    alignment: 'left',
    toptitle: 'supply chains and sustainable palm oil',
    title: '',
    byline: 'By ...',
    description: '<p></p>',
    footer: '',
    footerAttribution: '',
    chapters: [
        {
            id: 'map1_1',
            title: 'Plantation overview',
            image: '',
            imageCredit: '',
            description: '',
            location: {
                center: [109.47057,1.68244],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'map1_2',
            title: 'Plantation zoomed in',
            image: '',
            imageCredit: '<a href="">xxx</a>',
            description: '',
            location: {
                center: [109.47057,1.68244],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'map1_3',
            title: 'Mill',
            image: '',
            imageCredit: '<a href="">xxx</a>',
            description: '',
            location: {
                center: [109.47057,1.68244],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'milloutline',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'milloutline',
                    opacity: 0
                }
            ]
        }
    ]
};


var config2 = {
  accessToken: 'pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A',
  style: 'mapbox://styles/jhjanicki/ckj75pj5nf46r19mhaqvqigus',
  theme: 'light',
  alignment: 'left',
  toptitle: 'supply chains and sustainable palm oil',
    chapters: [
        {
            id: 'map2_1',
            title: 'Malaysia & Indonesia',
            image: 'images/img2-1.png',
            imageCredit: '<a href="">xxx</a>',
            description: 'Coverage of oil palm plantations across Malaysia & Indonesia',
            location: {
                center: [107.888,1.155],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'map2_2',
            title: 'In the past...',
            image: 'images/img2-2.png',
            imageCredit: '<a href="">xxx</a>',
            description: 'Coverage reduces as years are counted backwards',
            location: {
                center: [113.41,1.442],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'map2_3',
            title: 'Over time',
            image: 'images/img2-3.jpg',
            imageCredit: '<a href="">xxx</a>',
            description: 'Coverage increases slowly as the years return to the present',
            location: {
                center: [113.41,1.442],
                zoom: 16,
                pitch: 40,
                bearing: -7
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};
