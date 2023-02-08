import React, { useState, useEffect } from 'react';
import restCountriesService from '../services/restCountriesService.js';

const countryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ALL_COUNTRIES':
            return action.payload;
        case 'SEARCH_COUNTRY_BY_NAME':
            return state;
        default:
            return state;
    }
};
export const AllCountries = (data) => {
    return {
        type: 'ALL_COUNTRIES',
        payload: data,
    };
};

export default countryReducer;

// const initialState = [
//     {
//         name: {
//             common: 'United Arab Emirates',
//             official: 'United Arab Emirates',
//             nativeName: {
//                 ara: {
//                     official: 'الإمارات العربية المتحدة',
//                     common: 'دولة الإمارات العربية المتحدة',
//                 },
//             },
//         },
//         tld: ['.ae', 'امارات.'],
//         cca2: 'AE',
//         ccn3: '784',
//         cca3: 'ARE',
//         cioc: 'UAE',
//         independent: true,
//         status: 'officially-assigned',
//         unMember: true,
//         currencies: {
//             AED: {
//                 name: 'United Arab Emirates dirham',
//                 symbol: 'د.إ',
//             },
//         },
//         idd: {
//             root: '+9',
//             suffixes: ['71'],
//         },
//         capital: ['Abu Dhabi'],
//         altSpellings: ['AE', 'UAE', 'Emirates'],
//         region: 'Asia',
//         subregion: 'Western Asia',
//         languages: {
//             ara: 'Arabic',
//         },
//         translations: {
//             ara: {
//                 official: 'الإمارات العربية المتحدة',
//                 common: 'دولة الإمارات العربية المتحدة',
//             },
//             bre: {
//                 official: 'Emirelezhioù Arab Unanet',
//                 common: 'Emirelezhioù Arab Unanet',
//             },
//             ces: {
//                 official: 'Spojené arabské emiráty',
//                 common: 'Arabské emiráty',
//             },
//             cym: {
//                 official: 'United Arab Emirates',
//                 common: 'United Arab Emirates',
//             },
//             deu: {
//                 official: 'Vereinigte Arabische Emirate',
//                 common: 'Vereinigte Arabische Emirate',
//             },
//             est: {
//                 official: 'Araabia Ühendemiraadid',
//                 common: 'Araabia Ühendemiraadid',
//             },
//             fin: {
//                 official: 'Yhdistyneet arabiemiirikunnat',
//                 common: 'Arabiemiraatit',
//             },
//             fra: {
//                 official: 'Émirats arabes unis',
//                 common: 'Émirats arabes unis',
//             },
//             hrv: {
//                 official: 'Ujedinjeni Arapski Emirati',
//                 common: 'Arapski Emirati',
//             },
//             hun: {
//                 official: 'Egyesült Arab Emírségek',
//                 common: 'Egyesült Arab Emírségek',
//             },
//             ita: {
//                 official: 'Emirati Arabi Uniti',
//                 common: 'Emirati Arabi Uniti',
//             },
//             jpn: {
//                 official: 'アラブ首長国連邦',
//                 common: 'アラブ首長国連邦',
//             },
//             kor: {
//                 official: '아랍 토후국 연방',
//                 common: '아랍에미리트',
//             },
//             nld: {
//                 official: 'Verenigde Arabische Emiraten',
//                 common: 'Verenigde Arabische Emiraten',
//             },
//             per: {
//                 official: 'امارات متحده عربی',
//                 common: 'امارات',
//             },
//             pol: {
//                 official: 'Zjednoczone Emiraty Arabskie',
//                 common: 'Emiraty Arabskie',
//             },
//             por: {
//                 official: 'Emirados Árabes Unidos',
//                 common: 'Emirados Árabes Unidos',
//             },
//             rus: {
//                 official: 'Объединенные Арабские Эмираты',
//                 common: 'Объединённые Арабские Эмираты',
//             },
//             slk: {
//                 official: 'Spojené arabské emiráty',
//                 common: 'Arabské emiráty',
//             },
//             spa: {
//                 official: 'Emiratos Árabes Unidos',
//                 common: 'Emiratos Árabes Unidos',
//             },
//             srp: {
//                 official: 'Уједињени Арапски Емирати',
//                 common: 'Уједињени Арапски Емирати',
//             },
//             swe: {
//                 official: 'Förenade Arabemiraten',
//                 common: 'Förenade Arabemiraten',
//             },
//             tur: {
//                 official: 'Birleşik Arap Emirlikleri',
//                 common: 'Birleşik Arap Emirlikleri',
//             },
//             urd: {
//                 official: 'متحدہ عرب امارات',
//                 common: 'متحدہ عرب امارات',
//             },
//             zho: {
//                 official: '阿拉伯联合酋长国',
//                 common: '阿拉伯联合酋长国',
//             },
//         },
//         latlng: [24, 54],
//         landlocked: false,
//         borders: ['OMN', 'SAU'],
//         area: 83600,
//         demonyms: {
//             eng: {
//                 f: 'Emirati',
//                 m: 'Emirati',
//             },
//             fra: {
//                 f: 'Emirienne',
//                 m: 'Emirien',
//             },
//         },
//         flag: '🇦🇪',
//         maps: {
//             googleMaps: 'https://goo.gl/maps/AZZTDA6GzVAnKMVd8',
//             openStreetMaps: 'https://www.openstreetmap.org/relation/307763',
//         },
//         population: 9890400,
//         gini: {
//             2018: 26,
//         },
//         fifa: 'UAE',
//         car: {
//             signs: ['UAE'],
//             side: 'right',
//         },
//         timezones: ['UTC+04:00'],
//         continents: ['Asia'],
//         flags: {
//             png: 'https://flagcdn.com/w320/ae.png',
//             svg: 'https://flagcdn.com/ae.svg',
//             alt: 'The flag of United Arab Emirates features a red vertical band on its hoist side that takes up about one-fourth the width of the field and three equal horizontal bands of green, white and black adjoining the vertical band.',
//         },
//         coatOfArms: {
//             png: 'https://mainfacts.com/media/images/coats_of_arms/ae.png',
//             svg: 'https://mainfacts.com/media/images/coats_of_arms/ae.svg',
//         },
//         startOfWeek: 'sunday',
//         capitalInfo: {
//             latlng: [24.47, 54.37],
//         },
//     },
//     {
//         name: {
//             common: 'Bouvet Island',
//             official: 'Bouvet Island',
//             nativeName: {
//                 nor: {
//                     official: 'Bouvetøya',
//                     common: 'Bouvetøya',
//                 },
//             },
//         },
//         tld: ['.bv'],
//         cca2: 'BV',
//         ccn3: '074',
//         cca3: 'BVT',
//         independent: false,
//         status: 'officially-assigned',
//         unMember: false,
//         idd: {
//             root: '+4',
//             suffixes: ['7'],
//         },
//         altSpellings: ['BV', 'Bouvetøya', 'Bouvet-øya'],
//         region: 'Antarctic',
//         languages: {
//             nor: 'Norwegian',
//         },
//         translations: {
//             ara: {
//                 official: 'جزر بوفيه',
//                 common: 'جزر بوفيه',
//             },
//             bre: {
//                 official: 'Enez Bouvet',
//                 common: 'Enez Bouvet',
//             },
//             ces: {
//                 official: 'Bouvetův ostrov',
//                 common: 'Bouvetův ostrov',
//             },
//             cym: {
//                 official: 'Bouvet Island',
//                 common: 'Bouvet Island',
//             },
//             deu: {
//                 official: 'Bouvetinsel',
//                 common: 'Bouvetinsel',
//             },
//             est: {
//                 official: 'Bouvet’ saar',
//                 common: 'Bouvet’ saar',
//             },
//             fin: {
//                 official: "Bouvet'nsaari",
//                 common: "Bouvet'nsaari",
//             },
//             fra: {
//                 official: 'Île Bouvet',
//                 common: 'Île Bouvet',
//             },
//             hrv: {
//                 official: 'Bouvet Island',
//                 common: 'Otok Bouvet',
//             },
//             hun: {
//                 official: 'Bouvet-sziget',
//                 common: 'Bouvet-sziget',
//             },
//             ita: {
//                 official: 'Isola Bouvet',
//                 common: 'Isola Bouvet',
//             },
//             jpn: {
//                 official: 'ブーヴェ島',
//                 common: 'ブーベ島',
//             },
//             kor: {
//                 official: '부베 섬',
//                 common: '부베 섬',
//             },
//             nld: {
//                 official: 'Bouvet Island',
//                 common: 'Bouveteiland',
//             },
//             per: {
//                 official: 'جزیرهٔ بووه',
//                 common: 'جزیرهٔ بووه',
//             },
//             pol: {
//                 official: 'Wyspa Bouveta',
//                 common: 'Wyspa Bouveta',
//             },
//             por: {
//                 official: 'Ilha Bouvet',
//                 common: 'Ilha Bouvet',
//             },
//             rus: {
//                 official: 'Остров Буве',
//                 common: 'Остров Буве',
//             },
//             slk: {
//                 official: 'Bouvetov ostrov',
//                 common: 'Bouvetov ostrov',
//             },
//             spa: {
//                 official: 'Isla Bouvet',
//                 common: 'Isla Bouvet',
//             },
//             srp: {
//                 official: 'Буве',
//                 common: 'Буве',
//             },
//             swe: {
//                 official: 'Bouvetön',
//                 common: 'Bouvetön',
//             },
//             tur: {
//                 official: 'Bouvet Adası',
//                 common: 'Bouvet Adası',
//             },
//             urd: {
//                 official: 'جزیرہ بووہ',
//                 common: 'جزیرہ بووہ',
//             },
//             zho: {
//                 official: '布维岛',
//                 common: '布维岛',
//             },
//         },
//         latlng: [54.4208, 3.3464],
//         landlocked: false,
//         area: 49,
//         flag: '🇧🇻',
//         maps: {
//             googleMaps: 'https://goo.gl/maps/7WRQAEKZb4uK36yi9',
//             openStreetMaps: 'https://www.openstreetmap.org/way/174996681',
//         },
//         population: 0,
//         car: {
//             signs: [''],
//             side: 'right',
//         },
//         timezones: ['UTC+01:00'],
//         continents: ['Antarctica'],
//         flags: {
//             png: 'https://flagcdn.com/w320/bv.png',
//             svg: 'https://flagcdn.com/bv.svg',
//         },
//         coatOfArms: {},
//         startOfWeek: 'monday',
//         capitalInfo: {},
//     },
//     {
//         name: {
//             common: 'Georgia',
//             official: 'Georgia',
//             nativeName: {
//                 kat: {
//                     official: 'საქართველო',
//                     common: 'საქართველო',
//                 },
//             },
//         },
//         tld: ['.ge'],
//         cca2: 'GE',
//         ccn3: '268',
//         cca3: 'GEO',
//         cioc: 'GEO',
//         independent: true,
//         status: 'officially-assigned',
//         unMember: true,
//         currencies: {
//             GEL: {
//                 name: 'lari',
//                 symbol: '₾',
//             },
//         },
//         idd: {
//             root: '+9',
//             suffixes: ['95'],
//         },
//         capital: ['Tbilisi'],
//         altSpellings: ['GE', 'Sakartvelo'],
//         region: 'Asia',
//         subregion: 'Western Asia',
//         languages: {
//             kat: 'Georgian',
//         },
//         translations: {
//             ara: {
//                 official: 'جورجيا',
//                 common: 'جورجيا',
//             },
//             bre: {
//                 official: 'Republik Jorjia',
//                 common: 'Jorjia',
//             },
//             ces: {
//                 official: 'Gruzie',
//                 common: 'Gruzie',
//             },
//             cym: {
//                 official: 'Georgia',
//                 common: 'Georgia',
//             },
//             deu: {
//                 official: 'Georgien',
//                 common: 'Georgien',
//             },
//             est: {
//                 official: 'Gruusia',
//                 common: 'Gruusia',
//             },
//             fin: {
//                 official: 'Georgia',
//                 common: 'Georgia',
//             },
//             fra: {
//                 official: 'République de Géorgie',
//                 common: 'Géorgie',
//             },
//             hrv: {
//                 official: 'Gruzija',
//                 common: 'Gruzija',
//             },
//             hun: {
//                 official: 'Grúzia',
//                 common: 'Grúzia',
//             },
//             ita: {
//                 official: 'Georgia',
//                 common: 'Georgia',
//             },
//             jpn: {
//                 official: 'グルジア',
//                 common: 'グルジア',
//             },
//             kor: {
//                 official: '조지아',
//                 common: '조지아',
//             },
//             nld: {
//                 official: 'Georgia',
//                 common: 'Georgië',
//             },
//             per: {
//                 official: 'گرجستان',
//                 common: 'گرجستان',
//             },
//             pol: {
//                 official: 'Gruzja',
//                 common: 'Gruzja',
//             },
//             por: {
//                 official: 'Georgia',
//                 common: 'Geórgia',
//             },
//             rus: {
//                 official: 'Грузия',
//                 common: 'Грузия',
//             },
//             slk: {
//                 official: 'Gruzínsko',
//                 common: 'Gruzínsko',
//             },
//             spa: {
//                 official: 'Georgia',
//                 common: 'Georgia',
//             },
//             srp: {
//                 official: 'Грузија',
//                 common: 'Грузија',
//             },
//             swe: {
//                 official: 'Georgien',
//                 common: 'Georgien',
//             },
//             tur: {
//                 official: 'Gürcistan',
//                 common: 'Gürcistan',
//             },
//             urd: {
//                 official: 'جارجیا',
//                 common: 'جارجیا',
//             },
//             zho: {
//                 official: '格鲁吉亚',
//                 common: '格鲁吉亚',
//             },
//         },
//         latlng: [42, 43.5],
//         landlocked: false,
//         borders: ['ARM', 'AZE', 'RUS', 'TUR'],
//         area: 69700,
//         demonyms: {
//             eng: {
//                 f: 'Georgian',
//                 m: 'Georgian',
//             },
//             fra: {
//                 f: 'Géorgienne',
//                 m: 'Géorgien',
//             },
//         },
//         flag: '🇬🇪',
//         maps: {
//             googleMaps: 'https://goo.gl/maps/bvCaGBePR1ZEDK5cA',
//             openStreetMaps: 'https://www.openstreetmap.org/relation/28699',
//         },
//         population: 3714000,
//         gini: {
//             2019: 35.9,
//         },
//         fifa: 'GEO',
//         car: {
//             signs: ['GE'],
//             side: 'right',
//         },
//         timezones: ['UTC+04:00'],
//         continents: ['Asia'],
//         flags: {
//             png: 'https://flagcdn.com/w320/ge.png',
//             svg: 'https://flagcdn.com/ge.svg',
//             alt: 'The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.',
//         },
//         coatOfArms: {
//             png: 'https://mainfacts.com/media/images/coats_of_arms/ge.png',
//             svg: 'https://mainfacts.com/media/images/coats_of_arms/ge.svg',
//         },
//         startOfWeek: 'monday',
//         capitalInfo: {
//             latlng: [41.68, 44.83],
//         },
//         postalCode: {
//             format: '####',
//             regex: '^(d{4})$',
//         },
//     },
//     {
//         name: {
//             common: 'Benin',
//             official: 'Republic of Benin',
//             nativeName: {
//                 fra: {
//                     official: 'République du Bénin',
//                     common: 'Bénin',
//                 },
//             },
//         },
//         tld: ['.bj'],
//         cca2: 'BJ',
//         ccn3: '204',
//         cca3: 'BEN',
//         cioc: 'BEN',
//         independent: true,
//         status: 'officially-assigned',
//         unMember: true,
//         currencies: {
//             XOF: {
//                 name: 'West African CFA franc',
//                 symbol: 'Fr',
//             },
//         },
//         idd: {
//             root: '+2',
//             suffixes: ['29'],
//         },
//         capital: ['Porto-Novo'],
//         altSpellings: ['BJ', 'Republic of Benin', 'République du Bénin'],
//         region: 'Africa',
//         subregion: 'Western Africa',
//         languages: {
//             fra: 'French',
//         },
//         translations: {
//             ara: {
//                 official: 'جمهورية بنين',
//                 common: 'بنين',
//             },
//             bre: {
//                 official: 'Republik Benin',
//                 common: 'Benin',
//             },
//             ces: {
//                 official: 'Beninská republika',
//                 common: 'Benin',
//             },
//             cym: {
//                 official: 'Gweriniaeth Benin',
//                 common: 'Benin',
//             },
//             deu: {
//                 official: 'Republik Benin',
//                 common: 'Benin',
//             },
//             est: {
//                 official: 'Benini Vabariik',
//                 common: 'Benin',
//             },
//             fin: {
//                 official: 'Beninin tasavalta',
//                 common: 'Benin',
//             },
//             fra: {
//                 official: 'République du Bénin',
//                 common: 'Bénin',
//             },
//             hrv: {
//                 official: 'Republika Benin',
//                 common: 'Benin',
//             },
//             hun: {
//                 official: 'Benini Köztársaság',
//                 common: 'Benin',
//             },
//             ita: {
//                 official: 'Repubblica del Benin',
//                 common: 'Benin',
//             },
//             jpn: {
//                 official: 'ベナン共和国',
//                 common: 'ベナン',
//             },
//             kor: {
//                 official: '베냉 공화국',
//                 common: '베냉',
//             },
//             nld: {
//                 official: 'Republiek Benin',
//                 common: 'Benin',
//             },
//             per: {
//                 official: 'جمهوری بنین',
//                 common: 'بنین',
//             },
//             pol: {
//                 official: 'Benin',
//                 common: 'Benin',
//             },
//             por: {
//                 official: 'República do Benin',
//                 common: 'Benin',
//             },
//             rus: {
//                 official: 'Республика Бенин',
//                 common: 'Бенин',
//             },
//             slk: {
//                 official: 'Beninská republika',
//                 common: 'Benin',
//             },
//             spa: {
//                 official: 'República de Benin',
//                 common: 'Benín',
//             },
//             srp: {
//                 official: 'Република Бенин',
//                 common: 'Бенин',
//             },
//             swe: {
//                 official: 'Republiken Benin',
//                 common: 'Benin',
//             },
//             tur: {
//                 official: 'Benin Cumhuriyeti',
//                 common: 'Benin',
//             },
//             urd: {
//                 official: 'جمہوریہ بینن',
//                 common: 'بینن',
//             },
//             zho: {
//                 official: '贝宁共和国',
//                 common: '贝宁',
//             },
//         },
//         latlng: [9.5, 2.25],
//         landlocked: false,
//         borders: ['BFA', 'NER', 'NGA', 'TGO'],
//         area: 112622,
//         demonyms: {
//             eng: {
//                 f: 'Beninese',
//                 m: 'Beninese',
//             },
//             fra: {
//                 f: 'Béninoise',
//                 m: 'Béninois',
//             },
//         },
//         flag: '🇧🇯',
//         maps: {
//             googleMaps: 'https://goo.gl/maps/uMw1BsHEXQYgVFFu6',
//             openStreetMaps: 'https://www.openstreetmap.org/relation/192784',
//         },
//         population: 12123198,
//         gini: {
//             2015: 47.8,
//         },
//         fifa: 'BEN',
//         car: {
//             signs: ['DY'],
//             side: 'right',
//         },
//         timezones: ['UTC+01:00'],
//         continents: ['Africa'],
//         flags: {
//             png: 'https://flagcdn.com/w320/bj.png',
//             svg: 'https://flagcdn.com/bj.svg',
//             alt: 'The flag of Benin features a green vertical band on its hoist side that takes up about two-fifth the width of the field and two equal horizontal bands of yellow and red adjoining the vertical band.',
//         },
//         coatOfArms: {
//             png: 'https://mainfacts.com/media/images/coats_of_arms/bj.png',
//             svg: 'https://mainfacts.com/media/images/coats_of_arms/bj.svg',
//         },
//         startOfWeek: 'monday',
//         capitalInfo: {
//             latlng: [6.48, 2.62],
//         },
//     },
// ];
