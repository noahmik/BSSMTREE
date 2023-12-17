const express = require("express");
const multer = require("multer");
const fs = require("fs");
const router = express.Router();
const { Sequelize, sequelize, DataTypes } = require("sequelize");
const models = require("../models");

router.use(express.json());

//db에 저장
router.post("/letter", async (res,req) => {
    console.log('1113241234123412341234')
    try {
        const newLetter = {
            // letternum: req.body.LetterNum,
            writer: req.body.Writer,
            recipient: req.body.Recipient,
            detail: req.body.Detail
        };
        await models.letter.create(newLetter); //이거 실행 안 시킴?
        res.json({ success: true });
  } catch (err) {
        console.log(err);
        res.status(500).json({ error: "저장 중 오류 발생" });
    }
});

router.get("/bring", async (res,req)=> {
  try{
    const letterLogs = await models.search_log.findAll();   
    res.json(letterLogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "검색어를 조회하는 동안 오류가 발생했습니다." });
  }
});

module.exports = router;