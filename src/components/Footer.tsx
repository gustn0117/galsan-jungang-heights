export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2 py-0.5 border border-gray-500 text-[10px] font-medium tracking-wider text-gray-400">
                갈산역
              </span>
              <span className="text-lg font-bold text-gray-300 tracking-tight">
                중앙하이츠
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              위치 정보 추후 업데이트 예정
              <br />
              대표전화: 1688-0458
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">바로가기</h4>
              <ul className="space-y-2 text-xs">
                <li><span className="hover:text-white cursor-pointer transition-colors">사업안내</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">프리미엄</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">단지안내</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">세대안내</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">고객센터</h4>
              <ul className="space-y-2 text-xs">
                <li><span className="hover:text-white cursor-pointer transition-colors">분양안내</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">홍보센터</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">관심고객등록</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2025 갈산역 중앙하이츠. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">개인정보처리방침</span>
            <span>|</span>
            <span className="hover:text-gray-400 cursor-pointer">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
