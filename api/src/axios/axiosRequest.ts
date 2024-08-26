import SurveyRequest from "../types/SurveyRequest";
import Params from "../types/Params";
import axios from "axios";

const instance = axios.create({
  baseURL:'https://learn.codeit.kr/api',
  timeout:3000,
})

export const getAllAxios = async () => {
  return await instance.get('/color-surveys');
};

export const getAxios = async (id: number) => {
  return instance.get(`/color-surveys/${id}`);
};

export const getByQueryParams = async (params: Params) => {
  return await instance.get('/api/color-surveys', {
    params
  });
};

export const survey = async () => {
  const surveyData: SurveyRequest = {
    mbti: 'INTP',
    colorCode: '#ABCDEF',
    password: '0000',
  }
  return await instance.post('color-surveys', surveyData);
};

