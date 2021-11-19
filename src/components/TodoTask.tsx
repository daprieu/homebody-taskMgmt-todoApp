import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useContext, useState } from 'react'
import { TaskAppContext } from './TodoProvider'
import Container from '@mui/material/Container';
import { ITask } from './Interfaces';


interface Props {
    
}

export const TodoTask = (props: Props) => {
    const { tasks } = useContext(TaskAppContext)
    console.log('task: ', tasks);


    return (
        <div className="task">
        <Container maxWidth="md">
        <Paper elevation={3}>
        <TableContainer >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Task Name</TableCell>
              <TableCell align="center">Details</TableCell>
              <TableCell align="center">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tasks.map((task) => (
              <TableRow
                key={task.task}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope="row" align="center">
                  {task.task}
                </TableCell>
                <TableCell align="center">{task.details}</TableCell>
                <TableCell align="center">{task.category}</TableCell>
              </TableRow>
             ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      </Container>
      </div>
    )
}

