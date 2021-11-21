const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export default {
  Smallest: `(min-width: ${size.mobileS})`,
  Smaller: `(min-width: ${size.mobileM})`,
  Small: `(min-width: ${size.mobileL})`,
  Medium: `(min-width: ${size.tablet})`,
  Large: `(min-width: ${size.laptop})`,
  Xlarge: `(min-width: ${size.laptopL})`,
  XXlarge: `(min-width: ${size.desktop})`,
  XXXlarge: `(min-width: ${size.desktop})`,
};
