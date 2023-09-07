import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Input } from 'reactstrap';
import { editData, getAlluser } from '../api';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

export default function Home() {
const[userData,setUserData]=useState([])
const[firstName,setFirstName]=useState("")
const[lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const[dob,setDob]=useState("")
const[bloodGroup,setBloodGroup]=useState("")
const[gender,setGender]=useState("")
const[mobileNo,setMobileNo]=useState("")
const[marriageStatus,setMarriageStatus]=useState("")
const [data,setData]=useState({})
const [id,setId]=useState("")

const Alluser=async()=>{
    let response= await getAlluser()
    setUserData(response.data.data)
}

const editdata=(i)=>{
  setId(i._id)
  setData(i)
  setFirstName(i.firstName)
  setLastName(i.lastName)
setEmail(i.email)
setBloodGroup(i.bloodGroup)
setGender(i.gender)
setMobileNo(i.mobileNo)
setMarriageStatus(i.marriageStatus)
setDob(i.dob)
}
useEffect(()=>{
  Alluser()
},[])

console.log(id);
const handSubmit=async()=>{
if(firstName===data.firstName && lastName===data.lastName && bloodGroup===data.bloodGroup){
    alert("Change any field")
    console.log("ji");
}
else{
  let res = await editData ({
   firstName:firstName,
   lastName:lastName,
   dod:dob,
   gender:gender,
   marriageStatus:marriageStatus,
   bloodGroup:bloodGroup,
   mobileNo:mobileNo

  },id) 
  console.log(id);
  console.log("edit data",res);
}

}


  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                 {userData.map((i,index)=> <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    {i?.firstName}{i?.lastName}
                    <MDBCardText style={{cursor:"pointer"}} onClick={()=>editdata(i)}>EDIT</MDBCardText>
                  </MDBListGroupItem>)}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
           {firstName !=="" &&<MDBCard className="mb-4" style={{height: "100%"}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>FirstName</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="name" name="FirstName" id="FirstName" placeholder="FirstName"  value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>LastName</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="name" name="FirstName" id="FirstName" placeholder="FirstName" value={lastName}  onChange={(e)=>setLastName(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="email" name="Email" id="Email" placeholder="Email" disabled value={email} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>MobileNumber</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="number" name="MobileNumber" id="MobileNumber" placeholder="MobileNumber"  value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>DateOfBirth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="name" name="DateOfBirth" id="DateOfBirth" placeholder="DateOfBirth" value={dob} onChange={(e)=>setDob(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="name" name="Gender" id="Gender" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>MarriageStatus</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="name" name="MarriageStatus" id="MarriageStatus" placeholder="MarriageStatus" value={marriageStatus} onChange={(e)=>setMarriageStatus(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>BloodGroup</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Input type="name" name="BloodGroup" id="BloodGroup" placeholder="BloodGroup" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
                <MDBBtn style={{
                        width: "99px",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "28px",
                        marginLeft: "328px",
                        marginTop:"-29px"
                }}
                onClick={handSubmit}
                >submit</MDBBtn>
            </MDBCard>}           
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}