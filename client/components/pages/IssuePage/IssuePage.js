import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

import { attemptGetIssues } from '_store/thunks/issues';

import AddIssue from '_components/molecules/AddIssue';
import IssueList from '_components/organisms/IssueList';

export default function IssuePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      dispatch(attemptGetIssues())
        .catch(R.identity)
        .then(() => setLoading(false));
    }
  }, [dispatch, user]);

  return !loading && (
    <div className="issue-page page">
      <Section className="issue-section">
        <Title size="1" className="has-text-centered">
          Issues List:
        </Title>
        <Columns>
          <Column size="8" offset="2" className="has-text-centered">
            <AddIssue />
          </Column>
        </Columns>
        <Columns>
          <Column size="8" offset="2" className="has-text-left">
            <IssueList />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
