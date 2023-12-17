const express = require("express");
const Letter = require("../models/letter");

const router = express.Router();

//db에 저장
router.post("/letter", async (req,res) => {
    console.log(req.body.writer);
    console.log(req.body.recipient);
    try {
        const newLetter = {
            // letternum: req.body.LetterNum,
            writer: req.body.writer,
            recipient: req.body.recipient,
            detail: req.body.detail
        };
        await Letter.create(newLetter); //이거 실행 안 시킴?
        res.json({ success: true });
  } catch (err) {
        console.log(err);
        res.status(500).json({ error: "저장 중 오류 발생" });
    }
});

router.get("/bring", async (req,res)=> {
  try{
    const letterLogs = await Letter.findAll();   
    res.json(letterLogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "검색어를 조회하는 동안 오류가 발생했습니다." });
  }
});

module.exports = router;