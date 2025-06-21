import {useGSAP} from "@gsap/react";
import {chipImg, frameImg, frameVideo} from "../utils";
import gsap from "gsap";
import {useRef} from "react";
import {animateWithGsap} from "../utils/animations";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "top 80%",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    const video = videoRef.current;
    if (video) {
      gsap.to(video, {
        scrollTrigger: {
          trigger: video,
          start: "top 80%",
          toggleActions: "play pause reverse reset",
          onEnter: () => {
            video.play().catch(() => {});
          },
          onLeave: () => {
            video.pause();
          },
          onEnterBack: () => {
            video.play().catch(() => {});
          },
          onLeaveBack: () => {
            video.pause();
          },
        },
      });
    }
  }, []);

  return (
    <section className="common-padding overflow-x-hidden">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip
            <br /> 게이밍의 대성공
          </h2>

          <p className="hiw-subtitle">드디어. Apple GPU 역사상 가장 거대한 재설계가 시작됩니다.</p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="frame" className="bg-transparent relative z-20" draggable={false} />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">붕괴: 스타레일 </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro는 완전히 새로운 차원의 iPhone 칩으로{""}
              <span className="text-white">역대 최고의 그래픽 성능을 자랑합니다</span>
            </p>

            <p className="hiw-text g_fadeIn">
              모바일 {""}
              <span className="text-white">게임은 훨씬 더 몰입감 넘치게 보이고 느껴질 겁니다</span>, 놀랍도록 세밀한
              환경과 캐릭터 덕분에요.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">새로운</p>
            <p className="hiw-bigtext">Pro급 GPU</p>
            <p className="hiw-text">6개 코어 탑재</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
