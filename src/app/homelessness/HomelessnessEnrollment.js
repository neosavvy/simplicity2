import React from 'react';
import PropTypes from 'prop-types';
import AreaChartContainer from '../../shared/visualization/AreaChartContainer';

const dataKeys = [
  'Emergency Shelter',
  'Homelessness Prevention',
  'Rapid Re-Housing',
  'Transitional housing',
  'Permanent supportive housing',
];

// todo get this data from graphql
const enrollmentData = [
  {
    Date: '1/2008',
    'Emergency Shelter': 131,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 97,
    'Rapid Re-Housing': 4,
    'Transitional housing': 52,
    Total: 284,
  },
  {
    Date: '2/2008',
    'Emergency Shelter': 136,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 97,
    'Rapid Re-Housing': 4,
    'Transitional housing': 69,
    Total: 306,
  },
  {
    Date: '3/2008',
    'Emergency Shelter': 154,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 94,
    'Rapid Re-Housing': 4,
    'Transitional housing': 89,
    Total: 341,
  },
  {
    Date: '4/2008',
    'Emergency Shelter': 145,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 96,
    'Rapid Re-Housing': 4,
    'Transitional housing': 104,
    Total: 349,
  },
  {
    Date: '5/2008',
    'Emergency Shelter': 127,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 99,
    'Rapid Re-Housing': 4,
    'Transitional housing': 125,
    Total: 355,
  },
  {
    Date: '6/2008',
    'Emergency Shelter': 131,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 102,
    'Rapid Re-Housing': 4,
    'Transitional housing': 149,
    Total: 386,
  },
  {
    Date: '7/2008',
    'Emergency Shelter': 119,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 111,
    'Rapid Re-Housing': 4,
    'Transitional housing': 167,
    Total: 401,
  },
  {
    Date: '8/2008',
    'Emergency Shelter': 122,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 111,
    'Rapid Re-Housing': 3,
    'Transitional housing': 170,
    Total: 406,
  },
  {
    Date: '9/2008',
    'Emergency Shelter': 124,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 115,
    'Rapid Re-Housing': 2,
    'Transitional housing': 184,
    Total: 425,
  },
  {
    Date: '10/2008',
    'Emergency Shelter': 126,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 127,
    'Rapid Re-Housing': 2,
    'Transitional housing': 205,
    Total: 460,
  },
  {
    Date: '11/2008',
    'Emergency Shelter': 144,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 133,
    'Rapid Re-Housing': 2,
    'Transitional housing': 206,
    Total: 485,
  },
  {
    Date: '12/2008',
    'Emergency Shelter': 147,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 140,
    'Rapid Re-Housing': 2,
    'Transitional housing': 210,
    Total: 499,
  },
  {
    Date: '1/2009',
    'Emergency Shelter': 168,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 143,
    'Rapid Re-Housing': 2,
    'Transitional housing': 213,
    Total: 526,
  },
  {
    Date: '2/2009',
    'Emergency Shelter': 128,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 146,
    'Rapid Re-Housing': 2,
    'Transitional housing': 221,
    Total: 497,
  },
  {
    Date: '3/2009',
    'Emergency Shelter': 108,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 156,
    'Rapid Re-Housing': 2,
    'Transitional housing': 224,
    Total: 490,
  },
  {
    Date: '4/2009',
    'Emergency Shelter': 109,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 159,
    'Rapid Re-Housing': 2,
    'Transitional housing': 219,
    Total: 489,
  },
  {
    Date: '5/2009',
    'Emergency Shelter': 129,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 164,
    'Rapid Re-Housing': 3,
    'Transitional housing': 223,
    Total: 519,
  },
  {
    Date: '6/2009',
    'Emergency Shelter': 124,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 176,
    'Rapid Re-Housing': 3,
    'Transitional housing': 237,
    Total: 540,
  },
  {
    Date: '7/2009',
    'Emergency Shelter': 115,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 200,
    'Rapid Re-Housing': 3,
    'Transitional housing': 241,
    Total: 559,
  },
  {
    Date: '8/2009',
    'Emergency Shelter': 105,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 218,
    'Rapid Re-Housing': 5,
    'Transitional housing': 252,
    Total: 580,
  },
  {
    Date: '9/2009',
    'Emergency Shelter': 97,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 219,
    'Rapid Re-Housing': 3,
    'Transitional housing': 239,
    Total: 558,
  },
  {
    Date: '10/2009',
    'Emergency Shelter': 121,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 237,
    'Rapid Re-Housing': 3,
    'Transitional housing': 241,
    Total: 602,
  },
  {
    Date: '11/2009',
    'Emergency Shelter': 117,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 247,
    'Rapid Re-Housing': 3,
    'Transitional housing': 242,
    Total: 609,
  },
  {
    Date: '12/2009',
    'Emergency Shelter': 122,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 269,
    'Rapid Re-Housing': 2,
    'Transitional housing': 235,
    Total: 628,
  },
  {
    Date: '1/2010',
    'Emergency Shelter': 111,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 286,
    'Rapid Re-Housing': 2,
    'Transitional housing': 219,
    Total: 618,
  },
  {
    Date: '2/2010',
    'Emergency Shelter': 121,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 294,
    'Rapid Re-Housing': 2,
    'Transitional housing': 225,
    Total: 642,
  },
  {
    Date: '3/2010',
    'Emergency Shelter': 125,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 295,
    'Rapid Re-Housing': 2,
    'Transitional housing': 220,
    Total: 642,
  },
  {
    Date: '4/2010',
    'Emergency Shelter': 119,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 303,
    'Rapid Re-Housing': 2,
    'Transitional housing': 228,
    Total: 652,
  },
  {
    Date: '5/2010',
    'Emergency Shelter': 105,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 304,
    'Rapid Re-Housing': 2,
    'Transitional housing': 216,
    Total: 627,
  },
  {
    Date: '6/2010',
    'Emergency Shelter': 93,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 321,
    'Rapid Re-Housing': 2,
    'Transitional housing': 212,
    Total: 628,
  },
  {
    Date: '7/2010',
    'Emergency Shelter': 134,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 312,
    'Rapid Re-Housing': 3,
    'Transitional housing': 222,
    Total: 671,
  },
  {
    Date: '8/2010',
    'Emergency Shelter': 153,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 313,
    'Rapid Re-Housing': 5,
    'Transitional housing': 229,
    Total: 700,
  },
  {
    Date: '9/2010',
    'Emergency Shelter': 147,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 320,
    'Rapid Re-Housing': 5,
    'Transitional housing': 226,
    Total: 698,
  },
  {
    Date: '10/2010',
    'Emergency Shelter': 133,
    'Homelessness Prevention': 0,
    'Permanent supportive housing': 333,
    'Rapid Re-Housing': 6,
    'Transitional housing': 230,
    Total: 702,
  },
  {
    Date: '11/2010',
    'Emergency Shelter': 125,
    'Homelessness Prevention': 1,
    'Permanent supportive housing': 340,
    'Rapid Re-Housing': 6,
    'Transitional housing': 214,
    Total: 686,
  },
  {
    Date: '12/2010',
    'Emergency Shelter': 130,
    'Homelessness Prevention': 1,
    'Permanent supportive housing': 348,
    'Rapid Re-Housing': 6,
    'Transitional housing': 214,
    Total: 699,
  },
  {
    Date: '1/2011',
    'Emergency Shelter': 122,
    'Homelessness Prevention': 1,
    'Permanent supportive housing': 360,
    'Rapid Re-Housing': 6,
    'Transitional housing': 212,
    Total: 701,
  },
  {
    Date: '2/2011',
    'Emergency Shelter': 118,
    'Homelessness Prevention': 1,
    'Permanent supportive housing': 366,
    'Rapid Re-Housing': 4,
    'Transitional housing': 218,
    Total: 707,
  },
  {
    Date: '3/2011',
    'Emergency Shelter': 138,
    'Homelessness Prevention': 7,
    'Permanent supportive housing': 375,
    'Rapid Re-Housing': 4,
    'Transitional housing': 232,
    Total: 756,
  },
  {
    Date: '4/2011',
    'Emergency Shelter': 146,
    'Homelessness Prevention': 7,
    'Permanent supportive housing': 383,
    'Rapid Re-Housing': 6,
    'Transitional housing': 233,
    Total: 775,
  },
  {
    Date: '5/2011',
    'Emergency Shelter': 148,
    'Homelessness Prevention': 11,
    'Permanent supportive housing': 382,
    'Rapid Re-Housing': 6,
    'Transitional housing': 250,
    Total: 797,
  },
  {
    Date: '6/2011',
    'Emergency Shelter': 145,
    'Homelessness Prevention': 14,
    'Permanent supportive housing': 386,
    'Rapid Re-Housing': 6,
    'Transitional housing': 249,
    Total: 800,
  },
  {
    Date: '7/2011',
    'Emergency Shelter': 183,
    'Homelessness Prevention': 14,
    'Permanent supportive housing': 393,
    'Rapid Re-Housing': 6,
    'Transitional housing': 254,
    Total: 850,
  },
  {
    Date: '8/2011',
    'Emergency Shelter': 194,
    'Homelessness Prevention': 28,
    'Permanent supportive housing': 398,
    'Rapid Re-Housing': 7,
    'Transitional housing': 255,
    Total: 882,
  },
  {
    Date: '9/2011',
    'Emergency Shelter': 191,
    'Homelessness Prevention': 41,
    'Permanent supportive housing': 415,
    'Rapid Re-Housing': 6,
    'Transitional housing': 260,
    Total: 913,
  },
  {
    Date: '10/2011',
    'Emergency Shelter': 177,
    'Homelessness Prevention': 62,
    'Permanent supportive housing': 425,
    'Rapid Re-Housing': 6,
    'Transitional housing': 258,
    Total: 928,
  },
  {
    Date: '11/2011',
    'Emergency Shelter': 197,
    'Homelessness Prevention': 74,
    'Permanent supportive housing': 421,
    'Rapid Re-Housing': 6,
    'Transitional housing': 259,
    Total: 957,
  },
  {
    Date: '12/2011',
    'Emergency Shelter': 188,
    'Homelessness Prevention': 85,
    'Permanent supportive housing': 429,
    'Rapid Re-Housing': 7,
    'Transitional housing': 266,
    Total: 975,
  },
  {
    Date: '1/2012',
    'Emergency Shelter': 167,
    'Homelessness Prevention': 101,
    'Permanent supportive housing': 436,
    'Rapid Re-Housing': 8,
    'Transitional housing': 248,
    Total: 960,
  },
  {
    Date: '2/2012',
    'Emergency Shelter': 199,
    'Homelessness Prevention': 111,
    'Permanent supportive housing': 455,
    'Rapid Re-Housing': 8,
    'Transitional housing': 255,
    Total: 1028,
  },
  {
    Date: '3/2012',
    'Emergency Shelter': 226,
    'Homelessness Prevention': 115,
    'Permanent supportive housing': 482,
    'Rapid Re-Housing': 9,
    'Transitional housing': 237,
    Total: 1069,
  },
  {
    Date: '4/2012',
    'Emergency Shelter': 181,
    'Homelessness Prevention': 116,
    'Permanent supportive housing': 516,
    'Rapid Re-Housing': 10,
    'Transitional housing': 245,
    Total: 1068,
  },
  {
    Date: '5/2012',
    'Emergency Shelter': 168,
    'Homelessness Prevention': 123,
    'Permanent supportive housing': 523,
    'Rapid Re-Housing': 10,
    'Transitional housing': 252,
    Total: 1076,
  },
  {
    Date: '6/2012',
    'Emergency Shelter': 174,
    'Homelessness Prevention': 126,
    'Permanent supportive housing': 537,
    'Rapid Re-Housing': 11,
    'Transitional housing': 255,
    Total: 1103,
  },
  {
    Date: '7/2012',
    'Emergency Shelter': 178,
    'Homelessness Prevention': 112,
    'Permanent supportive housing': 553,
    'Rapid Re-Housing': 18,
    'Transitional housing': 261,
    Total: 1122,
  },
  {
    Date: '8/2012',
    'Emergency Shelter': 154,
    'Homelessness Prevention': 99,
    'Permanent supportive housing': 565,
    'Rapid Re-Housing': 29,
    'Transitional housing': 264,
    Total: 1111,
  },
  {
    Date: '9/2012',
    'Emergency Shelter': 152,
    'Homelessness Prevention': 89,
    'Permanent supportive housing': 567,
    'Rapid Re-Housing': 25,
    'Transitional housing': 258,
    Total: 1091,
  },
  {
    Date: '10/2012',
    'Emergency Shelter': 171,
    'Homelessness Prevention': 115,
    'Permanent supportive housing': 592,
    'Rapid Re-Housing': 43,
    'Transitional housing': 263,
    Total: 1184,
  },
  {
    Date: '11/2012',
    'Emergency Shelter': 219,
    'Homelessness Prevention': 114,
    'Permanent supportive housing': 607,
    'Rapid Re-Housing': 78,
    'Transitional housing': 244,
    Total: 1262,
  },
  {
    Date: '12/2012',
    'Emergency Shelter': 234,
    'Homelessness Prevention': 101,
    'Permanent supportive housing': 618,
    'Rapid Re-Housing': 80,
    'Transitional housing': 247,
    Total: 1280,
  },
  {
    Date: '1/2013',
    'Emergency Shelter': 364,
    'Homelessness Prevention': 93,
    'Permanent supportive housing': 629,
    'Rapid Re-Housing': 75,
    'Transitional housing': 244,
    Total: 1405,
  },
  {
    Date: '2/2013',
    'Emergency Shelter': 391,
    'Homelessness Prevention': 85,
    'Permanent supportive housing': 633,
    'Rapid Re-Housing': 67,
    'Transitional housing': 241,
    Total: 1417,
  },
  {
    Date: '3/2013',
    'Emergency Shelter': 455,
    'Homelessness Prevention': 77,
    'Permanent supportive housing': 636,
    'Rapid Re-Housing': 111,
    'Transitional housing': 246,
    Total: 1525,
  },
  {
    Date: '4/2013',
    'Emergency Shelter': 375,
    'Homelessness Prevention': 87,
    'Permanent supportive housing': 649,
    'Rapid Re-Housing': 150,
    'Transitional housing': 251,
    Total: 1512,
  },
  {
    Date: '5/2013',
    'Emergency Shelter': 401,
    'Homelessness Prevention': 71,
    'Permanent supportive housing': 653,
    'Rapid Re-Housing': 191,
    'Transitional housing': 254,
    Total: 1570,
  },
  {
    Date: '6/2013',
    'Emergency Shelter': 414,
    'Homelessness Prevention': 45,
    'Permanent supportive housing': 658,
    'Rapid Re-Housing': 239,
    'Transitional housing': 258,
    Total: 1614,
  },
  {
    Date: '7/2013',
    'Emergency Shelter': 461,
    'Homelessness Prevention': 42,
    'Permanent supportive housing': 676,
    'Rapid Re-Housing': 231,
    'Transitional housing': 257,
    Total: 1667,
  },
  {
    Date: '8/2013',
    'Emergency Shelter': 429,
    'Homelessness Prevention': 38,
    'Permanent supportive housing': 684,
    'Rapid Re-Housing': 213,
    'Transitional housing': 252,
    Total: 1616,
  },
  {
    Date: '9/2013',
    'Emergency Shelter': 214,
    'Homelessness Prevention': 34,
    'Permanent supportive housing': 701,
    'Rapid Re-Housing': 174,
    'Transitional housing': 257,
    Total: 1380,
  },
  {
    Date: '10/2013',
    'Emergency Shelter': 267,
    'Homelessness Prevention': 35,
    'Permanent supportive housing': 654,
    'Rapid Re-Housing': 194,
    'Transitional housing': 253,
    Total: 1403,
  },
  {
    Date: '11/2013',
    'Emergency Shelter': 322,
    'Homelessness Prevention': 25,
    'Permanent supportive housing': 656,
    'Rapid Re-Housing': 211,
    'Transitional housing': 251,
    Total: 1465,
  },
  {
    Date: '12/2013',
    'Emergency Shelter': 345,
    'Homelessness Prevention': 44,
    'Permanent supportive housing': 671,
    'Rapid Re-Housing': 207,
    'Transitional housing': 254,
    Total: 1521,
  },
  {
    Date: '1/2014',
    'Emergency Shelter': 284,
    'Homelessness Prevention': 38,
    'Permanent supportive housing': 708,
    'Rapid Re-Housing': 223,
    'Transitional housing': 241,
    Total: 1494,
  },
  {
    Date: '2/2014',
    'Emergency Shelter': 266,
    'Homelessness Prevention': 32,
    'Permanent supportive housing': 696,
    'Rapid Re-Housing': 165,
    'Transitional housing': 247,
    Total: 1406,
  },
  {
    Date: '3/2014',
    'Emergency Shelter': 311,
    'Homelessness Prevention': 32,
    'Permanent supportive housing': 698,
    'Rapid Re-Housing': 195,
    'Transitional housing': 254,
    Total: 1490,
  },
  {
    Date: '4/2014',
    'Emergency Shelter': 210,
    'Homelessness Prevention': 19,
    'Permanent supportive housing': 719,
    'Rapid Re-Housing': 214,
    'Transitional housing': 246,
    Total: 1408,
  },
  {
    Date: '5/2014',
    'Emergency Shelter': 202,
    'Homelessness Prevention': 14,
    'Permanent supportive housing': 713,
    'Rapid Re-Housing': 199,
    'Transitional housing': 234,
    Total: 1362,
  },
  {
    Date: '6/2014',
    'Emergency Shelter': 177,
    'Homelessness Prevention': 16,
    'Permanent supportive housing': 722,
    'Rapid Re-Housing': 176,
    'Transitional housing': 237,
    Total: 1328,
  },
  {
    Date: '7/2014',
    'Emergency Shelter': 134,
    'Homelessness Prevention': 7,
    'Permanent supportive housing': 697,
    'Rapid Re-Housing': 177,
    'Transitional housing': 246,
    Total: 1261,
  },
  {
    Date: '8/2014',
    'Emergency Shelter': 124,
    'Homelessness Prevention': 7,
    'Permanent supportive housing': 702,
    'Rapid Re-Housing': 184,
    'Transitional housing': 245,
    Total: 1262,
  },
  {
    Date: '9/2014',
    'Emergency Shelter': 116,
    'Homelessness Prevention': 11,
    'Permanent supportive housing': 709,
    'Rapid Re-Housing': 165,
    'Transitional housing': 240,
    Total: 1241,
  },
  {
    Date: '10/2014',
    'Emergency Shelter': 118,
    'Homelessness Prevention': 16,
    'Permanent supportive housing': 687,
    'Rapid Re-Housing': 172,
    'Transitional housing': 237,
    Total: 1230,
  },
  {
    Date: '11/2014',
    'Emergency Shelter': 173,
    'Homelessness Prevention': 12,
    'Permanent supportive housing': 680,
    'Rapid Re-Housing': 174,
    'Transitional housing': 240,
    Total: 1279,
  },
  {
    Date: '12/2014',
    'Emergency Shelter': 193,
    'Homelessness Prevention': 11,
    'Permanent supportive housing': 668,
    'Rapid Re-Housing': 162,
    'Transitional housing': 236,
    Total: 1270,
  },
  {
    Date: '1/2015',
    'Emergency Shelter': 293,
    'Homelessness Prevention': 14,
    'Permanent supportive housing': 655,
    'Rapid Re-Housing': 146,
    'Transitional housing': 241,
    Total: 1349,
  },
  {
    Date: '2/2015',
    'Emergency Shelter': 247,
    'Homelessness Prevention': 20,
    'Permanent supportive housing': 652,
    'Rapid Re-Housing': 147,
    'Transitional housing': 244,
    Total: 1310,
  },
  {
    Date: '3/2015',
    'Emergency Shelter': 173,
    'Homelessness Prevention': 21,
    'Permanent supportive housing': 629,
    'Rapid Re-Housing': 127,
    'Transitional housing': 236,
    Total: 1186,
  },
  {
    Date: '4/2015',
    'Emergency Shelter': 131,
    'Homelessness Prevention': 18,
    'Permanent supportive housing': 625,
    'Rapid Re-Housing': 146,
    'Transitional housing': 240,
    Total: 1160,
  },
  {
    Date: '5/2015',
    'Emergency Shelter': 122,
    'Homelessness Prevention': 13,
    'Permanent supportive housing': 633,
    'Rapid Re-Housing': 161,
    'Transitional housing': 238,
    Total: 1167,
  },
  {
    Date: '6/2015',
    'Emergency Shelter': 131,
    'Homelessness Prevention': 15,
    'Permanent supportive housing': 633,
    'Rapid Re-Housing': 171,
    'Transitional housing': 237,
    Total: 1187,
  },
  {
    Date: '7/2015',
    'Emergency Shelter': 127,
    'Homelessness Prevention': 16,
    'Permanent supportive housing': 636,
    'Rapid Re-Housing': 181,
    'Transitional housing': 249,
    Total: 1209,
  },
  {
    Date: '8/2015',
    'Emergency Shelter': 116,
    'Homelessness Prevention': 22,
    'Permanent supportive housing': 619,
    'Rapid Re-Housing': 216,
    'Transitional housing': 251,
    Total: 1224,
  },
  {
    Date: '9/2015',
    'Emergency Shelter': 111,
    'Homelessness Prevention': 25,
    'Permanent supportive housing': 621,
    'Rapid Re-Housing': 253,
    'Transitional housing': 244,
    Total: 1254,
  },
  {
    Date: '10/2015',
    'Emergency Shelter': 122,
    'Homelessness Prevention': 34,
    'Permanent supportive housing': 633,
    'Rapid Re-Housing': 279,
    'Transitional housing': 242,
    Total: 1310,
  },
  {
    Date: '11/2015',
    'Emergency Shelter': 119,
    'Homelessness Prevention': 30,
    'Permanent supportive housing': 627,
    'Rapid Re-Housing': 283,
    'Transitional housing': 271,
    Total: 1330,
  },
  {
    Date: '12/2015',
    'Emergency Shelter': 134,
    'Homelessness Prevention': 28,
    'Permanent supportive housing': 633,
    'Rapid Re-Housing': 302,
    'Transitional housing': 268,
    Total: 1365,
  },
  {
    Date: '1/2016',
    'Emergency Shelter': 223,
    'Homelessness Prevention': 31,
    'Permanent supportive housing': 629,
    'Rapid Re-Housing': 311,
    'Transitional housing': 276,
    Total: 1470,
  },
  {
    Date: '2/2016',
    'Emergency Shelter': 198,
    'Homelessness Prevention': 28,
    'Permanent supportive housing': 629,
    'Rapid Re-Housing': 316,
    'Transitional housing': 282,
    Total: 1453,
  },
  {
    Date: '3/2016',
    'Emergency Shelter': 154,
    'Homelessness Prevention': 31,
    'Permanent supportive housing': 630,
    'Rapid Re-Housing': 330,
    'Transitional housing': 266,
    Total: 1411,
  },
  {
    Date: '4/2016',
    'Emergency Shelter': 130,
    'Homelessness Prevention': 26,
    'Permanent supportive housing': 631,
    'Rapid Re-Housing': 342,
    'Transitional housing': 267,
    Total: 1396,
  },
  {
    Date: '5/2016',
    'Emergency Shelter': 128,
    'Homelessness Prevention': 15,
    'Permanent supportive housing': 632,
    'Rapid Re-Housing': 338,
    'Transitional housing': 263,
    Total: 1376,
  },
  {
    Date: '6/2016',
    'Emergency Shelter': 115,
    'Homelessness Prevention': 24,
    'Permanent supportive housing': 636,
    'Rapid Re-Housing': 334,
    'Transitional housing': 259,
    Total: 1368,
  },
  {
    Date: '7/2016',
    'Emergency Shelter': 105,
    'Homelessness Prevention': 22,
    'Permanent supportive housing': 619,
    'Rapid Re-Housing': 341,
    'Transitional housing': 262,
    Total: 1349,
  },
  {
    Date: '8/2016',
    'Emergency Shelter': 134,
    'Homelessness Prevention': 29,
    'Permanent supportive housing': 612,
    'Rapid Re-Housing': 295,
    'Transitional housing': 269,
    Total: 1339,
  },
  {
    Date: '9/2016',
    'Emergency Shelter': 103,
    'Homelessness Prevention': 17,
    'Permanent supportive housing': 604,
    'Rapid Re-Housing': 255,
    'Transitional housing': 268,
    Total: 1247,
  },
  {
    Date: '10/2016',
    'Emergency Shelter': 108,
    'Homelessness Prevention': 19,
    'Permanent supportive housing': 591,
    'Rapid Re-Housing': 235,
    'Transitional housing': 271,
    Total: 1224,
  },
  {
    Date: '11/2016',
    'Emergency Shelter': 125,
    'Homelessness Prevention': 26,
    'Permanent supportive housing': 593,
    'Rapid Re-Housing': 249,
    'Transitional housing': 290,
    Total: 1283,
  },
  {
    Date: '12/2016',
    'Emergency Shelter': 133,
    'Homelessness Prevention': 25,
    'Permanent supportive housing': 587,
    'Rapid Re-Housing': 242,
    'Transitional housing': 270,
    Total: 1257,
  },
  {
    Date: '1/2017',
    'Emergency Shelter': 150,
    'Homelessness Prevention': 19,
    'Permanent supportive housing': 591,
    'Rapid Re-Housing': 214,
    'Transitional housing': 266,
    Total: 1240,
  },
  {
    Date: '2/2017',
    'Emergency Shelter': 159,
    'Homelessness Prevention': 20,
    'Permanent supportive housing': 614,
    'Rapid Re-Housing': 221,
    'Transitional housing': 277,
    Total: 1291,
  },
  {
    Date: '3/2017',
    'Emergency Shelter': 167,
    'Homelessness Prevention': 24,
    'Permanent supportive housing': 604,
    'Rapid Re-Housing': 208,
    'Transitional housing': 274,
    Total: 1277,
  },
];

