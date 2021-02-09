type FilterItemType = {
  key: number;
  title: string;
};

const CATEGORY = [
  { key: 0, title: "웹" },
  { key: 1, title: "어플리케이션" },
  { key: 2, title: "게임" },
  { key: 3, title: "그래픽" },
  { key: 4, title: "브랜딩" },
  { key: 5, title: "소프트웨어" },
  { key: 6, title: "영상" },
  { key: 7, title: "임베디드" },
  { key: 8, title: "제품" },
  { key: 9, title: "출판" },
  { key: 10, title: "퍼블리싱" },
  { key: 11, title: "기타" },
];

const RECRUITMENT_FIELD = [
  { key: 0, title: "기획" },
  { key: 1, title: "개발" },
  { key: 2, title: "디자인" },
];

const REGION = [
  { key: 0, title: "서울" },
  { key: 1, title: "경기" },
  { key: 2, title: "광주" },
  { key: 3, title: "대구" },
  { key: 4, title: "대전" },
  { key: 5, title: "부산" },
  { key: 6, title: "인천" },
  { key: 7, title: "울산" },
  { key: 8, title: "세종" },
  { key: 9, title: "제주" },
  { key: 10, title: "강원" },
  { key: 11, title: "경남" },
  { key: 12, title: "경북" },
  { key: 13, title: "전남" },
  { key: 14, title: "전북" },
  { key: 15, title: "충남" },
  { key: 16, title: "충북" },
];

const PROJECT_SECTION = [
  { key: 0, title: "공모전" },
  { key: 1, title: "창업" },
  { key: 2, title: "프로젝트" },
  { key: 3, title: "기타" },
];

const ALIGN = [
  { key: 0, title: "최신순" },
  { key: 1, title: "조회순" },
  { key: 2, title: "댓글순" },
];

const COMMENT = [
  { key: 0, title: "댓글 수정" },
  { key: 1, title: "댓글 삭제" },
];

export type { FilterItemType };
export { CATEGORY, RECRUITMENT_FIELD, REGION, PROJECT_SECTION, ALIGN, COMMENT };
