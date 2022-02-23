import { Button, Typography } from "@material-ui/core";
import React from "react";
import "../../../assets/css/dashboard.css";
import updownarrow from "../../../assets/images/updown_arrow.png";
import save_continue from "../../../assets/images/save&continue.png";
import save from "../../../assets/images/save.png";
import reset from "../../../assets/images/reset.png";
import close from "../../../assets/images/close.png";
import Dialog from "@mui/material/Dialog";
import success from "../../../assets/images/success.png";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [uplaod, setUpload] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickUplaod = () => {
    setUpload(true);
  };

  const handleUploadClose = () => {
    setUpload(false);
  };
  return (
    <div>
      <div className="flex">
        <div>
          <Typography className="wel-back-title">Upload Resumes</Typography>
        </div>
        <div className="btn-div">
          <Button className="ur-btn" onClick={handleClickOpen}>
            <img src={updownarrow} />
            &nbsp; Upload / Download CSVs
          </Button>

          <Button className="ur-btn">
            <img src={save_continue} />
          </Button>
          <Button className="ur-btn">
            <img src={save} />
          </Button>
          <Button className="ur-btn">
            <img src={reset} />
          </Button>
          <Button
            className="ur-close-btn"
            style={{ minWidth: "32px !important" }}
          >
            <img src={close} />
          </Button>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <div style={{ textAlign: "center", padding: "40px" }}>
            <Typography className="dialog-title">
              Upload / Drag and drop the CSV file
            </Typography>
            <br />
            <input
              type="file"
              className="profile-input-field"
              style={{
                padding: "8px 6px",
                backgroundColor: "#FFF",
                width: "46%",
              }}
            />
            <br />
            <Button className="dialog-upload-btn">Upload</Button>
            <hr className="dashed-line" />
            <br />
            <br />
            <Typography className="dialog-title">
              <u style={{ color: "#72a3f7" }} onClick={handleClickUplaod}>
                Click here
              </u>{" "}
              to download CSV template
            </Typography>
          </div>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={uplaod}
          onClose={handleUploadClose}
          aria-labelledby="alert-dialog-title"
        >
          <div style={{ textAlign: "center", padding: "40px" }}>
            <img src={success} />
            <Typography className="dialog-title">
              CSV template uploaded successfully
            </Typography>
            <br />
            <Button className="dialog-upload-btn" onClick={handleUploadClose}>
              Okay
            </Button>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;
