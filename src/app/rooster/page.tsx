import Homepage from '../../components/homepages';

const rooster = [
    "peter",
    "lightning",
    "Fireball",
    "Sméagol",
    "Legend",
    "Vicioustrex",
    "Eyeinthesky",
    "CodeSprite",
    "sofedupwithspam",
    "J L",
    "sbru2942",
    "Leo2009",
    "Mathlete11",
    "Rpcarnahan",
    "A1Creeper"
]; 

export default function Rooster () {
    return (
        <>
            <Homepage team="rooster" image="/assets/images/rooster.webp" link="" tagline="got a mean peck." members={rooster}/>
        </>
    );
}