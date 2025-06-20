import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "../utils/animations";
import {explore1Img, explore2Img, exploreVideo} from "../utils";
import {useRef} from "react";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {scrub: 5.5},
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            전체 스토리 보기
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">티타늄으로 제작</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vw]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vw]">
                  <img src={explore2Img} alt="titanium2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro 는 {""}
                    <span className="text-white">항공우주 등급 티타늄 디자인을 적용한 최초의 iPhone이며</span>
                    ,우주선이 화성 탐사에 사용하는 것과 동일한 합금을 사용했습니다.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    티타늄은 모든 금속 중 최고의 강도 대비 무게 비율을 자랑하며, 이 덕분에 {""}
                    <span className="text-white">역대 가장 가벼운 Pro 모델</span>, 이 탄생했습니다. 기기를 손에 드는
                    순간 그 차이를 느끼실 수 있을 겁니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
