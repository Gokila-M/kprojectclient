import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [gender,setGender]=useState('')
    const [dob,setDob]=useState('')
    const [marraigestatus,setMarraigestatus]=useState('')
    const [bloodgroup,setBloodgroup]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
            <h1>Create Your Own Account !</h1>
        <MDBInput wrapperClass='mb-4' label='First Name' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Last Name' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Gender' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Date Of Birth' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='marriageStatus' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='bloodGroup' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div> */}
          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn> */}
          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn> */}

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;