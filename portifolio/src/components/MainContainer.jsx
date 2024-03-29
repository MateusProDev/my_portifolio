import { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import "./MainContainer.css";
import "./UseScrollAnimation.css";
import ApiData from "./ApiData";

const useScrollAnimation = (initialTransform) => {
  const elementRef = useRef();

  const animation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: initialTransform },
  });

  const isElementVisible = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isElementVisible(elementRef.current)) {
        elementRef.current.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { elementRef, animation };
};

const useScrollAnimationLeft = () => {
  return useScrollAnimation("translateX(-100px)");
};

const useScrollAnimationRight = () => {
  return useScrollAnimation("translateX(100px)");
};

const useScrollAnimationBottom = () => {
  return useScrollAnimation("translateY(100px)");
};

const MainContainer = () => {
  const { elementRef: elementRefUm, animation: animationUm } =
    useScrollAnimationLeft();
  const { elementRef: elementRefDois, animation: animationDois } =
    useScrollAnimationRight();
  const { elementRef: elementRefTres, animation: animationTres } =
    useScrollAnimationBottom();


  const [number, setNumber] = useState(0);

  const contador = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <main className="mainApp">
        <div className="mainCenter">
          <section className="section sectionUm">
            <animated.div
              ref={elementRefUm}
              className="animated-element"
              style={animationUm}
            >
              <div className="mainSectionsBox secUm">
                <h2>DESIGNER</h2>
                <p>
                  Especialista em criar designs que cativam e destacam a
                  identidade do seu negócio.
                </p>
                <a href="https://wa.me/5585997977730?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre%2C+como+adquirir+um+site.">
                  <button>Whatsapp</button>
                </a>
              </div>
            </animated.div>
            <animated.div
              ref={elementRefTres}
              className="animated-element"
              style={animationTres}
            >
              <div className="mainSectionsBox secImg">
                <img
                  className="imgSecUm"
                  src="/img/gatinho3D.png"
                  alt="Fundo do Site"
                />
              </div>
            </animated.div>
            <animated.div
              ref={elementRefDois}
              className="animated-element"
              style={animationDois}
            >
              <div>
                <div className="mainSectionsBox secUmDois">
                  <h2>&lt;CODER&gt;</h2>
                  <p>
                    Transformo designs em sites funcionais e atrativos,
                    representando sua marca com excelência.
                  </p>
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
              <h2>ABOUT</h2>
              <p id="paragraphZ">
                No início de 2023, tomei a decisão de me aventurar no vasto{" "}
                <strong>mundo da programação</strong> e desde então venho me
                dedicando <strong>intensamente</strong> a aprimorar minhas
                habilidades em <strong>UI</strong> e{" "}
                <strong>desenvolvimento de software</strong>. Nas horas vagas,
                encontrar-me diante do teclado,{" "}
                <strong>programando como hobby</strong>, explorando novas
                tecnologias e desbravando os caminhos do código é o que mais me
                fascina.
              </p>
            </div>
            <animated.div
              ref={elementRefTres}
              className="animated-element"
              style={animationTres}
            >
              <div>
                <img id="lua" src="./img/lua.png" alt="lua" />
              </div>
            </animated.div>
            <div className="mainSectionsBox secDoisDois">
              <p>
                Além disso, adoro <strong>passear com minha esposa</strong>,
                aproveitando cada momento juntos. Atualmente, estou{" "}
                <strong>imerso no desenvolvimento</strong> de um projeto similar
                ao <strong>GitHub</strong> para uma pequena comunidade da qual
                faço parte, conhecida como <strong>APCE.</strong>
              </p>
            </div>
          </section>
          <section className="section sectionTres">
            <div className="mainSectionsBox secTres">
              <animated.div
                ref={elementRefDois}
                className="animated-element"
                style={animationDois}
              >
                <img
                  id="lampada"
                  src="./img/lampadaTerra.png"
                  alt="lampada com a terra dentro"
                />
              </animated.div>
              <h2>EXPERIENCE</h2>
              <ApiData />
            </div>
          </section>
          <section>
            <div>
              <p>Contador: {number} </p>
              <button onClick={contador}> Adcionar</button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainContainer;
