// import React, { useRef } from 'react'
// import ReactSelect from './ReactSelect';
// import { Field, Form, Formik } from 'formik';
// import FileUpload from './FileUpload';
// import MultiSelect from './MultiSelect';
// import * as Yup from 'yup';
// const FormikContainer2 = () => {
//   const fileRef = useRef(null);
//   const initialValues = {
//     // reactSelect:[]
//     multiSelectCustom: [],
//     files:[]
//   }
//   const validationSchema=Yup.object({
//     files: Yup.mixed()
//       .test("is-file-too-big", "File exceeds 10MB", () => {
//         let valid = true;
//         const files = fileRef?.current?.files;
//         if (files) {
//           const fileArr = Array.from(files);
//           fileArr.forEach((file) => {
//             const size = file.size / 1024 / 1024;
//             if (size > 10) {
//               valid = false;
//             }
//           });
//         }
//         return valid;
//       })
//       .test(
//         "is-file-of-correct-type",
//         "File is not of supported type",
//         () => {
//           let valid = true;
//           const files = fileRef?.current?.files;
//           if (files) {
//             const fileArr = Array.from(files);
//             fileArr.forEach((file) => {
//               const type = file.type.split("/")[1];
//               const validTypes = [
//                 "zip",
//                 "xml",
//                 "xhtml+xml",
//                 "plain",
//                 "svg+xml",
//                 "rtf",
//                 "pdf",
//                 "jpeg",
//                 "png",
//                 "jpg",
//                 "ogg",
//                 "json",
//                 "html",
//                 "gif",
//                 "csv"
//               ];
//               if (!validTypes.includes(type)) {
//                 valid = false;
//               }
//             });
//           }
//           return valid;
//         }
//       )
//   })
//   const onSubmit = (values) => {
//     console.log(values);
//   }
//   return (
//     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//       <Form>
//         {/* <Field component={ReactSelect} name='reactSelect'/> */}
//         <Field
//           name="multiSelectCustom"
//           id="multiSelectCustom"
//           placeholder="Multi Select"
//           isMulti={true}
//           isSearchable
//           isClearable={false}
//           component={MultiSelect}
//           options={[
//             { value: 'one', label: 'One' },
//             { value: 'two', label: 'Two' },
//             { value: 'three', label: 'Three' },
//           ]}
//         />
//         <FileUpload name="files" fileRef={fileRef} />
//         <button type='submit'>Submit</button>
//       </Form>
//     </Formik>
//   )
// }

// export default FormikContainer2;


import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import FileUpload from './FileUpload';
import * as Yup from 'yup';

const FormikContainer2 = () => {
  const fileRef = useRef(null);

  const initialValues = {
    
    files: [],
  };

  const validationSchema = Yup.object({
    files: Yup.array()
      .required('Please upload at least one file.')
      .max(5, 'You can upload up to 5 files.')
      .test('fileSize', 'File exceeds 10MB', (files) => {
        let valid = true;
        files.forEach((file) => {
          const size = file.size / 1024 / 1024;
          if (size > 10) {
            valid = false;
          }
        });
        return valid;
      })
      .test('fileType', 'File is not of supported type', (files) => {
        let valid = true;
        const validTypes = [
          'zip',
          'xml',
          'xhtml+xml',
          'plain',
          'svg+xml',
          'rtf',
          'pdf',
          'jpeg',
          'png',
          'jpg',
          'ogg',
          'json',
          'html',
          'gif',
          'csv',
        ];

        files.forEach((file) => {
          const type = file.type.split('/')[1];
          if (!validTypes.includes(type)) {
            valid = false;
          }
        });
        return valid;
      }),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <FileUpload name="files" fileRef={fileRef} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikContainer2;
