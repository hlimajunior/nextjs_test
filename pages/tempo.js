function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático - com delay)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 10
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;