import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Button from 'react-bulma-companion/lib/Button';
import Input from 'react-bulma-companion/lib/Input';

import { attemptAddIssue } from '_store/thunks/issues';
import useKeyPress from '_hooks/useKeyPress';

export default function AddIssue() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddIssue = () => {
    if (text) {
      dispatch(attemptAddIssue(text));
      setText('');
    }
  };

  useKeyPress('Enter', handleAddIssue);

  const updateText = e => setText(e.target.value);

  return (
    <Columns className="add-issue" gapless>
      <Column size="10">
        <Input value={text} onChange={updateText} />
      </Column>
      <Column size="2">
        <Button color="success" onClick={handleAddIssue} fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
