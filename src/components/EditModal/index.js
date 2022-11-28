import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../redux/actions";
export default function EditModal(props) {
  const [pictureId, setPictureId] = useState("");
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.6)",
  };
  useEffect(() => {
    console.log(props);
  });
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("files", e);
    instance
      .post("api/v1/file/saveAttachments", formData)
      .then((res) => {
        console.log(res.data.data);
        setPictureId(res?.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    instance
      .put(
        `api/v1/quiz/f2fe64a8-d6a3-4337-add7-24c580b09532?attachmentId=${pictureId}`
      )
      .then((res) => {
        console.log(res.data);
      });
    console.log(pictureId);
    props.setModal(false);
  };
  return (
    <div>
      <div className="modal" tabindex="-1" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                onClick={() => props.setModal(false)}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => handleFile(e.target.files[0])}
                type="file"
                required
                className="form-control mt-2"
              />
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
