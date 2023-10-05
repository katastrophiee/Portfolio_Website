import '../Styles/ArtPageStyle.css';
import cat from '../Assets/cat_transparent.png';

export default function Art() {
    return(
        <>
            <DisplayImage imagePath={cat} imageName="Heart Cat"/>
        </>
    );
}

function DisplayImage({ imagePath, imageName }){
    return(
        <img className='art' src={imagePath} alt={imageName} />
    );
}