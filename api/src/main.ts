import Product from "./types/Product";
import {get, getByQuery, getByQueryParams, survey} from "./fetch/fetchRequest";
import {getAxios} from "./axios/axiosRequest";


async function main() {
  // 모듈 가져오기
  const product: Product = {
    id: 1,
    name: "name",
  }
  console.log(product);

  // fetch 사용하기
  console.log("get() 호출 ------------------------------------------");
  let res = await get();
  let data = await res.json();
  console.log(res.headers);
  console.log(res.status);
  console.log(data);
  console.log("디스트럭팅 문법으로 빼오기-------------------------------")
  const { results } = data;
  console.log(results[0]);
  const { id, mbti, colorCode, updatedAt, createdAt } = results[0];
  console.log(id, mbti, colorCode, updatedAt, createdAt);

  console.log("getByQuery 호출 -----------------------------------");
  getByQuery()
    .then(res => res.json())
    .then(data => console.log(data));

  console.log("survey() 호출 -----------------------------------");
  res = await survey()
  data = await res.json();
  console.log(data);

  console.log("getByQueryParams() 호출 -----------------------------------");
  try {
    res = await getByQueryParams({offset:"10", limit:"10", mbti:"ENTJ"})
    if (!res.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }
    data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  // axios
  console.log("axios -----------------------------")
  const result = await getAxios(90)
    .then((res) => res.data)
    .then((data) => {
      console.log(data.createdAt);
      return data;
    })
    .catch((error) => {
      console.log(error);
    })
  console.log("---");
  console.log(result);
  console.log("---");
  // console.log(res2);
  // console.log(res2.headers);
  // console.log(res2.data);

}

main()