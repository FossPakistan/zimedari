import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';

export default function ConfirmDeleteIssue({ closeModal, deleteIssue }) {
  return (
    <Card>
      <Card.Content>
        <Content className="has-text-centered">
          Are you sure you wanted to delete this item?
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.FooterItem onClick={closeModal} onKeyPress={closeModal}>
          Cancel
        </Card.FooterItem>
        <Card.FooterItem onClick={deleteIssue} onKeyPress={deleteIssue}>
          Delete
        </Card.FooterItem>
      </Card.Footer>
    </Card>
  );
}

ConfirmDeleteIssue.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteIssue: PropTypes.func.isRequired,
};
