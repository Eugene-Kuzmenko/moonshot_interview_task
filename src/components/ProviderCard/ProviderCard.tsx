import React, { memo } from 'react';

import { ProviderCardData } from 'types/provider';

import {
  Card,
  Content,
  ProviderLogo,
  ContentItem,
  OfferSubText,
  Text,
  SlotsContentItem,
  SlotsImage,
  Slots,
  RatingStars,
  ScoreCircle,
  ButtonLink,
  SubTitle,
  Disclaimer,
} from './components';

type CasinoBrandCardProps = ProviderCardData;


const ProviderCard = (props: CasinoBrandCardProps) => {
  const {
    providerLogo,
    providerBonus,
    slotsImages,
    providerRating,
    providerScore,
    providerVisitLink,
    minDeposit,
    minDepositLabel,
    providerLegalDisclaimer,
  } = props;
  const { offerTitle, offerSubText } = providerBonus;
  const [offerPart, offerSite] = offerSubText.split(', ');
  const [offerTerms, offerAgeRestriction] = offerPart.split('. ')

  return (
    <Card>
      <Content>
        <ContentItem>
          <ProviderLogo {...providerLogo.logo} />
        </ContentItem>
        <ContentItem shouldGrow>
          <h3>{offerTitle}</h3>
          <OfferSubText>
            <Text color="link">{offerTerms} </Text>
            <Text color="danger">{offerAgeRestriction}</Text>{', '}
            {offerSite}
          </OfferSubText>
        </ContentItem>
        <SlotsContentItem>
          {slotsImages.slice(0, 3).map(({ image, text }) => (
            <Slots>
              <SlotsImage {...image} />
              <SubTitle withUnderline>{text}</SubTitle>
            </Slots>
          ))}
        </SlotsContentItem>
        <ContentItem>
          <RatingStars rating={providerRating.value}/>
          <div>Votes ({providerRating.votes})</div>
          <SubTitle withUnderline>
            <a href={providerRating.page.path}>{providerRating.linkText}</a>
          </SubTitle>
        </ContentItem>
        <ContentItem>
          <ScoreCircle rating={providerScore.score}/>
        </ContentItem>
        <ContentItem>
          <ButtonLink href={providerVisitLink.link}>
            {providerVisitLink.text}
          </ButtonLink>
          <SubTitle>
            {minDepositLabel} - {minDeposit}
          </SubTitle>
        </ContentItem>
      </Content>
      <Disclaimer>{providerLegalDisclaimer}</Disclaimer>
    </Card>
  );
};

export default memo(ProviderCard);
