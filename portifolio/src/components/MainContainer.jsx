import { useRef, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import './MainContainer.css';
import './UseScrollAnimation.css'

const useScrollAnimation = (initialTransform) => {
  const elementRef = useRef();

  const animation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: initialTransform },
  });

  const isElementVisible = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isElementVisible(elementRef.current)) {
        elementRef.current.classList.add('animate');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return { elementRef, animation };
};

const useScrollAnimationLeft = () => {
  return useScrollAnimation('translateX(-100px)');
};

const useScrollAnimationRight = () => {
  return useScrollAnimation('translateX(100px)');
};

const useScrollAnimationBottom = () => {
  return useScrollAnimation('translateY(100px)');
};

const MainContainer = () => {
  const { elementRef: elementRefUm, animation: animationUm } = useScrollAnimationLeft();
  const { elementRef: elementRefDois, animation: animationDois } = useScrollAnimationRight();
  const { elementRef: elementRefTres, animation: animationTres } = useScrollAnimationBottom();

  return (
    <>
      <main className="mainApp">
        <div className="mainCenter">
          <section className="section sectionUm">
            <animated.div ref={elementRefUm} className="animated-element" style={animationUm}>
              <div className="mainSectionsBox secUm">
                <h2>DESIGNER</h2>
                <p>Criamos o seu Design com a cara do seu negócio, marcando o mundo digital.</p>
                <button>Whatssap</button>
              </div>
            </animated.div>
            <animated.div ref={elementRefTres} className="animated-element" style={animationTres}>
            <div className="mainSectionsBox">
              <img className='imgSecUm' src="/img/gatinho3D.png" alt="Fundo do Site" />
            </div>
            </animated.div>
            <animated.div ref={elementRefDois} className="animated-element" style={animationDois}>
            <div>
            <div className="mainSectionsBox secUmDois">
              <h2>&lt;CODER&gt;</h2>
              <p>Desenvolvemos seu site a partir do Design que é a cara do seu empreendimento.</p>
              <div className="sectionUmSocial">
                <img src="./img/Instaa.png" alt="Instagram" />
                <img src="./img/GitHub.png" alt="GitHub" />
                <img src="./img/TikTok.png" alt="TikTok" />
              </div>
            </div>
            </div>
            </animated.div>
          </section>
          <section className="section sectionDois">
              <div className="mainSectionsBox secDois">
                <h2>SEÇÃO</h2>
                <p>Paragrafo</p>
              </div>
            <div className="mainSectionsBox"></div>
          </section>
          <section className="section sectionTres">
              <div className="mainSectionsBox secTres">
                <h2>SEÇÃO</h2>
                <p>Paragrafo</p>
              </div>
            <div className="mainSectionsBox"></div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainContainer;
