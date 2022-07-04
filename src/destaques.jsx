import './destaques.css'
function Destaques(){
    
    return( 
    <div className='destaquesgeral'>
        <div>
            <h1>Destaques</h1>
        </div>

        <div className='produtos'>

            <button className='produto1'>
                    <img className='imgdestaque' src='../public/big-king.webp' alt='big king'/>
                    <p className='tituloproduto'>Combo Big King</p>
                    <p >Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...</p>
                    <p className='bold'>Serve 1 pessoa</p>
                    <p className='bold'>R$ 41,90</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='../public/cheddar-duplo.webp' alt='big king'/>
                    <p className='tituloproduto'>Combo Cheddar Duplo</p>
                    <p>Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão preto com gergelim......</p>
                    <p className='bold'>Serve 1 pessoa</p>
                    <p className='bold'>R$ 41,90</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='../public/cheeseburger-duplo.webp' alt='big king'/>
                    <p className='tituloproduto'>Combo Cheeseburguer Duplo com Bacon</p>
                    <p>Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...</p>
                    <p className='bold'>Serve 1 pessoa</p>
                    <p className='bold'>R$ 36,90</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='../public/mega-stacker.webp' alt='big king'/>
                    <p className='tituloproduto'>Combo Mega Stacker 2.0</p>
                    <p>Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...</p>
                    <p className='bold'>Serve 1 pessoa</p>
                    <p className='bold'>R$ 51,90</p>
            </button>

        </div>
    </div>
    );
}
export default Destaques;