class HomelessnessEnrollment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showingDefinitions: this.showingDefinitions };
  }

  toggleLongDesc() {
    this.setState({
      showingDefinitions: !this.state.showingDefinitions,
    });
  }

  render() {
    return (
      <div>
        <h3>Homeless program enrollments: a closer look</h3>
        <p>
          There are several types of temporary or permanent housing options for people experiencing homelessness or at imminent risk of homelessness in Buncombe County. These options are part of the homelessness system in our community. The below chart shows monthly enrollments in these programs.
          <br />
          <a href="javascript:void(0);" className="text-center inText" onClick={() => this.toggleLongDesc()}>
            {this.state.showingDefinitions ? 'Hide' : 'Show'} Program definitions
          </a>
          <div hidden={!this.state.showingDefinitions}>
            <ul>
              <li>
                <div>
                  <strong>Emergency Shelter</strong>
                </div>
                <div>
                  a facility that’s primary purpose is to provide temporary shelter for the general homeless population or those that serve a specific client base such as Domestic Violence victims or youth under 18 years of age.
                </div>
              </li>
              <li>
                <div>
                  <strong>Transitional Housing</strong>
                </div>
                <div>
                  housing projects that are designed to provide temporary housing and appropriate supportive services to homeless persons like Veterans or persons with substance abuse disorders to facilitate movement to independent living within 24 months.
                </div>
              </li>
              <li>
                <div>
                  <strong>Rapid Re-Housing (RRH)</strong>
                </div>
                <div>
                  provides for short-and/or medium term rental assistance to help a homeless individual or family or a household that is at imminent risk of homelessness (Homelessness Prevention) move into housing or stabilize their existing housing quickly and achieve housing stability and self-sufficiency in that housing.
                </div>
              </li>
              <li>
                <div>
                  <strong>Permanent Supportive Housing (PSH)</strong>
                </div>
                <div>
                  describes housing that is coupled with voluntary supportive services that are appropriate to the level of need and preferences of residents on a long-term basis. Subsidies and services may be long or short term in duration. PSH is usually appropriate and/or mandated by HUD for persons that are chronically homeless, have severe service needs and a disability.
                </div>
              </li>
            </ul>
          </div>
        </p>
        <div className="row">
          <div className="col-sm-12">
            <AreaChartContainer data={this.props.summaryData} mainAxisDataKey="Date" dataKeys={dataKeys} altText={'Area chart of HMIS enrollments'} colorScheme="bright_colors_2" />
          </div>
        </div>
      </div>
    );
  }
}

const dataShape = {
  month: PropTypes.string,
  'Emergency shelter': PropTypes.number,
  'Homelessness prevention': PropTypes.number,
  'Permanent supportive housing': PropTypes.number,
  'Rapid re-housing': PropTypes.number,
  'Transitional housing': PropTypes.number,
  Total: PropTypes.number,
};

HomelessnessEnrollment.propTypes = {
  summaryData: PropTypes.arrayOf(PropTypes.shape(dataShape)),
  showingDefinitions: PropTypes.bool, // eslint-disable-line
};

HomelessnessEnrollment.defaultProps = {
  summaryData: enrollmentData,
  showingDefinitions: false,
};

export default HomelessnessEnrollment;
