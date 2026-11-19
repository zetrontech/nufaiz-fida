// All invitation content lives here (same details as the first Fida & Nufaiz card).
export const MAPS_URL = 'https://share.google/p2bq3AAJziA3Y17Au'

const venue = {
  name: 'Mount Ridge International Convention Centre',
  city: 'Manjeri',
  address: 'Manjeri, Kerala',
  mapsUrl: MAPS_URL,
}

export const wedding = {
  couple: {
    bride: {
      informal: 'Fida',
      formal: 'Fida Itheeru',
      qualification: '',
      family: {
        parents: [],
        grandparents: [
          'Granddaughter of the late Mr Abdul Kareem & P.A. Kunchipathumma',
          'and of the late Dr Umar Karuvathodi & Mrs Fathimabi',
        ],
        place: '',
      },
    },
    groom: {
      informal: 'Nufaiz',
      formal: 'Nufaiz Ali Fazal',
      qualification: '',
      family: {
        parents: ['S/o Dr Fazal Mohammed V.C & Mrs Minnath V.T'],
        grandparents: [],
        place: '',
      },
    },
  },
  openerNames: ['Fida', 'Nufaiz'],
  initials: { bride: 'F', groom: 'N' },
  dates: { year: 2026, monthIndex: 11, month: 'December', weddingStart: '2026-12-27T10:30:00+05:30' },
  venue,
  // Nikah only.
  wedding: {
    title: 'Nikah',
    date: '2026-12-27',
    start: '2026-12-27T10:30:00+05:30',
    end: '2026-12-27T12:30:00+05:30',
    day: 27,
    weekday: 'Sunday',
    venue,
    schedule: [{ time: '10:30 AM – 12:30 PM', title: 'Nikah' }],
  },
  hosts: 'Dr Asiq Sideeque, Dr Ruxana, Avez & Aazim',
  // Wording supplied by the client.
  prayer: ['In the name of Allah', 'The Most Gracious, The Most Merciful'],
  invitation: 'Dr. Asiq Sideeque, Dr. Ruxana, Avez and Aazim invites you to the Nikkah of',
  theme: 'Two hearts, one promise, a lifetime together.',
  verse: 'May Allah bless you both, shower His blessings upon you, and unite you in goodness.',
  verseArabic: 'بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
  verseReference: 'A PRAYER FOR TWO',
  formalIntroduction:
    'Dr Asiq Sideeque, Dr Ruxana, Avez and Aazim warmly invite you and your family to the Nikah of their beloved daughter, and to bless the couple with your presence and prayers.',
}

export const shareTitle = 'Fida & Nufaiz | Nikah Invitation'
