import classes from '../../styles/WordSummary.module.css';

export default function WordSummary(props) {
  return (
    <>
    <div className={classes.WordSummary}>
      <div className={classes.votes}>
        <img src='../images/arrow-up.svg' />
        <span>31</span>
        <img src='../images/arrow-down.svg' />
      </div>
      <div className={classes.details}>
        <div className={classes.details_head}>
          <span>댕댕이</span>
          <div>댓글 4개</div>
        </div>
        <div className={classes.details_body}>
          <p>멍엄이라는 뜨스이 댕댕이는 이 말디아쓰. 멍엄이라는 뜨스이 댕댕이는 이 말디아쓰. 멍엄이라는 뜨스이 댕댕이는 이 말디아쓰.</p>
          <div className={classes.details_reports}>
            <span>이 해석을 신고하기</span>
            <span>번역하기</span>
            <span>저장하기</span>
          </div>
        </div>
      </div>
    </div>
    <hr className={classes.hr}/>
    </>
  )
}