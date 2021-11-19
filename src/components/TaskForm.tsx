import React, { FC, useContext, useState } from 'react';
import './App.css';
import * as yup from 'yup';
import {SchemaOf} from 'yup';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { TaskAppContext } from './TodoProvider';
import { ITask } from './Interfaces';



const validationSchema: SchemaOf<ITask> = yup.object({
  task: yup
    .string()
    
    .defined('Task name is required'),
  details: yup
    .string()
    
    .defined('Details are required'),
  category: yup
    .string()
    
    .defined('Category is required'),
});

const TaskForm: FC = () => {
  
  const initialValues: ITask = {
    task: '',
    details: '',
    category: '',
  };

const { addTask } = useContext(TaskAppContext)

  
  return (
    <div className="App">
      <div className="App-div">
      <Container maxWidth="sm">
      <div>
        <h1>Create a new task</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("Formik onSubmit", { values, actions });
            addTask(values)
            actions.resetForm()
            actions.setSubmitting(false);
          }}
          
          >
          {(props: FormikProps<ITask>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props
          return (
          <Form>
            {/* <label htmlFor="firstName">First Name</label> */}
            <TextField
              fullWidth
              color="primary"
              focused
              margin="dense"
              id="task"
              name="task"
              label="Task Name"
              value={values.task}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.task && Boolean(errors.task)}
              helperText={touched.task && errors.task}
            />
            {/* <label htmlFor="lastName">Last Name</label> */}
            <TextField
              fullWidth
              color="primary"
              focused
              margin="dense"
              id="details"
              name="details"
              label="Details"
              value={values.details}
              onChange={handleChange}
              error={touched.details && Boolean(errors.details)}
              helperText={touched.details && errors.details}
            />
            {/* <label htmlFor="email">Email</label> */}
            <TextField
              fullWidth
              color="primary"
              focused
              margin="dense"
              id="category"
              name="category"
              label="Category"
              value={values.category}
              onChange={handleChange}
              error={touched.category && Boolean(errors.category)}
              helperText={touched.category && errors.category}
            />
            
            <Button color="primary" variant="contained" type="submit" fullWidth>
            Submit
          </Button>
          </Form>
          )}}
        </Formik>
      </div>
    </Container>
      </div>
    </div>
  );
}

export default TaskForm;
