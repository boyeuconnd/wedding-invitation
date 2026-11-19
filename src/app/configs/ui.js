import images from "../images";

const WISH_API_LINK = ""; // use mock api
const cdnLink = "https://res.cloudinary.com/do6sozxbo/image/upload/f_auto,q_auto/v1/wedding5";
const cdnLink2 = "https://res.cloudinary.com/ph4aqsxn/image/upload/f_auto,q_auto/";

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    time: {
      date: "28/12",
      year: "2026",
      time: "13:00",
      full: "Thứ Hai, Ngày 28 Tháng 12 năm 2026",
    },
    address: "55 Âu Cơ, Phường Nam Định, Tỉnh Ninh Bình",
    street: "55 Âu Cơ, Phường Nam Định, Tỉnh Ninh Bình",
    mapUrl: "https://maps.app.goo.gl/45sihFA5EzDJ5J2WA",
    phone: "0829 427 568",
    posision: "bottom left",
  },
];

// December
const daysInMonth = [
  {
    title: "mon",
    days: [0, 7, 14, 21, 28],
  },
  {
    title: "tue",
    days: [1, 8, 15, 22, 29],
  },
  {
    title: "wed",
    days: [2, 9, 16, 23, 30],
  },
  {
    title: "thu",
    days: [3, 10, 17, 24, 31],
  },
  {
    title: "fri",
    days: [4, 11, 18, 25, 0],
  },
  {
    title: "sat",
    days: [5, 12, 19, 26, 0],
  },
  {
    title: "sun",
    days: [6, 13, 20, 27, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage:
    "https://res.cloudinary.com/ph4aqsxn/image/upload/f_auto,q_auto/NQM00540",
  brideFirstLetter: "Đ",
  groomFirstLetter: "N",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "bride",
      name: "Lê Thị Nga",
      avatar: `${cdnLink2}/NQM00310`,
      images: [`${cdnLink2}/NQM00302`, `${cdnLink2}/NQM00293`],
    },
    {
      title: "groom",
      name: "Phạm Hải Đăng",
      avatar: `${cdnLink2}/NQM00332`,
      images: [`${cdnLink2}/NQM00375`, `${cdnLink2}/NQM00381`],
    },
  ],
};

// invitation section

const invitationSection = {
  imgs: [`${cdnLink}/e7`, `${cdnLink}/e4`, `${cdnLink}/e6`],
  activeDay: 28,
};

// album section

const albumSection = {
  images: [
    `${cdnLink}/e1`,
    `${cdnLink}/e3`,
    `${cdnLink}/e4`,
    `${cdnLink}/e5`,
    `${cdnLink}/e7`,
    `${cdnLink}/e8`,
  ],
};

// guestbook section

const guestbookSection = {
  image: `${cdnLink}/e5`,
  time: "28/12/2026",
};

// gift section

const giftSection = {
  image:
    "https://res.cloudinary.com/do6sozxbo/image/upload/v1730383598/wedding5/am3.jpg",
  brideBank: {
    name: "   LE THI NGA",
    bankName: "VIETCOM BANK",
    qr: images.qr_cd.default.src,
    bankNumber: "107880386791",
  },
  groomBank: {
    name: "PHAM HAI DANG",
    bankName: "TECHCOMBANK",
    qr: images.qr_cr.default.src,
    bankNumber: "2418666668",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 28,
    month: 12,
    hour: 13,    // 24-hour format
    minute: 0,
    second: 0,
  },
};

// final section

const finalSection = {
  images: [
    `${cdnLink}/final1`,
    `${cdnLink}/final2`,
    `${cdnLink}/final3`,
    `${cdnLink}/final4`,
  ],
};

// Album Page

const albumPage = {
  topImage: `${cdnLink}/aland3`,
  bottomImage: `${cdnLink}/aland2`,
  mainImage: `${cdnLink}/e1`,
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `${cdnLink}/e1`,
      },

      {
        id: 2,
        img: `${cdnLink}/e4`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: `${cdnLink}/e3`,
      },
      {
        id: 4,
        img: `${cdnLink}/e5`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `${cdnLink}/e6`,
      },
      {
        id: 6,
        img: `${cdnLink}/e7`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: `${cdnLink}/e8`,
      },
      {
        id: 8,
        img: `${cdnLink}/groom3`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: `${cdnLink}/e9`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: `${cdnLink}/e13`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: `${cdnLink}/e10`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: `${cdnLink}/e11`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: `${cdnLink}/e15`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: `${cdnLink}/e14`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: `${cdnLink}/e16`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: `${cdnLink}/e17`,
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Báo Hỉ Đăng - Nga | Kính Mời",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/land.jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Đăng - Nga",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/am11.jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730394150/wedding5_1/a3.jpg",
  },
  album: {
    title: "Album của Đăng - Nga",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/final3.jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
