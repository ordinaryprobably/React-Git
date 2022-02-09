import Link from 'next/link';
import classes from '../../styles/WordSummary.module.css';

export default function WordSummary({ word }) {
  return (
    <>
      <div className={classes.WordSummary}>
        <div className={classes.votes}>
          <img src='../images/arrow-up.svg' />
          <span>{word.votes}</span>
          <img src='../images/arrow-down.svg' />
        </div>
        <div className={classes.details}>
          <div className={classes.details_head}>
            <Link href={`/word/${word.title}/${word.id}`}>
              <span>{word.title}</span>
            </Link>
            {word.comments.length !== 0 && <div>댓글 {word.comments.length}개</div>}
          </div>
          <div className={classes.details_body}>
            <p>{word.meaning}</p>
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