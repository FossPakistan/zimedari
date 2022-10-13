import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Issue from '_components/molecules/Issue';

export default function IssueList() {
  const { issues } = useSelector(R.pick(['issues']));

  return (
    <ul className="issue-list">
      {R.reverse(issues).map(issue => <Issue key={issue.id} {...issue} />)}
    </ul>
  );
}
