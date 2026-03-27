"use client";

/* ───────────────────────────────────────────
   서류안내 – PDF 내용을 HTML로 구성
   ─────────────────────────────────────────── */

const thSub = "px-3 py-2.5 text-center font-bold text-navy text-[12px] bg-blue-50/60 border border-gray-200";
const td = "px-3 py-2 text-center text-[12px] text-gray-700 border border-gray-200 align-top";
const tdL = "px-3 py-2 text-left text-[12px] text-gray-700 border border-gray-200 leading-[1.8] align-top";

// 재사용 가능한 문서 테이블 컴포넌트
function DocTable({ title, rows }: {
  title: string;
  rows: {
    category?: string;
    categoryRowSpan?: number;
    required?: string;
    additional?: string;
    document: string;
    issuer: string;
    notes: string;
  }[];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
        <h4 className="text-white text-[18px] font-bold">{title}</h4>
      </div>
      <div className="p-4 md:p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr className="bg-blue-50/60">
                <th className={thSub}>구분</th>
                <th className={thSub} colSpan={2}>서류유형</th>
                <th className={thSub}>해당서류</th>
                <th className={thSub}>발급기준</th>
                <th className={thSub}>제출대상 및 유의사항</th>
              </tr>
              <tr className="bg-blue-50/40">
                <th className={thSub}></th>
                <th className={thSub}>필수</th>
                <th className={thSub}>추가<br/>(해당자)</th>
                <th className={thSub}></th>
                <th className={thSub}></th>
                <th className={thSub}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  {row.category !== undefined && (
                    <td className={td} rowSpan={row.categoryRowSpan || 1} dangerouslySetInnerHTML={{ __html: row.category }} />
                  )}
                  <td className={td}>{row.required === "○" ? "○" : ""}</td>
                  <td className={td}>{row.additional === "○" ? "○" : ""}</td>
                  <td className={td} dangerouslySetInnerHTML={{ __html: row.document }} />
                  <td className={td} dangerouslySetInnerHTML={{ __html: row.issuer }} />
                  <td className={tdL} dangerouslySetInnerHTML={{ __html: row.notes }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function DocumentsContent() {
  return (
    <div className="space-y-10">

      {/* ■ 당첨자 (예비입주자) 공통 구비서류 */}
      <DocTable
        title="■ 당첨자 (예비입주자) 공통 구비서류"
        rows={[
          { category: "공통서류", categoryRowSpan: 12, required: "○", document: "특별공급신청서/개인정보 이용 및 활용동의서 무주택 서약서", issuer: "청약자", notes: "• 청약홈(www.applyhome.co.kr)에서 청약한 경우, 기관추천특별공급 중 장애인, 국가유공자 등 생략<br/>• 홍보관 비치" },
          { required: "○", document: "신분증", issuer: "청약자", notes: "• 주민등록증 또는 운전면허증 ※ 모바일 신분증 불가(실물 지참 필수)<br/>• 2020.12.21. 이후 신규 발급 여권은 무인발급기에서 여권정보증명서를 발급받아 본인 여권과 함께 제출<br/>• 재외동포 : 국내거소신고증(국내거주사실증명서) / 외국인 : 외국인등록증(외국인등록사실증명서)" },
          { required: "○", document: "인감증명서 또는 본인서명사실확인서", issuer: "청약자", notes: "• 용도 : 주택공급계약용 (본인 발급용 / 대리인 발급용 불가) ※ 본인서명사실확인서 제출시 대리인 불가<br/>(1 발급용도 : 기타선택 → 아파트계약용 / 2 제출처: '중앙하이츠 갈산역 센트럴'으로 설정하여 발급)" },
          { required: "○", document: "인감도장", issuer: "청약자", notes: "• 인감증명서상의 인장 대조 확인, 본인서명사실확인서 제출자는 본인서명" },
          { required: "○", document: "주민등록표등본 (세대원포함)", issuer: "청약자", notes: "• 성명 및 주민등록번호(세대원포함), 세대구성 사유 및 일자, 세대주 및 세대주와의 관계 포함하여 발급" },
          { required: "○", document: "주민등록표초본 (전체포함)", issuer: "청약자", notes: "• 성명 및 주민등록번호, 과거 주소 변동사항(인정받고자하는 기간 포함), 세대주 및 세대주와의 관계 포함하여 발급" },
          { required: "○", document: "가족관계증명서(상세)", issuer: "청약자", notes: "• 본인 및 세대원 전원의 성명, 주민등록번호(뒷자리 포함) 전부 공개 '상세'로 발급" },
          { required: "○", document: "혼인관계증명서(상세)", issuer: "청약자", notes: "• 공고일 기준 현재 혼인증명을 인정 받고자 하는 경우<br/>• 주민등록표등본상 청약 당첨자가 미혼이거나, 배우자가 사망 혹은 이혼한 경우<br/>• 만 30세 미만에 혼인하여 무주택기간을 인정받고자 하는 경우" },
          { required: "○", document: "출입국에 관한 사실증명", issuer: "청약자", notes: "• 국내 거주기간 확인<br/>• 기록대조일을 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급(기관추천 특별공급의 경우 생략)" },
          { additional: "○", document: "주민등록표등본 (전체포함)", issuer: "배우자", notes: "• 주민등록표등본상 배우자가 분리된 경우 제출(상기 주민등록표등본 발급 시 유의사항에 따라 발급 바람)" },
          { additional: "○", document: "복무확인서", issuer: "청약자", notes: "• 입주자모집공고일 현재 10년 이상 장기복무군인 자격으로 신청한 경우 (군복무기간 명시)" },
          { additional: "○", document: "전세피해자 확인서류", issuer: "청약자", notes: "• 전세피해자 낙찰주택 소유기간(보증금의 전부 또는 일부를 돌려받지 못한 임차인이 그 임차주택을 경매 또는 공매로 낙찰 받아 소유한 기간)을 무주택 기간으로 인정받기 위한 경우<br/>※단, 낙찰 주택이 주거전용면적 85㎡ 이하이면서, 주택공시가(시가)이 1억6천만원(수도권3억원) 이하인 경우에만 해당<br/>① 해당 임차주택 임대차계약서 사본 ② 낙찰 증빙서류, 매매허가결정서 또는 매각결정통보지 사본<br/>③ 해당 임차주택 등기사항증명서 원본 ④ 재건자의 확인서류, 배당표, 배당요구신청서 등의 사본 또는 배분계산서 등의 사본" },
          { category: "기준주택<br/>처분조건<br/>청약자", categoryRowSpan: 1, additional: "○", document: "기준주택 처분 관련 서약서", issuer: "본인", notes: "「주택공급에 관한 규칙」제23조제2항제4호에 따른 서약서(별지 제6호서식)" },
          { category: "해외근무자<br/>(단신부임)", categoryRowSpan: 2, additional: "○", document: "해외체류 증빙서류", issuer: "청약자", notes: "• 국내기업 및 기관소속 해외 주재원 및 출장자인 경우 · 파견 및 출장명령서, 재직증명서<br/>• 해외 취업자 및 사업체 운영자인 경우 · 현지관공서에서 발급 받은 사업 또는 근로관련서류, 취업 또는 사업비자 발급내역 등<br/>• 근로자가 아닌 경우 반드시 제출 · ① 비자 발급내역 ② 계약서 또는 근로계약서 등<br/>※ 유학, 연수, 관광, 단순체류자의 경우 생업사정을 인정할 수 없으며, 생업관련 증빙서류 불가능한자 또한 생업사정 불인정" },
          { additional: "○", document: "출입국에 관한 사실증명", issuer: "배우자 및<br/>직계존비속", notes: "• 청약자가 해외에서 체류 중인 기간 내 세대원 및 자녀 중 현명이라도 신청자와 동일국가 체류기간 여부 확인<br/>(기록대조일을 세대원 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급)" },
          { category: "", additional: "○", document: "비자발급내역 및<br/>재학증명서 등", issuer: "청약자 및<br/>세대원", notes: "• 여권 분실 및 재발급으로 체류국가 확인이 불가능한 경우<br/>※ 비자발급내역, 재학증명서 등 체류국가를 확인 할 수 있는 서류를 통해 소명을 하여야 하며, 세대원이 청약 신청자와 동일한 국가에 체류하지 않았다는 사실(계속하여 90일 초과)을 증명하지 못하는 경우에는 단신부임 인정 불가" },
          { category: "부적격<br/>통보를<br/>받은자", categoryRowSpan: 1, additional: "○", document: "해당 주택에 대한<br/>소명 자료", issuer: "해당 주택", notes: "• 등기사항전부증명서, 건축물대장등본, 무허가건물확인서, 건축물철거멸실신고서 등<br/>• '소형 저가주택 등'임을 증명하는 서류 (주택공시가격 증명원 등)<br/>• 기타 무주택자임을 증명하는 서류" },
        ]}
      />

      {/* ■ 제3자 대리인 신청시 추가서류 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[18px] font-bold">■ 제3자 대리인 신청시 추가서류</h4>
        </div>
        <div className="p-4 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구분</th>
                  <th className={thSub}>필수</th>
                  <th className={thSub}>해당서류</th>
                  <th className={thSub}>발급기준</th>
                  <th className={thSub}>제출대상 및 유의사항</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td} rowSpan={4}>제3자<br/>대리인<br/>신청시<br/>추가서류</td>
                  <td className={td}>○</td><td className={td}>사업주체가 요구하여<br/>인정하는 서류</td><td className={td}>해당 주택</td><td className={tdL}>• 해당 기관의 당첨사실 무효확인서 등 사업주체가 요구하여 인정하는 서류</td></tr>
                <tr><td className={td}>○</td><td className={td}>인감증명서, 인감도장</td><td className={td}>청약자</td><td className={tdL}>• 용도 : 주택 공급신청 위임용, 본인 발급용만 인정</td></tr>
                <tr><td className={td}>○</td><td className={td}>위임장</td><td className={td}>청약자</td><td className={tdL}>• 당첨자 본인의 인감도장 날인, 홍보관에 비치</td></tr>
                <tr><td className={td}>○</td><td className={td}>대리인 신분증</td><td className={td}>대리인</td><td className={tdL}>• 주민등록증 또는 운전면허증, 여권(2020년 12월 21일 이후 신규발급분 제외) ※ 모바일 신분증 불가(실물 지참 필수)<br/>• 재외동포 : 국내거소신고증(국내거주사실증명서) / 외국인 : 외국인 등록증(외국인등록사실증명서)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ■ 다자녀가구 특별공급 당첨자 (예비입주자) 구비서류 */}
      <DocTable
        title="■ 다자녀가구 특별공급 당첨자 (예비입주자) 구비서류"
        rows={[
          { category: "다자녀가구<br/>특별공급", categoryRowSpan: 7, required: "○", document: "다자녀가구 특별공급<br/>배점표", issuer: "청약자", notes: "• 홍보관 비치" },
          { required: "○", document: "주민등록표초본<br/>(전체포함)", issuer: "직계존속", notes: "• 3세대 이상 세대구성배점을 인정받고자 하나, 주민등록표상 신청자의 직계존속이 입주자모집공고일로부터 과거 3년이상 계속하여 동일한 주민등록표등본에 등재 여부가 확인되지 않는 경우<br/>(3년 이상의 과거 주소변동사항(인정받고자하는 기간포함), 성명, 주민등록번호, 세대주 및 세대주와의 관계 '전체 포함'하여 발급)" },
          { additional: "○", document: "가족관계증명서(상세)", issuer: "배우자", notes: "• 재혼가정에서 배우자의 전혼자녀를 자녀수에 포함한 경우 또는 3세대 이상 세대 구성시 배우자의 직계존속이 포함된 경우<br/>(신청자와 동일 주민등록표등본에 등재 한함)" },
          { additional: "○", document: "혼인관계증명서(상세)", issuer: "직계비속", notes: "• 미성년 자녀가 만 18세로 미혼임을 증명하기 위한 경우" },
          { additional: "○", document: "한부모가족증명서", issuer: "청약자", notes: "• 한부모 가족으로 세대구성 배점을 인정받고자 하는 경우<br/>(성평등가족부의 「한부모가족 지원법」에 따라 한부모가족으로 지정된 지 5년이 경과된 경우)" },
          { additional: "○", document: "임신증명서류 또는<br/>출생증명서", issuer: "청약자<br/>(또는 배우자)", notes: "• 임신한 태아를 자녀수에 포함한 경우 임신증명서류(임신진단서) 제출<br/>(출산예정일, 질병코드번호, 담당의사명, 의료기관 등록번호 및 연락처가 기재되어 있고 해당 의료기관 직인이 날인된 원본)" },
          { additional: "○", document: "임신증명 및<br/>출산이행확인각서", issuer: "청약자<br/>(또는 배우자)", notes: "• 홍보관 비치" },
          { category: "", additional: "○", document: "입양관계증명서 또는<br/>친양자 입양관계증명서", issuer: "", notes: "• 입양의 경우" },
        ]}
      />

      {/* ■ 노부모부양 특별공급 당첨자 (예비입주자) 구비서류 */}
      <DocTable
        title="■ 노부모부양 특별공급 당첨자 (예비입주자) 구비서류"
        rows={[
          { category: "노부모부양<br/>특별공급", categoryRowSpan: 10, required: "○", document: "청약 가점점수 산정기준표", issuer: "-", notes: "• 홍보관 비치" },
          { required: "○", document: "주민등록표초본<br/>(전체포함)", issuer: "", notes: "• 주민등록표등본상 세대주와 직계존속이 입주자모집공고일 현재로부터 과거 3년 이상 계속하여 동일한 주민등록표등본에 등재 여부를 확인하기 위한 경우(세대주 및 세대주와의 관계 기재)" },
          { required: "○", document: "가족관계증명서(상세)", issuer: "직계존속", notes: "• 피부양 직��존속의 배우자를 확인하기 위한 경우" },
          { required: "○", document: "출입국에 관한 사실증명", issuer: "", notes: "• 직계존속을 부양가족으로 인정받으려는 경우<br/>• 기록대조일을 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급" },
          { additional: "○", document: "국민건강보험<br/>요양급여 내역", issuer: "피부양<br/>직계존속", notes: "「국민건강보험법」 제41조에 따른 국민건강보험 요양급여 내역(진료개시일, 요양기관명 및 요양기관 연락처에 한정)<br/>- 모집공고일 기준 과거 3년간의 내역" },
          { additional: "○", document: "국민건강보험<br/>요양급여 내역", issuer: "피부양<br/>직계비속", notes: "「국민건강보험법」 제41조에 따른 국민건강보험 요양급여 내역(진료개시일, 요양기관명 및 요양기관 연락처에 한정)<br/>- 당첨자의 30세 이상 직계비속을 부양가족으로 인정받고자 하는 경우 (모집공고일 기준 과거 1년간의 내역)" },
          { additional: "○", document: "주민등록표초본<br/>(전체포함)", issuer: "", notes: "• 만 30세 이상 미혼인 직계비속이 동일한 주민등록표등본에 1년 이상 연속된 등재여부를 확인하기 위한 경우" },
          { additional: "○", document: "혼인관계증명서(상세)", issuer: "직계비속", notes: "• 만 18세 이상 미혼인 직계비속을 부양가족으로 인정받고자 하는 경우" },
          { additional: "○", document: "출입국에 관한 사실증명", issuer: "", notes: "• 직계비속을 부양가족으로 인정받으려는 경우<br/>• 기록대조일을 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급" },
          { additional: "○", document: "가족관계증명서(상세)", issuer: "배우자", notes: "• 배우자의 직계존속으로 신청한 경우<br/>• 재혼가정의 자녀를 부양가족으로 신청한 경우(청약자와 동일 주민등록표등본에 등재된 경우에 한함)" },
        ]}
      />

      {/* ■ 신혼부부 특별공급 당첨자 (예비입주자) 구비서류 */}
      <DocTable
        title="■ 신혼부부 특별공급 당첨자 (예비입주자) 구비서류"
        rows={[
          { category: "신혼부부<br/>특별공급", categoryRowSpan: 10, required: "○", document: "자격요건 확인서", issuer: "청약자", notes: "• 홍보관 비치" },
          { required: "○", document: "건강보험자격득실 확인서", issuer: "청약자 및<br/>성년자인<br/>세대원", notes: "• 입주자모집공고일 이후 발행본(과거 이력 포함하여 발급)으로 공급신청자 및 만 19세 이상 세대원 전원<br/>(배우자 분리세대 포함)" },
          { required: "○", document: "소득증빙서류", issuer: "청약자 및<br/>성년자인<br/>세대원", notes: "• 입주자모집공고일 이후 발행분으로 주택공급신청자의 세대주 및 만 19세 이상 세대원 전원의 소득증빙서류<br/>(배우자 분리세대의 경우 배우자와 동일한 주민등록표등본에 등재된 세대원 포함 [신혼부부 특별공급 소득증빙서류 참조])" },
          { additional: "○", document: "가족관계증명서(상세)", issuer: "배우자", notes: "• 재혼가정에서 배우자의 전혼자녀 관계를 확인하기 위한 경우(주택공급신청자와 동일 주민등록표등본에 등재 한함)<br/>• 현재 배우자와의 혼인관계증명서 상 혼인신고일 이전 자녀 출산 시 자녀기준 '상세'로 발급" },
          { additional: "○", document: "주민등록표초본<br/>(전체포함)", issuer: "직계존속", notes: "• 공급신청자의 직계존속(배우자의 직계존속 포함)을 공고일 현재로부터 과거 1년 이상 계속하여 공급신청자 또는 배우자와 동일한 주민등록표에 등재하였음을 확인하여 소득신청시 가구원수로 인정받고자 하는 경우<br/>(1년 이상 주소변동 사항, 세대주 및 세대주와의 관계를 포함하여 '전체포함'으로 발급)" },
          { additional: "○", document: "임신증명서류 또는<br/>출산증명서", issuer: "청약자<br/>(또는 배우자)", notes: "• 임신의 경우, 의료법에 의한 의료기관에서 발급한 임신증명서류(임신진단서) /<br/>입주자모집공고일 현재 임신사실 확인이 가능하여야 함" },
          { additional: "○", document: "출산이행확인각서", issuer: "청약자<br/>(또는 배우자)", notes: "• 홍보관 비치" },
          { additional: "○", document: "입양관계증명서 또는<br/>친양자 입양관계 증명서", issuer: "", notes: "• 입양의 경우(또는 친양자 입양관계증명서)" },
          { additional: "○", document: "비사업자확인각서", issuer: "청약자 및<br/>해당자", notes: "• 사업소득이 없는 경우 (근로자 및 자영업자 포함)<br/>• 홍보관 비치" },
          { additional: "○", document: "부동산 소유현황", issuer: "청약자 및<br/>세대원", notes: "• 소득기준은 초과하나, 부동산가액기준을 충족하는 조건으로 신청한 자는 본인과 세대구성원 전원의 서류를 모두 제출(배우자 분리세대 포함)<br/>※ 발급기관 : 대법원 인터넷기소(www.iros.go.kr) > 등기열람/발급 > 부동산 > '부동산 소유 현황'<br/>(소유 현황이 없는 경우에는 신청 결과, 주민등록번호 공개에 체크)" },
        ]}
      />

      {/* ■ 생애최초 특별공급 당첨자 (예비입주자) 구비서류 */}
      <DocTable
        title="■ 생애최초 특별공급 당첨자 (예비입주자) 구비서류"
        rows={[
          { category: "생애최초<br/>특별공급", categoryRowSpan: 14, required: "○", document: "자격요건 확인서", issuer: "청약자", notes: "• 홍보관 비치" },
          { required: "○", document: "소득세납부 입증서류", issuer: "청약자", notes: "• 당첨자 본인의 소득세 납부사실을 입증하는 생애최초 특별공급의 서류로서 입주자모집공고일 이전의 5개년도 서류<br/>단, 상기 5개년도 서류 중 전년도 소득증빙자료는 반드시 제출 (발급처 : 해당직장, 세무서)" },
          { required: "○", document: "건강보험자격득실 확인서", issuer: "청약자 및<br/>성년자인 세대원", notes: "• 공고일 이후 발행본으로 청약신청자 및 성년자(만 19세 이상, 세대주인 미성년자)인 세대원 전원 모두 제출(표시되지 않은 세대원의 건강보험자격득실확인서도 제출)<br/>발급처: 국민건강보험공단, 입주자모집공고일 이후 변동사항을 포함하여 발급" },
          { required: "○", document: "소득 증빙서류", issuer: "청약자 및<br/>성년자인 세대원", notes: "• 공고일 이후 발행분으로 청약신청자 및 성년자(만 19세 이상, 세대주인 미성년자)인 세대원 전원의 소득입증 서류<br/>(단, 배우자 분리세대는 배우자 및 배우자와 동일한 주민등록표등본상에 등재된 세대주의 성년인 직계존비속의 소득입증서류)" },
          { additional: "○", document: "주민등록표초본<br/>(전체포함)", issuer: "직계존속", notes: "• 당첨자의 직계존속(배우자의 직계존속 포함)이 공고일 현재로부터 과거 1년 이상 계속하여 당첨자 또는 당첨자의 배우자와 동일한 주민등록표에 등재하였음을 확인하여, 소득신청 시 당첨자의 가구원수로 인정받고자 하는 경우<br/>(1년 이상의 주소 변동사항, 세대주 및 세대주와의 관계를 포함하여 발급)" },
          { additional: "○", document: "가족관계증명서(상세)", issuer: "배우자", notes: "• 공급신청자 배우자의 직계존속을 당첨자의 가구원수로 인정받고자 하는 경우" },
          { additional: "○", document: "가족관계증명서(상세)", issuer: "신생아", notes: "• 신생아 우선공급 또는 신생아 일반공급으로 청약한 경우" },
          { additional: "○", document: "혼인관계증명서(상세)", issuer: "직계비속", notes: "• 공고일 현재 혼인 중이 아닌 분이 동일등본상 만 18세 이상의 자녀를 '미혼인 자녀'로 인정 받고자 할 경우" },
          { additional: "○", document: "임신증명서류 또는<br/>출산증명서", issuer: "청약자<br/>(또는 배우자)", notes: "• 임신의 경우, 의료법에 의한 의료기관에서 발급한 임신증명서류(임신진단서) /<br/>입주자모집공고일 현재 임신사실 확인이 가능하여야 함" },
          { additional: "○", document: "출산 이행각서", issuer: "청약자<br/>(또는 배우자)", notes: "• 홍보관 비치" },
          { additional: "○", document: "입양관계증명서", issuer: "", notes: "• 입양의 경우(또는 친양자 입양관계증명서)" },
          { additional: "○", document: "부동산 소유현황", issuer: "청약자 및<br/>세대원", notes: "• 소득기준은 초과하나, 부동산가액기준을 충족하는 조건으로 신청한 자는 본인과 세대구성원 전원의 서류를 모두 제출(배우자 분리세대 포함)<br/>※ 발급기관 : 대법원 인터넷기소(www.iros.go.kr) > 등기열람/발급 > 부동산 > '부동산 소유 현황'<br/>(소유 현황이 없는 경우에는 신청 결과, 주민등록번호 공개에 체크)" },
          { additional: "○", document: "비사업자확인각서", issuer: "청약자 및<br/>해당자", notes: "• 사업소득이 없는 경우(근로자 및 자영업자 포함)<br/>• 홍보관 비치" },
        ]}
      />

      {/* ■ 일반공급 당첨자(예비입주자) 구비서류 */}
      <DocTable
        title="■ 일반공급 당첨자(예비입주자) 구비서류"
        rows={[
          { category: "공통서류", categoryRowSpan: 12, required: "○", document: "개인정보이용 및<br/>활용동의서", issuer: "청약자", notes: "• 홍보관 비치" },
          { required: "○", document: "신분증", issuer: "청약자", notes: "• 주민등록증 또는 운전면허증 ※ 모바일 신분증 불가(실물 지참 필수)<br/>• 2020.12.21. 이후 신규 발급 여권은 무인발급기에서 여권정보증명서를 발급받아 본인 여권과 함께 제출<br/>• 재외동포 : 국내거소신고증(국내거주사실증명서) / 외국인 : 외국인등록증(외국인등록사실증명서)" },
          { required: "○", document: "인감증명서 또는<br/>본인서명사실확인서", issuer: "청약자", notes: "• 용도 : 주택공급계약용 (본인 발급용 / 대리인 발급용 불가) ※ 본인서명사실확인서 제출시 대리인 불가<br/>(1 발급용도 : 기타선택 → 아파트계약용 / 2 제출처: '중앙하이츠 갈산역 센트럴'으로 설정하여 발급)" },
          { required: "○", document: "인감도장", issuer: "청약자", notes: "• 인감증명서상의 인장 대조 확인, 본인서명사실확인서 제출자는 본인서명" },
          { required: "○", document: "주민등록표등본<br/>(세대원포함)", issuer: "청약자", notes: "• 성명 및 주민등록번호(세대원포함), 세대구성 사유 및 일자, 세대주 및 세대주와의 관계 포함하여 발급" },
          { required: "○", document: "주민등록표초본<br/>(전체포함)", issuer: "청약자", notes: "• 성명 및 주민등록번호, 과거 주소 변동사항(인정받고자하는 기간 포함), 세대주 및 세대주와의 관계 포함하여 발급" },
          { required: "○", document: "가족관계증명서(상세)", issuer: "청약자", notes: "• 본인 및 세대원 전원의 성명, 주민등록번호(뒷자리 포함) 전부 공개 '상세'로 발급" },
          { required: "○", document: "혼인관계증명서(상세)", issuer: "청약자", notes: "• 공고일 기준 현재 혼인증명을 인정 받고자 하는 경우<br/>• 주민등록표등본상 청약 당첨자가 미혼이거나, 배우자가 사망 혹은 이혼한 경우<br/>• 만 30세 미만에 혼인하여 무주택기간을 인정받고자 하는 경우" },
          { required: "○", document: "출입국에 관한 사실증명", issuer: "청약자", notes: "• 국내 거주기간 확인<br/>• 기록대조일을 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급" },
          { additional: "○", document: "주민등록표등본<br/>(전체포함)", issuer: "배우자", notes: "• 주민등록표등본상 배우자가 분리된 경우 제출(상기 주민등록표등본 발급 시 유의사항에 따라 발급 바람)" },
          { additional: "○", document: "복무확인서", issuer: "청약자", notes: "• 입주자모집공고일 현재 10년 이상 장기복무군인 자격으로 신청한 경우 (군복무기간 명시)" },
          { additional: "○", document: "전세피해자 확인서류", issuer: "청약자", notes: "• 전세피해자 낙찰주택 소유기간(보증금의 전부 또는 일부를 돌려받지 못한 임차인이 그 임차주택을 경매 또는 공매로 낙찰 받아 소유한 기간)을 무주택 기간으로 인정받기 위한 경우<br/>※단, 낙찰 주택이 주거전용면적 85㎡ 이하이면서, 주택공시가(시가)이 1억6천만원(수도권3억원) 이하인 경우에만 해당<br/>① 해당 임차주택 임대차계약서 사본 ② 낙찰 증빙서류, 매매허가결정서 또는 매각결정통보지 사본<br/>③ 해당 임차주택 등기사항증명서 원본 ④ 재건자의 확인서류, 배당표, 배당요구신청서 등의 사본 또는 배분계산서 등의 사본" },
          { category: "", categoryRowSpan: 1, additional: "○", document: "가족관계증명서(상세)", issuer: "배우자", notes: "• 재혼가정의 자녀를 부양가족으로 신청한 경우 (주택공급신청자와 동일 주민등록표등본에 등재 한함)" },
          { category: "", categoryRowSpan: 1, additional: "○", document: "청약통장 가입확인용<br/>순위확인서", issuer: "배우자", notes: "• 일반공급 가정제 신청 시 중 배우자의 청약통장가입기간 점수를 산입(1-3점)한 경우, 아래 경로를 통해 서류 발급<br/>* (청약홈) 청약홈 > 청약자격확인 > 청약통장 > 순위확인서 발급 > 청약통장 가입확인용 > 청약하고자 하는 '주택명 선택'<br/>(청약통장 가입은행) 창구 방문 > 청약통장 가입확인용 순위확인서 발급<br/><br/>- 민영주택 일반공급 가점제 신청자 중 배우자의 청약통장가입기간 점수를 산입(1-3점)한 경우.<br/>(배우자가 서류제출 전 기단첨되어 청약통장 가입확인용 순위확인서가 발급되지 않는 경우의 한함), 아래 경로를 통해 서류 발급<br/>* (청약홈) 청약홈 > 청약소통방 > APT당첨사실 조회" },
          { category: "가점제<br/>추가서류", categoryRowSpan: 5, additional: "○", document: "국민건강보험<br/>요양급여 내역(상세)", issuer: "피부양<br/>직계존속", notes: "「국민건강보험법」 제41조에 따른 국민건강보험 요양급여 내역(진료개시일, 요양기관명 및 요양기관 연락처에 한정)<br/>- 당첨자의 직계존속(배우자의 직계존속 표함)을 부양가족으로 인정받고자 하는 경우 (모집공고일 기준 과거 3년간의 내역)" },
          { additional: "���", document: "국민건강보험<br/>요양급여 내역(상세)", issuer: "피부양<br/>직계비속", notes: "「국민건강보험법」 제41조에 따른 국민건강보험 요양급여 내역(진료개시일, 요양기관명 및 요양기관 연락처에 한정)<br/>- 당첨자의 30세 이상 직계비속을 부양가족으로 인정받고자 하는 경우 (모집공고일 기준 과거 1년간의 내역)" },
          { additional: "○", document: "주민등록표초본", issuer: "직계존속", notes: "• 주민등록표등본상 세대주와 직계존속이 입주자모집공고일 현재로부터 과거 3년 이상 계속하여 동일한 주민등록표등본에 등재여부를 확인하기 위한 경우" },
          { additional: "○", document: "가족관계증명서(상세)", issuer: "직계존속", notes: "• 본인의 주민등록표등본상에 직계존속과의 관계가 확인되지 않거나 직계존속의 배우자가 없거나 배우자와 세대 분리된 경우" },
          { additional: "○", document: "출입국에 관한 사실증명", issuer: "", notes: "• 국내 거주기간 확인<br/>• 기록대조일 : 생년월일 ~ 현재로 설정(주민센터 또는 정부24), 출입국 기록출력 여부를 &quot;Y&quot;로 설정하여 발급<br/>• 해외체류(입주자모집공고일 기준 최근 3년 이내 계속하여 90일 초과하여 해외에 체류한 경우)중인 경우에는 부양가족에서 제외" },
        ]}
      />

      {/* ■ 일반공급 - 해외근무자 / 부적격통보 받은자 / 제3자 대리인 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
          <h4 className="text-white text-[18px] font-bold">■ 일반공급 - 추가서류 (해외근무자 / 부적격통보 / 대리인)</h4>
        </div>
        <div className="p-4 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="bg-blue-50/60">
                  <th className={thSub}>구분</th>
                  <th className={thSub}>필수</th>
                  <th className={thSub}>추가</th>
                  <th className={thSub}>해당서류</th>
                  <th className={thSub}>발급기준</th>
                  <th className={thSub}>제출대상 및 유의사항</th>
                </tr>
              </thead>
              <tbody>
                {/* 해외근무자 */}
                <tr><td className={td} rowSpan={5}>해외근무자<br/>(단신부임)</td><td className={td}></td><td className={td}>○</td><td className={td}>혼인관계증명서(상세)<br/>주민등록표초본</td><td className={td}></td><td className={tdL}>• 만 18세 이상 미혼인 직계비속을 부양가족으로 인정받고자 하는 경우<br/>• 만 30세 이상 미혼인 직계비속이 동일한 주민등록표등본에 1년 이상 연속된 등재여부를 확인하기 위한 경우</td></tr>
                <tr><td className={td}></td><td className={td}>○</td><td className={td}>출입국에 관한 사실증명</td><td className={td}>직계비속</td><td className={tdL}>• 직계비속을 부양가족으로 인정받으려는 경우<br/>• 기록대조일을 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급<br/>• 단, 아래의 경우 부양가족에서 제외<br/>- 만 30세 미만 미혼자녀 : 입주자모집공고일 현재 기준 계속하여 90일을 초과하여 해외에 체류 중인 경우<br/>- 만 30세 이상 미혼자녀 : 입주자모집공고일 기준 최근 1년 이내 계속하여 90일을 초과하여 해외에 체류한 경우</td></tr>
                <tr><td className={td}></td><td className={td}>○</td><td className={td}>해외체류 증빙서류</td><td className={td}>청약자</td><td className={tdL}>{"• 국내기업 및 기관소속 해외 주재원 및 출장자인 경우 · 파견 및 출장명령서, 재직증명서"}<br/>{"• 해외 취업자 및 사업체 운영자인 경우 · 현지관공서에서 발급 받은 사업 또는 근로관련서류, 취업 또는 사업비자 발급내역 등"}<br/>{"• 근로자가 아닌 경우 반드시 제출 · ① 비자 발급내역 ② 계약서 또는 근로계약서 등"}<br/>{"※ 유학, 연수, 관광, 단순체류자의 경우 생업사정을 인정할 수 없으며, 생업관련 증빙서류 불가능한자 또한 생업사정 불인정"}</td></tr>
                <tr><td className={td}></td><td className={td}>○</td><td className={td}>출입국에 관한 사실증명</td><td className={td}>배우자 및<br/>직계존비속</td><td className={tdL}>• 청약자가 해외에서 체류 중인 기간 내 세대원 및 자녀 중 현명이라도 신청자와 동일국가 체류기간 여부 확인<br/>(기록대조일을 세대원 생년월일 ~ 입주자모집공고일로 출입국기록출력 여부를 Y로 설정하여 발급)</td></tr>
                <tr><td className={td}></td><td className={td}>○</td><td className={td}>비자발급내역 및<br/>재학증명서 등</td><td className={td}>청약자 및<br/>세대원</td><td className={tdL}>• 여권 분실 및 재발급으로 체류국가 확인이 불가능한 경우<br/>※ 비자발급내역, 재학증명서 등 체류국가를 확인 할 수 있는 서류를 통해 소명을 하여야 하며, 세대원이 청약 신청자와 동일한 국가에 체류하지 않았다는 사실(계속하여 90일 초과)을 증명하지 못하는 경우에는 단신부임 인정 불가</td></tr>

                {/* 부적격통보 받은자 */}
                <tr><td className={td} rowSpan={2}>부적격<br/>통보를<br/>받은자</td><td className={td}></td><td className={td}>○</td><td className={td}>해당 주택에 대한<br/>소명 자료</td><td className={td}>해당 주택</td><td className={tdL}>• 등기사항전부증명서, 건축물대장등본, 무허가건물확인서, 건축물철거멸실신고서 등<br/>• '소형 저가주택 등'임을 증명하는 서류 (주택공시가격 증명원 등)<br/>• 기타 무주택자임을 증명하는 서류</td></tr>
                <tr><td className={td}></td><td className={td}>○</td><td className={td}>사업주체가 요구하여<br/>인정하는 서류</td><td className={td}>해당 주택</td><td className={tdL}>• 해당 기관의 당첨사실 무효확인서 등 사업주체가 요구하여 인정하는 서류</td></tr>

                {/* 제3자 대리인 */}
                <tr><td className={td} rowSpan={3}>제3자<br/>대리인<br/>신청시<br/>추가서류</td><td className={td}>○</td><td className={td}></td><td className={td}>인감증명서, 인감도장</td><td className={td}>청약자</td><td className={tdL}>• 용도 : 주택 공급신청 위임용, 본인 발급용만 인정</td></tr>
                <tr><td className={td}>○</td><td className={td}></td><td className={td}>위임장</td><td className={td}>청약자</td><td className={tdL}>• 당첨자 본인의 인감도장 날인, 홍보관에 비치</td></tr>
                <tr><td className={td}>○</td><td className={td}></td><td className={td}>대리인 신분증</td><td className={td}>대리인</td><td className={tdL}>• 주민등록증 또는 운전면허증, 여권(2020년 12월 21일 이후 신규발급분 제외) ※ 모바일 신분증 불가(실물 지참 필수)<br/>• 재외동포 : 국내거소신고증(국내거주사실증명서) / 외국인 : 외국인 등록증(외국인등록사실증명서)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 하단 안내 */}
      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-gray-400 text-[13px] leading-[1.8]">
          ※ 상기 서류는 입주자모집공고문에 근거한 것이며, 개별 상황에 따라 추가 서류가 요구될 수 있습니다.<br />
          ※ 서류 제출 관련 자세한 사항은 홍보관에 문의하시기 바랍니다.
        </p>
      </div>

    </div>
  );
}
