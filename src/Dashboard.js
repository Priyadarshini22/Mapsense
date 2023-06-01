import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Table, TableBody, TableCell, TableHeader,  TableHeaderCell, TableRow } from 'semantic-ui-react'

export const Dashboard = ({user}) => {
    console.log(user)
  return (
    <>
  
    <div>
        <Table className="table">
            <TableHeader   >
              <TableRow>
                    <TableHeaderCell>First Name</TableHeaderCell>
                    <TableHeaderCell>Second Name</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
            {
                user.map((user, index)=>{
                  if(user.role==="Viewer")
                  {
                    return(
                        <TableRow   key={index}  >
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.secondName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
                    )
                  }
                })
            }
            </TableBody>
        </Table>  
    </div>
    </>
  )
}
export default Dashboard;