
import Card from '@site/src/components/Card';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardImage from '@site/src/components/Card/CardImage';
import Link from '@docusaurus/Link';
export default function CardGenerator({image, url, title}) {
    return(
        <div>
            <Link to={url}>
                <Card>
                    <CardImage cardImageUrl={image}
                    />
                    <CardFooter style={{}} className='text--left'> 
                        <div className='avatar'>
                        <div className='avatar__intro'>
                            <div className='avatar__name'>{title}</div>
                        </div>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    )
}