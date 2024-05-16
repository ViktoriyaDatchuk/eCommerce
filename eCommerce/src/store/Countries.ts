interface ICountry {
  country: string;
  format: string;
  regex: string;
}

const countryList: Array<ICountry> = [
  {
    country: 'Afghanistan',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Åland Islands',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Albania',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Algeria',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'American Samoa',
    format: 'NNNNN (optionally NNNNN-NNNN or NNNNN-NNNNNN)',
    regex: '^\\d{5}(-{1}\\d{4,6})$',
  },
  {
    country: 'Andorra',
    format: 'CCNNN',
    regex: '^[Aa][Dd]\\d{3}$',
  },
  {
    country: 'Angola',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Anguilla',
    format: 'AI-2640',
    regex: '^[Aa][I][-][2][6][4][0]$',
  },
  {
    country: 'Antigua and Barbuda',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Argentina',
    format: '1974-1998 NNNN; From 1999 ANNNNAAA',
    regex: '^\\d{4}|[A-Za-z]\\d{4}[a-zA-Z]{3}$',
  },
  {
    country: 'Armenia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Aruba',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Ascension island',
    format: 'AAAANAA one code: ASCN 1ZZ',
    regex: '^[Aa][Ss][Cc][Nn]\\s{0,1}[1][Zz][Zz]$',
  },
  {
    country: 'Australia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Austria',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Azerbaijan',
    format: 'CCNNNN',
    regex: '^[Aa][Zz]\\d{4}$',
  },
  {
    country: 'Bahamas',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Bahrain',
    format: 'NNN or NNNN',
    regex: '^\\d{3,4}$',
  },
  {
    country: 'Bangladesh',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Barbados',
    format: 'CCNNNNN',
    regex: '^[Aa][Zz]\\d{5}$',
  },
  {
    country: 'Belarus',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Belgium',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Belize',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Benin',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Bermuda',
    format: 'AA NN or AA AA',
    regex: '^[A-Za-z]{2}\\s([A-Za-z]{2}|\\d{2})$',
  },
  {
    country: 'Bhutan',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Bolivia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Bonaire, Sint Eustatius and Saba',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Bosnia and Herzegovina',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Botswana',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Brazil',
    format: 'NNNNN-NNN (NNNNN from 1971 to 1992)',
    regex: '^\\d{5}-\\d{3}$',
  },
  {
    country: 'British Antarctic Territory',
    format: 'BIQQ 1ZZ',
    regex: '^[Bb][Ii][Qq]{2}\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'British Indian Ocean Territory',
    format: 'AAAANAA one code: BBND 1ZZ',
    regex: '^[Bb]{2}[Nn][Dd]\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'British Virgin Islands',
    format: 'CCNNNN',
    regex: '^[Vv][Gg]\\d{4}$',
  },
  {
    country: 'Brunei',
    format: 'AANNNN',
    regex: '^[A-Za-z]{2}\\d{4}$',
  },
  {
    country: 'Bulgaria',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Burkina Faso',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Burundi',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Cambodia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Cameroon',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Canada',
    format: 'ANA NAN',
    regex:
      '^(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\s{0,1}\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d$',
  },
  {
    country: 'Cape Verde',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Cayman Islands',
    format: 'CCN-NNNN',
    regex: '^[Kk][Yy]\\d[-\\s]{0,1}\\d{4}$',
  },
  {
    country: 'Central African Republic',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Chad',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Chile',
    format: 'NNNNNNN (NNN-NNNN)',
    regex: '^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$',
  },
  {
    country: 'China',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Christmas Island',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Cocos (Keeling) Island',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Colombia',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Comoros',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Congo (Brazzaville)',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Congo, Democratic Republic',
    format: '- no codes -',
    regex: '^[Cc][Dd]$',
  },
  {
    country: 'Cook Islands',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Costa Rica',
    format: 'NNNNN (NNNN until 2007)',
    regex: '^\\d{4,5}$',
  },
  {
    country: "Côte d'Ivoire (Ivory Coast)",
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Croatia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Cuba',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Curaçao',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Cyprus',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Czech Republic',
    format: 'NNNNN (NNN NN)',
    regex: '^\\d{5}\\s\\(\\d{3}\\s\\d{2}\\)$',
  },
  {
    country: 'Denmark',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Djibouti',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Dominica',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Dominican Republic',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'East Timor',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Ecuador',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'El Salvador',
    format: '1101',
    regex: '^1101$',
  },
  {
    country: 'Egypt',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Equatorial Guinea',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Eritrea',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Estonia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Ethiopia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Falkland Islands',
    format: 'AAAANAA one code: FIQQ 1ZZ',
    regex: '^[Ff][Ii][Qq]{2}\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'Faroe Islands',
    format: 'NNN',
    regex: '^\\d{3}$',
  },
  {
    country: 'Fiji',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Finland',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'France',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'French Guiana',
    format: '973NN',
    regex: '^973\\d{2}$',
  },
  {
    country: 'French Polynesia',
    format: '987NN',
    regex: '^987\\d{2}$',
  },
  {
    country: 'French Southern and Antarctic Territories',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Gabon',
    format: 'NN [city name] NN',
    regex: '^\\d{2}\\s[a-zA-Z-_ ]\\s\\d{2}$',
  },
  {
    country: 'Gambia',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Georgia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Germany',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Ghana',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Gibraltar',
    format: 'GX11 1AA',
    regex: '^[Gg][Xx][1]{2}\\s{0,1}[1][Aa]{2}$',
  },
  {
    country: 'Greece',
    format: 'NNN NN',
    regex: '^\\d{3}\\s{0,1}\\d{2}$',
  },
  {
    country: 'Greenland',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Grenada',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Guadeloupe',
    format: '971NN',
    regex: '^971\\d{2}$',
  },
  {
    country: 'Guam',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Guatemala',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Guernsey',
    format: 'AAN NAA, AANN NAA',
    regex: '^[A-Za-z]{2}\\d\\s{0,1}\\d[A-Za-z]{2}$',
  },
  {
    country: 'Guinea',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Guinea Bissau',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Guyana',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Haiti',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Heard and McDonald Islands',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Honduras',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Hong Kong',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Hungary',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Iceland',
    format: 'NNN',
    regex: '^\\d{3}$',
  },
  {
    country: 'India',
    format: 'NNNNNN,&#10;NNN NNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Indonesia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Iran',
    format: 'NNNNN-NNNNN',
    regex: '^\\d{5}-\\d{5}$',
  },
  {
    country: 'Iraq',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Ireland',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Isle of Man',
    format: 'CCN NAA, CCNN NAA',
    regex: '^[Ii[Mm]\\d{1,2}\\s\\d\\[A-Z]{2}$',
  },
  {
    country: 'Israel',
    format: 'NNNNNNN, NNNNN',
    regex: '^\\b\\d{5}(\\d{2})?$',
  },
  {
    country: 'Italy',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Jamaica',
    format: 'Before suspension: CCAAANN &#10;After suspension: NN',
    regex: '^\\d{2}$',
  },
  {
    country: 'Japan',
    format: 'NNNNNNN (NNN-NNNN)',
    regex: '^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$',
  },
  {
    country: 'Jersey',
    format: 'CCN NAA',
    regex: '^[Jj][Ee]\\d\\s{0,1}\\d[A-Za-z]{2}$',
  },
  {
    country: 'Jordan',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Kazakhstan',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Kenya',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Kiribati',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Korea, North',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Korea, South',
    format: 'NNNNNN (NNN-NNN)(1988~2015)',
    regex: '^\\d{6}\\s\\(\\d{3}-\\d{3}\\)$',
  },
  {
    country: 'Kosovo',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Kuwait',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Kyrgyzstan',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Latvia',
    format: 'LV-NNNN',
    regex: '^[Ll][Vv][- ]{0,1}\\d{4}$',
  },
  {
    country: 'Laos',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Lebanon',
    format: 'NNNN NNNN',
    regex: '^\\d{4}\\s{0,1}\\d{4}$',
  },
  {
    country: 'Lesotho',
    format: 'NNN',
    regex: '^\\d{3}$',
  },
  {
    country: 'Liberia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Libya',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Liechtenstein',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Lithuania',
    format: 'LT-NNNNN',
    regex: '^[Ll][Tt][- ]{0,1}\\d{5}$',
  },
  {
    country: 'Luxembourg',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Macau',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Macedonia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Madagascar',
    format: 'NNN',
    regex: '^\\d{3}$',
  },
  {
    country: 'Malawi',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Maldives',
    format: 'NNNN, NNNNN',
    regex: '^\\d{4,5}$',
  },
  {
    country: 'Malaysia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Mali',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Malta',
    format: 'AAANNNN (AAA NNNN)',
    regex: '^[A-Za-z]{3}\\s{0,1}\\d{4}$',
  },
  {
    country: 'Marshall Islands',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Mauritania',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Mauritius',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Martinique',
    format: '972NN',
    regex: '^972\\d{2}$',
  },
  {
    country: 'Mayotte',
    format: '976NN',
    regex: '^976\\d{2}$',
  },
  {
    country: 'Micronesia',
    format: 'NNNNN or NNNNN-NNNN',
    regex: '^\\d{5}(-{1}\\d{4})$',
  },
  {
    country: 'Mexico',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Moldova',
    format: 'CCNNNN (CC-NNNN)',
    regex: '^[Mm][Dd][- ]{0,1}\\d{4}$',
  },
  {
    country: 'Monaco',
    format: '980NN',
    regex: '^980\\d{2}$',
  },
  {
    country: 'Mongolia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Montenegro',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Montserrat',
    format: 'MSR 1110-1350',
    regex: '^[Mm][Ss][Rr]\\s{0,1}\\d{4}$',
  },
  {
    country: 'Morocco',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Mozambique',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Myanmar',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Namibia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Nauru',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Nepal',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Netherlands',
    format: 'NNNN AA',
    regex: '^\\d{4}\\s{0,1}[A-Za-z]{2}$',
  },
  {
    country: 'New Caledonia',
    format: '988NN',
    regex: '^988\\d{2}$',
  },
  {
    country: 'New Zealand',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Nicaragua',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Niger',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Nigeria',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Niue',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Norfolk Island',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Northern Mariana Islands',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Norway',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Oman',
    format: 'NNN',
    regex: '^\\d{3}$',
  },
  {
    country: 'Pakistan',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Palau',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Panama',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Papua New Guinea',
    format: 'NNN',
    regex: '^\\d{3}$',
  },
  {
    country: 'Paraguay',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Peru',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Philippines',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Pitcairn Islands',
    format: 'AAAANAA one code: PCRN 1ZZ',
    regex: '^[Pp][Cc][Rr][Nn]\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'Poland',
    format: 'NNNNN (NN-NNN)',
    regex: '^\\d{2}[- ]{0,1}\\d{3}$',
  },
  {
    country: 'Portugal',
    format: 'NNNN-NNN (NNNN NNN)',
    regex: '^\\d{4}[- ]{0,1}\\d{3}$',
  },
  {
    country: 'Puerto Rico',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Qatar',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Réunion',
    format: '974NN',
    regex: '^974\\d{2}$',
  },
  {
    country: 'Romania',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Russia',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Saint Barthélemy',
    format: '97133',
    regex: '^97133$',
  },
  {
    country: 'Saint Helena',
    format: 'STHL 1ZZ',
    regex: '^[Ss][Tt][Hh][Ll]\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'Saint Kitts and Nevis',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Saint Lucia',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Saint Martin',
    format: '97150',
    regex: '^97150$',
  },
  {
    country: 'Saint Pierre and Miquelon',
    format: '97500',
    regex: '^97500$',
  },
  {
    country: 'Saint Vincent and the Grenadines',
    format: 'CCNNNN',
    regex: '^[Vv][Cc]\\d{4}$',
  },
  {
    country: 'San Marino',
    format: '4789N',
    regex: '^4789\\d$',
  },
  {
    country: 'Sao Tome and Principe',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Saudi Arabia',
    format: 'NNNNN for PO Boxes. NNNNN-NNNN for home delivery.',
    regex: '^\\d{5}(-{1}\\d{4})?$',
  },
  {
    country: 'Senegal',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Serbia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Seychelles',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Sint Maarten',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Sierra Leone',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Singapore',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Slovakia',
    format: 'NNNNN (NNN NN)',
    regex: '^\\d{5}\\s\\(\\d{3}\\s\\d{2}\\)$',
  },
  {
    country: 'Slovenia',
    format: 'NNNN (CC-NNNN)',
    regex: '^([Ss][Ii][- ]{0,1}){0,1}\\d{4}$',
  },
  {
    country: 'Solomon Islands',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Somalia',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'South Africa',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'South Georgia and the South Sandwich Islands',
    format: 'SIQQ 1ZZ',
    regex: '^[Ss][Ii][Qq]{2}\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'South Korea',
    format: 'NNNNNN (NNN-NNN)',
    regex: '^\\d{6}\\s\\(\\d{3}-\\d{3}\\)$',
  },
  {
    country: 'Spain',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Sri Lanka',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Sudan',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Suriname',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Swaziland',
    format: 'ANNN',
    regex: '^[A-Za-z]\\d{3}$',
  },
  {
    country: 'Sweden',
    format: 'NNNNN (NNN NN)',
    regex: '^\\d{3}\\s*\\d{2}$',
  },
  {
    country: 'Switzerland',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Svalbard and Jan Mayen',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Syria',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Taiwan',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Tajikistan',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Tanzania',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Thailand',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Togo',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Tokelau',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Tonga',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Trinidad and Tobago',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Tristan da Cunha',
    format: 'TDCU 1ZZ',
    regex: '^[Tt][Dd][Cc][Uu]\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'Tunisia',
    format: 'NNNN',
    regex: '^\\d{4}$',
  },
  {
    country: 'Turkey',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Turkmenistan',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Turks and Caicos Islands',
    format: 'TKCA 1ZZ',
    regex: '^[Tt][Kk][Cc][Aa]\\s{0,1}[1][Zz]{2}$',
  },
  {
    country: 'Tuvalu',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Uganda',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Ukraine',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'United Arab Emirates',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'United Kingdom',
    format: 'A(A)N(A/N)NAA (A[A]N[A/N] NAA)',
    regex: '^[A-Z]{1,2}[0-9R][0-9A-Z]?\\s*[0-9][A-Z-[CIKMOV]]{2}',
  },
  {
    country: 'United States',
    format: 'NNNNN (optionally NNNNN-NNNN)',
    regex: '^\\b\\d{5}\\b(?:[- ]{1}\\d{4})?$',
  },
  {
    country: 'Uruguay',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'U.S. Virgin Islands',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Uzbekistan',
    format: 'NNN NNN',
    regex: '^\\d{3} \\d{3}$',
  },
  {
    country: 'Vanuatu',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Vatican',
    format: '120',
    regex: '^120$',
  },
  {
    country: 'Venezuela',
    format: 'NNNN or NNNN A',
    regex: '^\\d{4}(\\s[a-zA-Z]{1})?$',
  },
  {
    country: 'Vietnam',
    format: 'NNNNNN',
    regex: '^\\d{6}$',
  },
  {
    country: 'Wallis and Futuna',
    format: '986NN',
    regex: '^986\\d{2}$',
  },
  {
    country: 'Yemen',
    format: '- no codes -',
    regex: '',
  },
  {
    country: 'Zambia',
    format: 'NNNNN',
    regex: '^\\d{5}$',
  },
  {
    country: 'Zimbabwe',
    format: '- no codes -',
    regex: '',
  },
];

export default countryList;
