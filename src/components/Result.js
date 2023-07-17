const React = require('react');
const { useEffect } = require('react');
const ResultTable = require('./ResultTable');
const { Link } = require('react-router-dom');
const { useSelector, useDispatch } = require('react-redux');
const { attempts_Number, earnPoints_Number, flagResult } = require('../helper/helper');
const { resetAllAction } = require('../redux/question_reducer');
const { resetResultAction } = require('../redux/result_reducer');
const { usePublishResult } = require('../hooks/setResult');
require('../styles/Result.css');

function Result() {
  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);
  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? 'Passed' : 'Failed'
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId || ''}</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">{queue.length}</span>
        </div>
        <div className="flex">
          <span>Attempted Questions</span>
          <span className="bold">{attempts}</span>
        </div>
        <div className="flex">
          <span>Earned Points</span>
          <span className="bold">{earnPoints}</span>
        </div>
        <div className="flex">
          <span>Status</span>
          <span className={flag ? 'bold passed' : 'bold failed'}>{flag ? 'Passed' : 'Failed'}</span>
        </div>
      </div>

      <ResultTable result={result} answers={answers} />

      <div className="restart">
        <Link className="btn" to="/" onClick={onRestart}>Restart Quiz</Link>
      </div>
    </div>
  );
}

export default Result;
