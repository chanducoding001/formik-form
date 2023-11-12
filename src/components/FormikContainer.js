import React, { useRef } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import FileUploads from './FileUploads';
import Dummy from './Dummy';
const FormikContainer = () => {
    const fileRef = useRef(null);
    const dropDownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'option 1', value: 'option1' },
        { key: 'option 2', value: 'option2' },
        { key: 'option 3', value: 'option3' },
    ];
    const radioOptions = [
        { key: 'option 1', value: 'roption1' },
        { key: 'option 2', value: 'roption2' },
        { key: 'option 3', value: 'roption3' },
    ]
    const checkBoxOptions = [
        { key: 'option 1', value: 'coption1' },
        { key: 'option 2', value: 'coption2' },
        { key: 'option 3', value: 'coption3' },
    ]
    const reactSelectOptions = [
        { label: 'option 1', value: 'soption1' },
        { label: 'option 2', value: 'soption2' },
        { label: 'option 3', value: 'soption3' },
    ]
    const initialValues = {
        email: '',
        textarea: '',
        select: '',
        radioOption: '',
        checkBoxOption: [],
        date: null,
        reactSelect: '',
        multiSelect: [],
        files:'',
        dummy:''
        
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Enter valid email!').required('Email is required!'),
        textarea: Yup.string().required('Text Area is required!'),
        select: Yup.string().required('Select is required!'),
        radioOption: Yup.string().required('Radio is required!'),
        checkBoxOption: Yup.array().min(2, 'Checkbox is Required!').required('Required!'),
        date: Yup.date().required('Required Date!'),
        reactSelect: Yup.string().required('Required one Select!'),
        multiSelect: Yup.array().min(1, 'select react select of one option'),
        files: Yup.mixed()
          .test("is-file-too-big", "File exceeds 10MB", () => {
            let valid = true;
            const files = fileRef?.current?.files;
            if (files) {
              const fileArr = Array.from(files);
              fileArr.forEach((file) => {
                const size = file.size / 1024 / 1024;
                if (size > 10) {
                  valid = false;
                }
              });
            }
            return valid;
          })
          .test(
            "is-file-of-correct-type",
            "File is not of supported type",
            () => {
              let valid = true;
              const files = fileRef?.current?.files;
              if (files) {
                const fileArr = Array.from(files);
                fileArr.forEach((file) => {
                  const type = file.type.split("/")[1];
                  const validTypes = [
                    "zip",
                    "xml",
                    "xhtml+xml",
                    "plain",
                    "svg+xml",
                    "rtf",
                    "pdf",
                    "jpeg",
                    "png",
                    "jpg",
                    "ogg",
                    "json",
                    "html",
                    "gif",
                    "csv"
                  ];
                  if (!validTypes.includes(type)) {
                    valid = false;
                  }
                });
              }
              return valid;
            }
          )
    })
    const onSubmit = (values) => { 
        console.log(values);
    }
    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        <div className='form-wrapper'>
                        <Form className='formik-form-container'>
                            <FormikControl name='email' control='input' type='email' label='Email' />
                            <FormikControl name='textarea' control='textarea' type='text' label='Text Area' />
                            <FormikControl name='reactSelect' isSearchable={true} control='reactSelect' label='React Select' placeholder="Select one Option" options={reactSelectOptions} />
                            <FormikControl options={reactSelectOptions} isMulti={true} name='multiSelect' isSearchable={true} control='multiSelect' label='React Multi Select' placeholder='Select multiple Options'/>
                            <FormikControl name='select' control='select' type='text' label='Select' options={dropDownOptions} />
                            <FormikControl name='date' control='date' type='date' label='Date Picker' placeholder="Date of Birth" />
                            <FormikControl name='radioOption' control='radio' type='radio' label='Radio Topic' options={radioOptions} />
                            <FormikControl name='checkBoxOption' control='checkbox' type='checkbox' label='checkBox Topic' options={checkBoxOptions} />
                            
                            {/* <FileUploads name="files" fileRef={fileRef} />
                            <Dummy name='dummy' label='Dummy Text'/> */}
                            <div className='submit-btn-wrapper'>
                              <button type='submit' className='submit-btn'>Submit</button>
                            </div>
                        </Form>
                        </div>
            </Formik>
        </>
    )
}

export default FormikContainer;

