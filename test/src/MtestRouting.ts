import testApiApp from "../../src/testRouting";
import express, { Express, Request, Response, NextFunction } from "express";

describe("測試標題", function () {
  it("測試內容", function (done) {
    const test01ApiApp: Express = testApiApp;
    const port = 3310;
    done();
  });
  it("測試內容2", function (done) {
    console.log("進入測試內容2");
    done();
  });
});
