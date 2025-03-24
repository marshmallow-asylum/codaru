import Homepage from '../../components/homepages';

const rooster = [
    "leaferstudios",
    "thalegomango",
    "VVhiteTiger",
    "Polar",
    "Graffiti.co",
    "cwalsh",
    "Ghost141",
    "inSYNC",
    "-A--I-",
    "Adriana",
    "emvalle10",
    "SnowyMountain",
    "Test_tube",
    "Gavin T",
    "Doglover",
    "Cyan Spirit"
]; 

export default function Rat () {
    return (
        <>
            <Homepage team="rat" image="/assets/images/rat.webp" link="" tagline="caused the bubonic plague. don't mess with them." members={rooster}/>
        </>
    );
}