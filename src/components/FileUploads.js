import { useField } from "formik";

const FileUploads = ({ fileRef, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor="files">Choose files</label>{" "}
        <input ref={fileRef} multiple={true} type="file" {...field} />
        {meta.touched && meta.error ? (
          <div style={{ color: "red" }}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default FileUploads;