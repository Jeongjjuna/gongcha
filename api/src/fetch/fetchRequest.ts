import SurveyRequest from "../types/SurveyRequest";
import Params from "../types/Params";

export const get = async () => {
  return await fetch('https://learn.codeit.kr/api/color-surveys');
};

export const getByQuery = async () => {
  // 1. 쿼리 스트링 직접 써주기
  // await fetch('https://learn.codeit.kr/api/color-surveys/?mbti=INTP');

  // 2. URL객체 사용하기
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  url.searchParams.append("mbti", "INTP");
  return await fetch(url);
};

export const getByQueryParams = async (params: Params) => {
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return await fetch(url);
};

export const survey = async () => {
  const surveyData: SurveyRequest = {
    mbti: 'INTP',
    colorCode: '#ABCDEF',
    password: '0000',
  }
  return await fetch('https://learn.codeit.kr/api/color-surveys', {
    method: "POST", // PATCH, DELETE
    body: JSON.stringify(surveyData),
    headers: {
      "Content-Type": "application/json"
    },
  });
};

