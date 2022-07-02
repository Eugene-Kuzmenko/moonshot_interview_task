
export interface ImageData {
  src: string,
  alt: string,
}

export interface LinkData {
  ling: string,
  text: string,
}

export interface ProviderLogo {
  hideNumber: true,
  logo: ImageData,
  logoMobile: ImageData,
  useAltLogoForMobile: boolean,
}

export interface ProviderRatingPageData {
  path: string,
  title: string,
  id: 0,
}

export interface ProviderRating {
  value: number,
  linkText: string,
  page: ProviderRatingPageData,
  votes: number,
  votesFollowText: string,
}

export interface ProviderBonus {
  offerTitle: string,
  offerSubText: string,
}

export interface ProviderScore {
  score: number,
  progressBar: boolean,
  animation: boolean,
}

export interface ImageWithTextData {
  image: ImageData,
  text: string,
}

export interface ProviderCardData {
  providerName: string,
  providerDisclaimerHiderForDesktop: boolean,
  providerLogo: ProviderLogo,
  providerRating: ProviderRating,
  minDeposit: string,
  minDepositLabel: string,
  providerBonus: ProviderBonus,
  providerScore: ProviderScore,
  providerVisitLink: LinkData,
  providerLegalDisclaimer: string,
  slotsImages: ImageWithTextData[],
}
