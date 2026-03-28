"use client";

/* ───────────────────────────────────────────
   공급안내 – PDF 내용을 HTML로 구성
   ─────────────────────────────────────────── */

const th = "px-3 py-2.5 text-center font-bold text-white text-[13px] border border-gray-200";
const thSub = "px-3 py-2.5 text-center font-bold text-navy text-[13px] bg-blue-50/60 border border-gray-200";
const td = "px-3 py-2.5 text-center text-[13px] text-gray-700 border border-gray-200";
const tdL = "px-3 py-2.5 text-left text-[13px] text-gray-700 border border-gray-200";
const sectionTitle = "text-[18px] md:text-[20px] font-bold text-navy mb-4 flex items-center gap-2";
const note = "text-[12px] text-gray-500 leading-[1.8] mt-3";

export default function SupplyContent() {
  return (
    <div className="space-y-12">

      {/* ■ 공급위치 / 공급규모 / 입주시기 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">공급 개요</h4>
        </div>
        <div className="p-6 md:p-8 space-y-4 text-[14px] text-gray-700 leading-[1.9]">
          <p><strong className="text-navy">■ 공급위치 :</strong> 인천광역시 부평구 갈산동 181-1 외 1필지</p>
          <p><strong className="text-navy">■ 공급규모 :</strong> 아파트 지하 1층, 지상 19층, 3개동 총 126세대 중 일반분양 50세대(조합원 71세대, 보류지 5세대)<br />
            <span className="ml-[88px]">[특별공급 29세대(기관추천 5세대, 다자녀가구 5세대, 신혼부부 12세대, 노부모부양 2세대, 생애최초 5세대 포함)] 및 부대복리시설</span>
          </p>
          <p><strong className="text-navy">■ 입주시기 :</strong> 2026년 9월 예정(정확한 입주일자는 추후 통보함)</p>
        </div>
      </div>

      {/* ■ 공급대상(민영주택) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">공급대상 (민영주택)</h4>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-right text-[12px] text-gray-400 mb-2">[단위 : ㎡, 세대]</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-navy">
                  <th className={th} rowSpan={2}>주택형<br/><span className="text-[11px] font-normal">(전용면적기준)</span></th>
                  <th className={th} rowSpan={2}>약식<br/>표기<br/><span className="text-[11px] font-normal">(타입)</span></th>
                  <th className={th} colSpan={3}>주택공급면적(㎡)</th>
                  <th className={th} rowSpan={2}>기타<br/>공용면적</th>
                  <th className={th} rowSpan={2}>계약<br/>면적<br/><span className="text-[11px] font-normal">(세대주장등)</span></th>
                  <th className={th} rowSpan={2}>세대별 총공급<br/>대지지분 세대수</th>
                  <th className={th} colSpan={7}>무주택세대<br/>구성원</th>
                  <th className={th} rowSpan={2}>일반공급<br/>세대수</th>
                  <th className={th} rowSpan={2}>최하층<br/>우선배정<br/>세대수</th>
                </tr>
                <tr className="bg-navy">
                  <th className={th}>주거<br/>전용면적</th>
                  <th className={th}>주거<br/>공용면적</th>
                  <th className={th}>소계</th>
                  <th className={th}>기관<br/>추천</th>
                  <th className={th}>다자녀<br/>가구</th>
                  <th className={th}>신혼<br/>부부</th>
                  <th className={th}>노부모<br/>부양</th>
                  <th className={th}>생애<br/>최초</th>
                  <th className={th}>계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>059.7864</td>
                  <td className={td}>59</td>
                  <td className={td}>59.7864</td>
                  <td className={td}>21.0307</td>
                  <td className={td}>80.8171</td>
                  <td className={td}>24.7220</td>
                  <td className={td}>105.5391</td>
                  <td className={td}>31.80</td>
                  <td className={td}>50</td>
                  <td className={td}>5</td>
                  <td className={td}>5</td>
                  <td className={td}>12</td>
                  <td className={td}>2</td>
                  <td className={td}>5</td>
                  <td className={td}>29</td>
                  <td className={td}>21</td>
                  <td className={td}>2</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className={td} colSpan={7}>합 계</td>
                  <td className={td}></td>
                  <td className={td}>50</td>
                  <td className={td}>5</td>
                  <td className={td}>5</td>
                  <td className={td}>12</td>
                  <td className={td}>2</td>
                  <td className={td}>5</td>
                  <td className={td}>29</td>
                  <td className={td}>21</td>
                  <td className={td}>2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={note}>※ 상기 면적은 소수점 넷째 자리까지 표기되어, 소수점 이하 단수조정으로 면적이 상이할 수 있으며, 전체 면적합과 세대별 계약면적과의 합계는 약간의 오차가 발생할 수 있습니다.</p>
        </div>
      </div>

      {/* ■ 공급금액 및 납부일정 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">공급금액 및 납부일정</h4>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-right text-[12px] text-gray-400 mb-2">[단위 : 세대, 원]</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-navy">
                  <th className={th} rowSpan={2}>약식표기<br/>(타입)</th>
                  <th className={th} rowSpan={2}>동호</th>
                  <th className={th} rowSpan={2}>층<br/>구분</th>
                  <th className={th} rowSpan={2}>세<br/>대<br/>수</th>
                  <th className={th} colSpan={2}>총 분양 금액</th>
                  <th className={th} colSpan={2}>계약금 (10%)</th>
                  <th className={th} colSpan={2}>중도금 (60%)</th>
                  <th className={th} rowSpan={2}>잔금(30%)</th>
                </tr>
                <tr className="bg-navy">
                  <th className={th}>대지비</th>
                  <th className={th}>건축비</th>
                  <th className={th}>계</th>
                  <th className={th}>계약 시</th>
                  <th className={th}>1차 (40%)<br/>2026.05.27</th>
                  <th className={th}>2차 (20%)<br/>2026.07.27</th>
                </tr>
              </thead>
              <tbody>
                {/* 101동 */}
                <tr><td className={td} rowSpan={4}>59</td><td className={td} rowSpan={4}>101동<br/>1,2호</td><td className={td}>4층</td><td className={td}>2</td><td className={td}>228,870,675</td><td className={td}>257,054,325</td><td className={td}>485,925,000</td><td className={td}>48,592,500</td><td className={td}>194,370,000</td><td className={td}>97,185,000</td><td className={td}>145,777,500</td></tr>
                <tr><td className={td}>8층</td><td className={td}>1</td><td className={td}>233,689,005</td><td className={td}>262,465,995</td><td className={td}>496,155,000</td><td className={td}>49,615,500</td><td className={td}>198,462,000</td><td className={td}>99,231,000</td><td className={td}>148,846,500</td></tr>
                <tr><td className={td}>10층 ~ 14층</td><td className={td}>4</td><td className={td}>238,507,335</td><td className={td}>267,877,665</td><td className={td}>506,385,000</td><td className={td}>50,638,500</td><td className={td}>202,554,000</td><td className={td}>101,277,000</td><td className={td}>151,915,500</td></tr>
                <tr><td className={td}>15층 ~ 16층</td><td className={td}>2</td><td className={td}>240,916,500</td><td className={td}>270,583,500</td><td className={td}>511,500,000</td><td className={td}>51,150,000</td><td className={td}>204,600,000</td><td className={td}>102,300,000</td><td className={td}>153,450,000</td></tr>
                {/* 102동 */}
                <tr><td className={td} rowSpan={5}>59</td><td className={td} rowSpan={5}>102동<br/>1,2호</td><td className={td}>3층</td><td className={td}>1</td><td className={td}>226,461,510</td><td className={td}>254,348,490</td><td className={td}>480,810,000</td><td className={td}>48,081,000</td><td className={td}>192,324,000</td><td className={td}>96,162,000</td><td className={td}>144,243,000</td></tr>
                <tr><td className={td}>4층</td><td className={td}>1</td><td className={td}>228,870,675</td><td className={td}>257,054,325</td><td className={td}>485,925,000</td><td className={td}>48,592,500</td><td className={td}>194,370,000</td><td className={td}>97,185,000</td><td className={td}>145,777,500</td></tr>
                <tr><td className={td}>5층 ~ 9층</td><td className={td}>4</td><td className={td}>233,689,005</td><td className={td}>262,465,995</td><td className={td}>496,155,000</td><td className={td}>49,615,500</td><td className={td}>198,462,000</td><td className={td}>99,231,000</td><td className={td}>148,846,500</td></tr>
                <tr><td className={td}>10층 ~ 13층</td><td className={td}>5</td><td className={td}>238,507,335</td><td className={td}>267,877,665</td><td className={td}>506,385,000</td><td className={td}>50,638,500</td><td className={td}>202,554,000</td><td className={td}>101,277,000</td><td className={td}>151,915,500</td></tr>
                <tr><td className={td}>16층</td><td className={td}>1</td><td className={td}>240,916,500</td><td className={td}>270,583,500</td><td className={td}>511,500,000</td><td className={td}>51,150,000</td><td className={td}>204,600,000</td><td className={td}>102,300,000</td><td className={td}>153,450,000</td></tr>
                {/* 103동 */}
                <tr><td className={td} rowSpan={6}>59</td><td className={td} rowSpan={6}>103동<br/>1,2,3,4호</td><td className={td}>2층</td><td className={td}>2</td><td className={td}>224,052,345</td><td className={td}>251,642,655</td><td className={td}>475,695,000</td><td className={td}>47,569,500</td><td className={td}>190,278,000</td><td className={td}>95,139,000</td><td className={td}>142,708,500</td></tr>
                <tr><td className={td}>3층</td><td className={td}>1</td><td className={td}>226,461,510</td><td className={td}>254,348,490</td><td className={td}>480,810,000</td><td className={td}>48,081,000</td><td className={td}>192,324,000</td><td className={td}>96,162,000</td><td className={td}>144,243,000</td></tr>
                <tr><td className={td}>4층</td><td className={td}>2</td><td className={td}>228,870,675</td><td className={td}>257,054,325</td><td className={td}>485,925,000</td><td className={td}>48,592,500</td><td className={td}>194,370,000</td><td className={td}>97,185,000</td><td className={td}>145,777,500</td></tr>
                <tr><td className={td}>5층 ~ 9층</td><td className={td}>9</td><td className={td}>233,689,005</td><td className={td}>262,465,995</td><td className={td}>496,155,000</td><td className={td}>49,615,500</td><td className={td}>198,462,000</td><td className={td}>99,231,000</td><td className={td}>148,846,500</td></tr>
                <tr><td className={td}>10층 ~ 13층</td><td className={td}>7</td><td className={td}>238,507,335</td><td className={td}>267,877,665</td><td className={td}>506,385,000</td><td className={td}>50,638,500</td><td className={td}>202,554,000</td><td className={td}>101,277,000</td><td className={td}>151,915,500</td></tr>
                <tr><td className={td}>15층 ~ 19층</td><td className={td}>8</td><td className={td}>240,916,500</td><td className={td}>270,583,500</td><td className={td}>511,500,000</td><td className={td}>51,150,000</td><td className={td}>204,600,000</td><td className={td}>102,300,000</td><td className={td}>153,450,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-right text-[12px] text-gray-400 mt-1">입주지정일</p>
        </div>
      </div>

      {/* ■ 분양대금 납부계좌 및 납부방법 안내 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">분양대금 납부계좌 및 납부방법 안내</h4>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구 분</th>
                  <th className={thSub}>금융기관</th>
                  <th className={thSub}>계좌번호</th>
                  <th className={thSub}>예금주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>분양대금 납부계좌</td>
                  <td className={td}>우리은행</td>
                  <td className={`${td} font-bold`}>1005-404-827253</td>
                  <td className={td}>주택도시보증공사 서부피에프보증융지사 외 3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-[13px] text-gray-600 leading-[1.9]">
            <p>• 지정된 중도금 및 잔금 납부일에 아래의 해당 금융기관 계좌로 입금하시기 바라며, 사업주체에서는 별도의 통보를 하지 않음.</p>
            <p>• 무통장 입금 시에는 호수 및 계약자 성명을 필히 기재하시기 바람. (예시 : 101동 101호 홍길동 → &apos;1010101홍길동&apos;)</p>
            <p>• (단, 무통장 입금자 중 부적격자로 판명된 자는 소명기간 이후 환불이 가능하며, 환불이자는 없음)</p>
            <p>• 계약금 납부 후 입금증을 홍보관에 계약 시 제출하여야 함. (홍보관 수납 불가)</p>
            <p>• 상기 관리계좌로 납부되지 아니한 분양대금은 인정하지 않으며, 주택도시보증공사의 분양보증 대상에 해당되지 않습니다.</p>
          </div>
        </div>
      </div>

      {/* ■ 발코니확장 공사비 및 납부계좌 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">발코니확장 공사비 및 납부계좌</h4>
        </div>
        <div className="p-6 md:p-8 space-y-4">
          <p className="text-right text-[12px] text-gray-400">[단위 : 원]</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구 분</th>
                  <th className={thSub}>공급금액</th>
                  <th className={thSub} colSpan={2}>납부일정</th>
                  <th className={thSub}>비 고</th>
                </tr>
                <tr className="bg-blue-50/40">
                  <th className={thSub}></th>
                  <th className={thSub}></th>
                  <th className={thSub}>계약금</th>
                  <th className={thSub}>잔금</th>
                  <th className={thSub}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>발코니확장 금액</td>
                  <td className={`${td} font-bold`}>14,200,000</td>
                  <td className={td}>2,840,000</td>
                  <td className={td}>11,360,000</td>
                  <td className={td}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구 분</th>
                  <th className={thSub}>금융기관</th>
                  <th className={thSub}>계좌번호</th>
                  <th className={thSub}>예금주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>발코니 확장 공사비 납부계좌</td>
                  <td className={td}>우리은행</td>
                  <td className={`${td} font-bold`}>1005-104-829941</td>
                  <td className={td}>백조아파트 소규모재건축정비사업조합 외3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ■ 청약 및 계약 등 주요일정 안내 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">청약 및 계약 등 주요일정 안내</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구 분</th>
                  <th className={thSub}>특별공급</th>
                  <th className={thSub}>일반공급 1순위</th>
                  <th className={thSub}>일반공급 2순위</th>
                  <th className={thSub}>당첨자발표</th>
                  <th className={thSub}>서류접수</th>
                  <th className={thSub}>계약체결</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${td} font-bold`}>일 정</td>
                  <td className={td}>2026.04.06.(월)</td>
                  <td className={td}>2026.04.07.(화)</td>
                  <td className={td}>2026.04.08.(수)</td>
                  <td className={td}>2026.04.15.(수)</td>
                  <td className={td}>2026.04.16.(목)<br/>~ 2026.04.25.(토)</td>
                  <td className={td}>2026.04.26.(일)<br/>~ 2026.04.28.(화)</td>
                </tr>
                <tr>
                  <td className={`${td} font-bold`}>방 법</td>
                  <td className={td}>• (PC·모바일) 청약홈(09:00 ~ 17:30)<br/>• (현장접수) 사업주체 홍보관</td>
                  <td className={td}>• (PC·모바일) 청약홈(09:00 ~ 17:30)<br/>• (현장접수) 청약통장 가입은행</td>
                  <td className={td}>• (PC·모바일) 청약홈</td>
                  <td className={td}></td>
                  <td className={td}>• 사업주체 홍보관</td>
                  <td className={td}>인천광역시 부평구 갈산동 181-1 외 1필지</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── 페이지 2 : 청약안내 ─── */}

      {/* ■ 청약일정 타임라인 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">청약 일정</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { label: "특별공급", date: "4월 6일(월)", color: "bg-orange-500" },
              { label: "1순위", date: "4월 7일(화)", color: "bg-green-600" },
              { label: "2순위", date: "4월 8일(수)", color: "bg-sky-500" },
              { label: "당첨자 발표", date: "4월 15일(목)", color: "bg-purple-600" },
              { label: "정당계약", date: "4월 26일(일) ~ 4월28일(화)", color: "bg-gray-700" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`${item.color} text-white text-[12px] font-bold px-4 py-1.5 rounded-full`}>{item.label}</span>
                <span className="text-[13px] text-gray-600 mt-2 font-medium">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ■ 1순위 청약 체크 포인트 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">1순위 청약 체크 포인트!</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: 1, title: "만 19세 이상\n누구나 청약 가능", desc: "세대주 및 세대원 청약 가능,\n세대 구성원 중복청약 가능" },
              { num: 2, title: "수도권 전 지역\n거주자 청약 가능", desc: "입주자 모집공고일 현재\n경기, 서울, 인천 거주자 청약 가능" },
              { num: 3, title: "유주택자\n청약 가능", desc: "주택수와 상관없이 청약 가능\n(일반공급 해당)" },
              { num: 4, title: "재당첨 제한 無!", desc: "기존 당첨 사실이 있어도 청약 가능\n\n단, 2년 내 가점제 당첨사실이 있을 경우\n가점제 청약불가, 추첨제 청약가능" },
              { num: 5, title: "청약통장\n가입기간 12개월", desc: "청약통장 가입기간 및\n지역별 · 면적별 예치금 충족 시" },
              { num: 6, title: "청약 예치금", desc: "전용85㎡ 이하\n인천: 250만원 / 서울: 300만원 / 경기도: 200만원" },
            ].map((item) => (
              <div key={item.num} className="p-5 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[11px] font-bold text-blue-500 border border-blue-300 rounded px-2 py-0.5">CHECK POINT {item.num}</span>
                </div>
                <p className="text-navy text-[15px] font-bold whitespace-pre-line leading-snug">{item.title}</p>
                <div className="w-10 h-px bg-gray-300 mx-auto my-3 border-dashed" />
                <p className="text-gray-500 text-[13px] leading-[1.7] whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ■ 유형별 청약 기본자격 요건 안내 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">유형별 청약 기본자격 요건 안내</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub} colSpan={2}>구분</th>
                  <th className={thSub}>기본자격</th>
                  <th className={thSub}>주택소유</th>
                  <th className={thSub}>무주택세대</th>
                  <th className={thSub}>요건</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td} rowSpan={5}>특별<br/>공급</td><td className={td}>기관추천</td><td className={tdL}>① 해당 기관의 추천 및 인정서류를 받으신 분</td><td className={td} rowSpan={5}>세대구성원<br/>전원 무주택</td><td className={td} rowSpan={5}>무주택세대<br/>구성원</td><td className={tdL} rowSpan={3}>청약통장 가입 후 6개월,<br/>지역별·면적별 예치금 이상<br/>[기관추천 : 장애인, 국가유공자 등 제외]</td></tr>
                <tr><td className={td}>다자녀</td><td className={tdL}>① 만 19세 미만의 자녀 2명 이상(태아 및 입양자녀 포함)이 있는분</td></tr>
                <tr><td className={td}>신혼부부</td><td className={tdL}>① 혼인기간 7년 이내, 혼인신고일부터 최초 입주자모집공고일 현재까지 계속 무주택자인 분<br/>② 「신혼부부 주택 특별공급 운용지침」에서 정하는 소득기준 또는 자산기준을 충족하는 분</td></tr>
                <tr><td className={td}>생애최초</td><td className={tdL}>① 생애최초로 주택을 구입하는 분<br/>② 혼인 중이거나 미혼인 자녀가 있는 분 또는 1인 가구<br/>③ 「생애최초 주택 특별공급 운용지침」에서 정하는 소득기준 또는 자산기준을 충족하는 분<br/>④ 최초 입주자모집공고일 현재 근로자 또는 자영업자로서 5년 이상 소득세를 납부한 분</td><td className={tdL} rowSpan={2}>청약통장 가입 후 12개월 경과,<br/>지역별·면적별 예치금 이상</td></tr>
                <tr><td className={td}>노부모부양</td><td className={tdL}>① 만 65세 이상의 직계존속(배우자의 직계존속 포함)을 3년 이상 계속하여 부양하고 있는 분</td></tr>
                <tr><td className={td}>일반공급<br/>(1순위)</td><td className={td} colSpan={4}>입주자모집공고일 기준 성년자 중 청약통장에 가입하여 12개월이 경과되고 지역별·면적별 예치금액 이상인 자 (세대주 및 세대원 모두 가능)</td><td className={td}></td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-[12px] text-gray-500 leading-[1.9]">
            <p>※ 청약관련 사항은 관련 법령의 개정, 인허가 과정, 입주자모집공고 승인 시점에 따라 변경될 수 있으며, 편집 과정상 오류가 있을 수 있으니,<br/>반드시 입주자모집공고문을 통해 청약자격, 유의사항 등을 숙지하시어 청약하시기 바랍니다.</p>
            <p>※ 청약자격 미숙지, 착오 등에 대해서는 청약자 본인에게 책임이 있으니 불이익을 당하는 일이 없도록 유의하시기 바랍니다.</p>
          </div>
        </div>
      </div>

      {/* ─── 페이지 3 : 일반공급 청약안내 ─── */}

      {/* ■ 일반공급 안내 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">일반공급 (&apos;주택공급에 관한 규칙 제28조&apos;)</h4>
        </div>
        <div className="p-6 md:p-8 space-y-3 text-[14px] text-gray-700 leading-[1.9]">
          <p>① 세대주, 세대원 모두 청약 가능</p>
          <p className="ml-4">• 입주자모집공고일(26.03.27) 현재 인천광역시 및 수도권(서울특별시, 경기도) 거주하는 만 19세 이상인 자 또는 세대주인 미성년자(자녀양육, 형제자매 부양)</p>
          <p>② 유주택자 1순위 청약 가능</p>
          <p className="ml-4">• 주택 수와 상관없이 청약 가능</p>
          <p>③ 청약통장 가입요건 충족</p>
          <p className="ml-4">• 1순위 : 청약통장 가입기간 12개월 이상(지역·면적별 예치금액 이상)인 자 / 2순위 : 청약통장 가입자</p>
        </div>
      </div>

      {/* ■ 청약신청 일정 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">청약신청 일정</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub} rowSpan={2}>구분</th>
                  <th className={thSub} colSpan={2}>청약신청 일자</th>
                  <th className={thSub} rowSpan={2}>접수장소 및 시간</th>
                  <th className={thSub} rowSpan={2}>신청방법 및 유의사항</th>
                </tr>
                <tr className="bg-blue-50/40">
                  <th className={thSub}>1순위</th>
                  <th className={thSub}>2순위</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td} rowSpan={2}>일반공급</td>
                  <td className={td} rowSpan={2}>2026<br/>4.6(화)</td>
                  <td className={td} rowSpan={2}>2026<br/>4.7(수)</td>
                  <td className={tdL}>청약Home 인터넷/모바일<br/>09:00 ~ 17:30</td>
                  <td className={tdL}>• 한국부동산원 청약홈 홈페이지(http://www.applyhome.co.kr) 또는 청약홈 모바일 앱에서 신청(구글플레이스토어 또는 앱스토어에서 &quot;청약홈&quot; 검색)</td>
                </tr>
                <tr>
                  <td className={tdL}>청약통장 가입은행 창구 방문<br/>09:00~ 16:00</td>
                  <td className={tdL}>• 인터넷 청약이 원칙이며, 정보취약계층(만 65세 이상 고령자, 장애인 등)에 한하여 청약통장 가입은행 본·지점(09:00~16:00)에서 청약 가능<br/>※ 단, 은행 점업점별 업무시간이 상이할 수 있으므로 반드시 사전에 확인하시기 후 방문하시기 바랍니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ■ 1순위 가점제·추첨제 적용 비율 & 청약통장 예치금액 기준 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-navy to-[#1e3358] px-6 py-4">
            <h4 className="text-white text-[17px] font-bold">1순위 가점제·추첨제 적용 비율</h4>
          </div>
          <div className="p-5">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구분</th>
                  <th className={thSub}>가점제</th>
                  <th className={thSub}>추첨제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>전용면적 60㎡ 이하</td>
                  <td className={`${td} font-bold`}>40%</td>
                  <td className={`${td} font-bold`}>60%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-navy to-[#1e3358] px-6 py-4">
            <h4 className="text-white text-[17px] font-bold">청약통장 예치금액 기준</h4>
          </div>
          <div className="p-5">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구분</th>
                  <th className={thSub}>인천시</th>
                  <th className={thSub}>경기도</th>
                  <th className={thSub}>서울시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>전용면적 85㎡ 이하</td>
                  <td className={`${td} font-bold`}>250만원</td>
                  <td className={`${td} font-bold`}>200만원</td>
                  <td className={`${td} font-bold`}>300만원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ■ 청약 자격조건 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">청약 자격조건</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구분</th>
                  <th className={thSub}>추첨제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${td} font-bold`}>대상자</td>
                  <td className={tdL}>
                    • 입주자모집공고일(26.03.27) 현재 인천광역시 및 수도권(서울특별시, 경기도) 거주하는 만 19세 이상인 자 또는 세대주인 미성년자(자녀양육, 형제자매 부양)<br/>
                    • 순위별 청약통장 자격요건을 만족한 자
                  </td>
                </tr>
                <tr>
                  <td className={`${td} font-bold`}>당첨자<br/>선정방법</td>
                  <td className={tdL}>
                    • 당첨자 선정 순서<br/>
                    &nbsp;&nbsp;- 1순위 가점제 : ①지역 → ②가점 → ③청약통장 가입기간→ ④추첨<br/>
                    &nbsp;&nbsp;- 1순위 후 추첨제 : ①지역 → ③무주택 우선공급 → ③추첨<br/>
                    &nbsp;&nbsp;- 2순위 : ①지역 → ②추첨<br/><br/>
                    • ①지역 : 해당지역 거주자(인천광역시) → 기타지역 거주자(서울특별시, 경기도)<br/>
                    • ③가점
                  </td>
                </tr>
                <tr>
                  <td className={`${td} font-bold`}>유의사항</td>
                  <td className={tdL}>
                    • 1순위 가점제 청약 시 유의사항<br/>
                    &nbsp;&nbsp;- 입주자모집공고일(26.03.27)기준 과거 2년 이내 가점제로 당첨된 본 및 그 세대원은 가점제 청약이 불가하며, 가점제로 청약하여 당첨 시 부적격 처리됩니다.<br/>
                    • 1순위 가점제 당첨시 가점제 당첨 제한자로 관리되며, 당첨자 및 그 세대원은 당첨자발표일로부터 2년간 다른 민영주택의 1순위 가점제 청약이 불가합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ■ 청약 가점 산정 기준 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">청약 가점 산정 기준</h4>
        </div>
        <div className="p-6 md:p-8 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구분</th>
                  <th className={thSub} colSpan={2}>추첨제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${td} font-bold`}>① 무주택기간 적용기준<br/><span className="text-[11px] font-normal">(*&quot;만&quot;나이 적용)</span></td>
                  <td className={tdL} colSpan={2}>
                    • 무주택기간은 청약자 및 배우자 기준이며, 입주자 모집공고일 현재 세대원 모두 주택을 소유하지 않아야 함.<br/><br/>
                    <table className="w-full border-collapse text-[12px] mt-1">
                      <thead><tr className="bg-gray-100"><th className={thSub}>과거 주택소유 여부</th><th className={thSub}></th><th className={thSub}>무주택기간 적용</th></tr></thead>
                      <tbody>
                        <tr><td className={td} rowSpan={2}>주택소유경험 無</td><td className={td}>만 30세 이전 혼인</td><td className={td}>혼인신고일 ~ 입주자모집공고일</td></tr>
                        <tr><td className={td}>만 30세 이후 혼인</td><td className={td}>만 30세기 된 날 ~ 입주자모집공고일</td></tr>
                        <tr><td className={td} rowSpan={2}>주택소유경험 有<br/>(분양권 등 포함)</td><td className={td}>만 30세 이전 혼인</td><td className={td}>혼인신고일과 주택처분일 중 늦은공고일과 가까운 날 ~ 입주자모집공고일</td></tr>
                        <tr><td className={td}>만 30세 이후 혼인</td><td className={td}>주택처분일 ~ 입주자모집공고일</td></tr>
                      </tbody>
                    </table>
                    <br/>
                    • 부양가족은 입주자모집공고일(26.03.27) 현재 청약자 또는 그 배우자와 같은 세대별 주민등록표등본에 등재된 세대원을 말함. (청약자 본인 제외)
                  </td>
                </tr>
                <tr>
                  <td className={`${td} font-bold`}>② 부양가족의 인정기준<br/><span className="text-[11px] font-normal">(청약자 본인 제외)</span></td>
                  <td className={tdL} colSpan={2}>
                    <table className="w-full border-collapse text-[12px]">
                      <thead><tr className="bg-gray-100"><th className={thSub}>구분</th><th className={thSub}>배우자</th><th className={thSub}>부양가족 인정기준</th><th className={thSub}>비고</th></tr></thead>
                      <tbody>
                        <tr><td className={td} rowSpan={2}>미혼자녀</td><td className={td}>만 30세 미만</td><td className={td}>공고일 현재 동거</td><td className={td} rowSpan={2}>기혼자녀 및 이혼자녀, 외국인, 해외체류 중인 직계비속 불인정<br/>- (만 30세 미만) 공고일 ��준 계속하여 90일을 초과하여 체류중인 경우<br/>- (만 30세 이상) 공고일 기준 최근 1년 이내 거주하여 90일을 초과하여 해외에 체류한 경우</td></tr>
                        <tr><td className={td}>만 30세 이상</td><td className={td}>공고일 기준 최근<br/>1년 이상 계속 동거</td></tr>
                        <tr><td className={td}>재혼배우자의<br/>자녀</td><td className={td} colSpan={2}>공고일 현재 청약자와의<br/>동일등본상 등재</td><td className={td}></td></tr>
                        <tr><td className={td}>직계존속</td><td className={td} colSpan={2}>공고일 기준 최근<br/>3년 이상 계속 동거</td><td className={td}>청약자의 세대주 자녀 필수(존속·준속 배우자 모두 무주택일 경우)</td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className={`${td} font-bold`}>③ 청약통장 가입기간 기준</td>
                  <td className={tdL} colSpan={2}>
                    • 최초 가입일을 기준으로 가입기간 산정(단, 청약저축에서 종합저축으로 전환한 경우 전환개설한 날 기준)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── 페이지 4 : 가점산정기준표 ─── */}

      {/* ■ 가점산정기준표 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">가점산정기준표</h4>
          <p className="text-white/60 text-[12px] mt-1">※ 무주택기간 산정시 &quot;만&quot;나이 계산 / ※ 부양가족수 산정시 청약신청자 본인 제외</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>가점항목</th>
                  <th className={thSub}>가점상한</th>
                  <th className={thSub}>가점구분</th>
                  <th className={thSub}>점수</th>
                  <th className={thSub}>가점구분</th>
                  <th className={thSub}>점수</th>
                </tr>
              </thead>
              <tbody>
                {/* ① 무주택기간 */}
                <tr><td className={td} rowSpan={9}>①<br/>무주택<br/>기간</td><td className={td} rowSpan={9}>32</td><td className={td}>만 30세 미만 미혼자</td><td className={td}>0</td><td className={td}>8년 이상 ~ 9년 미만</td><td className={td}>18</td></tr>
                <tr><td className={td}>1년 미만</td><td className={td}>2</td><td className={td}>9년 이상 ~ 10년 미만</td><td className={td}>20</td></tr>
                <tr><td className={td}>1년 이상 ~ 2년 미만</td><td className={td}>4</td><td className={td}>10년 이상 ~ 11년 미만</td><td className={td}>22</td></tr>
                <tr><td className={td}>2년 이상 ~ 3년 미만</td><td className={td}>6</td><td className={td}>11년 이상 ~ 12년 미만</td><td className={td}>24</td></tr>
                <tr><td className={td}>3년 이상 ~ 4년 미만</td><td className={td}>8</td><td className={td}>12년 이상 ~ 13년 미만</td><td className={td}>26</td></tr>
                <tr><td className={td}>4년 이상 ~ 5년 미만</td><td className={td}>10</td><td className={td}>13년 이상 ~ 14년 미만</td><td className={td}>28</td></tr>
                <tr><td className={td}>5년 이상 ~ 6년 미만</td><td className={td}>12</td><td className={td}>14년 이상 ~ 15년 미만</td><td className={td}>30</td></tr>
                <tr><td className={td}>6년 이상 ~ 7년 미만</td><td className={td}>14</td><td className={td}>15년 이상</td><td className={td}>32</td></tr>
                <tr><td className={td}>7년 이상 ~ 8년 미만</td><td className={td}>16</td><td className={td}></td><td className={td}></td></tr>

                {/* ② 부양가족수 */}
                <tr><td className={td} rowSpan={4}>②<br/>부양가족수</td><td className={td} rowSpan={4}>35</td><td className={td}>0명</td><td className={td}>5</td><td className={td}>4명</td><td className={td}>25</td></tr>
                <tr><td className={td}>1명</td><td className={td}>10</td><td className={td}>5명</td><td className={td}>30</td></tr>
                <tr><td className={td}>2명</td><td className={td}>15</td><td className={td}>6명 이상</td><td className={td}>35</td></tr>
                <tr><td className={td}>3명</td><td className={td}>20</td><td className={td}></td><td className={td}></td></tr>

                {/* ③ 입주자저축 가입기간 */}
                <tr><td className={td} rowSpan={12}>③<br/>입주자저축<br/>가입기간</td><td className={td} rowSpan={12}>17</td><td className={td}>6개월 미만</td><td className={td}>1</td><td className={td}>8년 이상 ~ 9년 미만</td><td className={td}>10</td></tr>
                <tr><td className={td}>6개월 이상 ~ 1년 미만</td><td className={td}>2</td><td className={td}>9년 이상 ~ 10년 미만</td><td className={td}>11</td></tr>
                <tr><td className={td}>1년 이상 ~ 2년 미만</td><td className={td}>3</td><td className={td}>10년 이상 ~ 11년 미만</td><td className={td}>12</td></tr>
                <tr><td className={td}>2년 이상 ~ 3년 미만</td><td className={td}>4</td><td className={td}>11년 이상 ~ 12년 미만</td><td className={td}>13</td></tr>
                <tr><td className={td}>3년 이상 ~ 4년 미만</td><td className={td}>5</td><td className={td}>12년 이상 ~ 13년 미만</td><td className={td}>14</td></tr>
                <tr><td className={td}>4년 이상 ~ 5년 미만</td><td className={td}>6</td><td className={td}>13년 이상 ~ 14년 미만</td><td className={td}>15</td></tr>
                <tr><td className={td}>5년 이상 ~ 6년 미만</td><td className={td}>7</td><td className={td}>14년 이상 ~ 15년 미만</td><td className={td}>16</td></tr>
                <tr><td className={td}>6년 이상 ~ 7년 미만</td><td className={td}>8</td><td className={td}>15년 이상</td><td className={td}>17</td></tr>
                <tr><td className={td}>7년 이상 ~ 8년 미만</td><td className={td}>9</td><td className={td}></td><td className={td}></td></tr>
                <tr><td className={td} colSpan={2}>배우자 없음 또는 배우자 통장 미가입</td><td className={td}>0</td><td className={td}>1년 이상 ~ 2년 미만</td><td className={td}>2</td></tr>
                <tr><td className={td} colSpan={2}>1년 미만</td><td className={td}>1</td><td className={td}>2년 이상</td><td className={td}>3</td></tr>
                <tr><td className={td} colSpan={4}></td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-[13px] text-gray-600 font-bold mt-3">※ 본인 청약가점 점수 = ① + ② + ③</p>
        </div>
      </div>

      {/* ■ 배우자의 통장가입기간 점수표 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">배우자의 통장가입기간 점수표</h4>
          <p className="text-white/60 text-[12px] mt-1">※ 2024.03.25. 시행된「주택공급에 관한 규칙」별표1의2 나목에 따라 가점제 청약 시 입주자저축 가입기간 점수에 배우자 입주자저축 가입기간 점수를 합산할 수 있습니다.</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>배우자의 입주자저축 가입기간</th>
                  <th className={thSub}>배우자의 입주자저축 가입기간(50% 적용)</th>
                  <th className={thSub}>점수</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>1년 미만</td><td className={td}>6개월 미만</td><td className={td}>1점</td></tr>
                <tr><td className={td}>1년 이상 ~ 2년 미만</td><td className={td}>6개월 이상 ~ 1년 미만</td><td className={td}>2점</td></tr>
                <tr><td className={td}>2년 이상</td><td className={td}>1년 이상</td><td className={td}>3점</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-[12px] text-gray-500 leading-[1.9]">
            <p>• 배우자의 입주자저축 가입기간 점수는 전체 기입기간의 50%에 해당하는 기간의 점수로 계산하며, 그 점수가 3점을 초과하는 경우 최대 3점까지만 인정</p>
            <p>• 본인의 입주자저축 가입기간 점수와 배우자의 입주자저축 가입기간 점수 합산 시 17점을 초과하는 경우 최대 17점까지만 인정</p>
            <p>• 청약 전 반드시 배우자 본인의 청약통장 가입확인용 순위확인서를 발급하여 입주자저축 가입기간 점수를 확인해야 하며, 향후 당첨자 및 예비당첨자 서류 선정 시 배우자의 순위확인서 및 배우자의 당첨사실 확인서를 사업주체에 제출하여 적격을 증빙하여야함</p>
            <p>• 입주자모집공고일(26.03.27) 현재 배우자의 청약통장이 가입되어 있어야 하며, 순위확인서 발급 전 배우자의 청약통장을 해지한 경우에는 순위확인서 발급이 불가하므로 적격증빙을 위하여 당첨자 발표 이후 계약 전까지 배우자의 청약통장 유지 필요</p>
          </div>
        </div>
      </div>

      {/* ■ 부양가족의 인정 범위 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[20px] font-bold">부양가족의 인정 범위</h4>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-navy font-bold text-[14px] mb-3">청약신청자가 세대주이고, 부모님이 3년 이상</p>
              <p className="text-gray-500 text-[13px] leading-[1.8]">동일 주민등록등본에 등재된 경우(존속·준속 배우자 모두 무주택일 경우)</p>
              <div className="mt-3 text-[12px] text-gray-500 space-y-1">
                <p>조부 / 조모 / 조부 / 조모</p>
                <p className="text-center">↓</p>
                <p>부 / 모</p>
                <p className="text-center">↓</p>
                <p className="text-navy font-bold">본인(세대주)</p>
                <p>↙ ↘</p>
                <p>형제자매 등거인 X &nbsp;&nbsp; 자녀</p>
                <p className="text-[11px]">만 30세 미만 미혼자녀인 경우<br/>만 30세 이상 미혼자녀는 1년 이상<br/>주민등록등본에 등재된 경우</p>
                <p>↓</p>
                <p>손자 (단, 청약자 동일등본상에 등재된 경우)</p>
                <p className="text-[11px] text-gray-400 mt-2">손자, 손녀는 부모가 모두 사망하고 미혼인 경우</p>
              </div>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-navy font-bold text-[14px] mb-3">배우자가 세대주이고, 배우자의 부모님이 3년 이상</p>
              <p className="text-gray-500 text-[13px] leading-[1.8]">동일 주민등록등본에 등재된 경우(존속·준속 배우자 모두 무주택일 경우)</p>
              <div className="mt-3 text-[12px] text-gray-500 space-y-1">
                <p>조부 / 조모 / 조부 / 조모</p>
                <p className="text-center">↓</p>
                <p>부 / 모</p>
                <p className="text-center">↓</p>
                <p className="text-navy font-bold">배우자</p>
                <p className="text-center">↕</p>
                <p>형제자매 등거인 X</p>
                <p className="text-[11px]">자녀(기혼) X &nbsp; 자녀의 배우자 X</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 안내 */}
      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-gray-400 text-[13px] leading-[1.8]">
          ※ 청약관련 사항은 관련 법령의 개정, 인허가 과정, 입주자모집공고 승인 시점에 따라 변경될 수 있으며, 편집 과정상 오류가 있을 수 있으니,<br />
          반드시 입주자모집공고문을 통해 청약자격, 유의사항 등을 숙지하시어 청약하시기 바랍니다.<br />
          ※ 청약자격 미숙지, 착오 등에 대해서는 청약자 본인에게 책임이 있으니 불이익을 당하는 일이 없도록 유의하시기 바랍니다.
        </p>
      </div>

    </div>
  );
}
