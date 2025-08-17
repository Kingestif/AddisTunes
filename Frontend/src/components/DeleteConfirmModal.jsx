import React from "react";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-title">Delete Song</h3>
        <p className="modal-message">Are you sure you want to delete this song?</p>
        <div className="modal-actions">
          <button className="btn btn-danger" onClick={onConfirm}>Yes, Delete</button>
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
