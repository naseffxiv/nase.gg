import React,  { CSSProperties } from 'react';
import clsx from 'clsx'; 
import useBaseUrl from '@docusaurus/useBaseUrl'; // Import the useBaseUrl function from Docusaurus
import './index.css'

const CardImage = ({
  className, 
  style,
  cardImageUrl,
  alt,
  title,
}) => {   
  const generatedCardImageUrl = useBaseUrl(cardImageUrl);
  return (
    <div
      className={clsx('card__image', className)}
      style={{style, backgroundImage: 'url(' + cardImageUrl + ')' }} alt={alt} title={title}
    />
  )
}
export default CardImage;
