import React from 'react';
import styled, { css } from 'styled-components';
import { ExperienceType } from '../../types';

export const Experience = (experience: ExperienceType) => {
  return (
    <Card>
      <BackgeoundImg path={experience.image} />
      <TextBold>{experience.period}</TextBold>
      <TextBold>{experience.role}</TextBold>
      <Strong>{experience.overview}</Strong>
      <Span>{experience.language}</Span>
      <Text>{experience.devPeriod}</Text>
      <Span>{experience.company}</Span>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: calc(50% - 30px);
  padding: 0 10px 10px;
  margin: 40px 15px 0;
  border-bottom: 2px solid #01a3a4;
`;

const BackgeoundImg = styled.div<{ path: string }>`
  ${({ path }) => {
    return css`
      background-image: url(${path});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 110px;
      height: 100px;
      opacity: 0.5;
      position: absolute;
      bottom: 20px;
      right: 2%;
    `;
  }}
`;

const TextBold = styled.p`
  color: #7f8c8d;
  display: block;
  font-weight: 550;
  font-size: 12px;
  margin: 5px 0;
`;

const Strong = styled.strong`
  margin-top: 15px;
  display: inline-block;
`;

const Text = styled.p`
  margin: 20px 0;
  font-size: 14px;
  font-weight: 300;
`;

const Span = styled.span`
  color: #7f8c8d;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;
