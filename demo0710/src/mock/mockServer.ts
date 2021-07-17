/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 14:03:27
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 14:45:36
 * @Description: file content
 * @FilePath: \vite-test-0705\src\mock\mockServer.ts
 */

import Mock, { mock } from "mockjs";
import data from "../mock/data.json";
import { loginMock } from "../mock/loginMock";

//返回goods的接口
Mock.mock("/goods", { code: 0, data: data.goods});
//返回ratings接口
Mock.mock("/ratings", {code:0, data: data.ratings});
//返回info接口
Mock.mock("/info", {code:0, data: data.info});
//返回用户信息
Mock.mock("http://localhost:3000/user/info", loginMock);
