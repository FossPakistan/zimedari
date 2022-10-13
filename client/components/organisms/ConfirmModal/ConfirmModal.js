import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bulma-companion/lib/Modal';

import ConfirmDeleteIssue from '_components/organisms/ConfirmDeleteIssue';

export default function ConfirmModal({ confirm, closeModal, deleteIssue }) {
  return (
    <Modal className="confirm-modal" active={confirm}>
      <Modal.Background />
      <Modal.Content>
        <ConfirmDeleteIssue closeModal={closeModal} deleteIssue={deleteIssue} />
      </Modal.Content>
      <Modal.Close size="large" aria-label="close" onClick={closeModal} />
    </Modal>
  );
}

ConfirmModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteIssue: PropTypes.func.isRequired,
};
