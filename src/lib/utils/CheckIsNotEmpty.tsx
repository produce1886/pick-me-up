import { PageType } from "@src/components/atoms/Modal/ModalType";

export default function checkIsNotEmpty(
  title: string,
  content: string,
  category: string,
  field: string,
  region: string,
  projectType: string,
  page: PageType
): boolean {
  const flag = false;
  if (!title) {
    alert("제목을 입력하세요");
    return flag;
  }
  if (!content) {
    alert("내용을 입력하세요");
    return flag;
  }
  if (!category) {
    alert("카테고리를 선택해주세요");
    return flag;
  }
  if (!field) {
    alert("구인분야를 선택해주세요");
    return flag;
  }
  if (!region && page === "project") {
    alert("지역을 선택해주세요");
    return flag;
  }
  if (!projectType && page === "project") {
    alert("프로젝트 종류를 선택해주세요");
    return flag;
  }
  return true;
}
