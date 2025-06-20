import {footerLinks} from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-zinc">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            제품 구매 방법 더 알아보기: <span className="underline text-blue">Apple Store 찾기</span>
            {""} 또는 {""}
            <span className="underline text-blue">가까운 다른 판매점 </span>
          </p>
          <p className="font-semibold text-gray text-xs">또는 000800-040-1966으로 전화하세요</p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright © 2024 Apple Inc. 모든 권리 보유.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link} {i !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
