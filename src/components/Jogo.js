
export default function Jogo({ renderPalavra, iniciarJogo, imagemForca, corLetra, palavraChute, palavraAleatoria}) {


    return (
        <>
            <div className="container">
                <img data-test="game-image" className="forca" src={imagemForca} />

                <div className="container-direita">
                    <div className="escolherPalavra" data-test="choose-word" onClick={() => iniciarJogo()}>Escolher Palavra</div>
                    <div className={`palavra ${corLetra}`} data-test="word"  data-answer={palavraAleatoria}>
                       {renderPalavra}
                       {palavraChute !== null ? palavraChute.map((i) => i) : false}
                    </div>
                </div>
            </div>
        </>
    )
}


