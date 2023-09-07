import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn,  MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Col, FormText, Input, Label, Row,FormGroup} from 'reactstrap';
// import { StudentLogin } from '../utility/ApiServices';
import { Toaster, toast } from 'react-hot-toast';
import { userLogin, userRes } from '../api';


function Login() {
  const [email, setEmail] = useState('');
  const [resEmail, setResEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [marriageStatus, setMarriageStatus] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [mobileNo, setMobileNo] = useState('');  
  const [password, setPassword] = useState('');
  const [respassword, setResPassword] = useState('');
  const [reF,setReF] = useState(false);
  const [errEmail,setErrEmail]=useState('')
  const [errPassword,setErrPassword]=useState('')
  const [errEmail1,setErrEmail1]=useState('')
  const [errPassword1,setErrPassword1]=useState('')  
  const [errfisrtname,setErrfirstname]=useState('')
  const [errlastname,setErrlastname]=useState('')
  const [errmobile,setErrmobile]=useState('')
  const [errdob,setErrdob]=useState('')
  const [errgender,setErrgender]=useState('')
  const [errbloodgroup,setErrbloodgroup]=useState('')
  const [errmarraige,setErrmarraige]=useState('')
const navigate =useNavigate()
const handleSubmit= async ()=>{
  let a= await userLogin({
    email,password
  })
  if(a?.ok){
    localStorage.setItem( "token",a.data.token)
    alert(a.data.message)
    navigate('/home')
  }
  if(!a.ok){
    alert("please  Register")
  }
 
//   let Data= await StudentLogin({
//   email: email,
//   password: password

// }) 
// if(!Data?.ok) { 
//   return toast.error("Invalid credentials")
// }
// else if (!email){
//   setErroremail("Please enter your email address")
// }else if (!password){
//   setErrorpassword("Please enter your password")
// }
//  else{
//   toast.success("Success")
//   localStorage.setItem("token", JSON.stringify(Data?.data?.token));
//    navigate('/Assignment')  
//       console.log(Data)
//  }
 

}
const reghandle=async()=>{
  if(!firstName){
    setErrfirstname("please fill this field")
  }
  if(!lastName){
    setErrlastname("please fill this field")
  }
  if(!resEmail){
    setErrEmail1("please fill this field")
  }
  if(!respassword){
    setErrPassword1("please fill this field")
  }
  if(!dob){
    setErrdob("please fill this field")
  }
  if(!gender){
    setErrgender("please fill this field")
  }
  if(!marriageStatus){
    setErrmarraige("please fill this field")
  }
  if(!bloodGroup){
    setErrbloodgroup("please fill this field")
  }
  if(!mobileNo){
    setErrmobile("please fill this field")
  }
  else {
    setErrfirstname("")
    let res= await userRes({
      firstName:firstName,
      lastName:lastName,
      dob:dob,
      gender:gender,  
      password:respassword,
      email:resEmail,
      bloodGroup:bloodGroup,
      marriageStatus:marriageStatus,
      mobileNo:mobileNo
    })
    if(res?.ok){
      setReF(!reF)
    }
  }


}

  return (
    <>
    
    <div className='area'   >
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>   
        {/* <MDBCol col='10' md='6' >
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Sample image" />
        </MDBCol> */}
        
        <div  style={{marginTop:"150px"}}>
        {/* <div  style={{backgroundColor:"black",borderRadius:"10px",marginTop:"80px"}}> */}
          <Row >
          <Col xs="6"    >
            <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg' alt='Gokila'style={{height:"85%",width:"85%"}} ></img>
            </Col>
           {!reF ?
           <Col xs="6">
          <h4 style={{fontWeight:"bold",fontSize:"50px",marginTop:"20px",color:"black"}}>Login To Your Account !!!</h4>
          <Label style={{color:"black"}}>Email</Label>
          <Col sm={10}>
          <Input  type="email" name="email" id="Email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          {errEmail ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errEmail}
                  </FormText>
                ) : null}
                </Col>
          <Label style={{color:"Black"}} >Password</Label>
          <Col sm={10}>
          <Input  type="password" name="password" id="Password" placeholder="password " value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          {errPassword ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errPassword}
                  </FormText>
                ) : null}
            <a href="!#" style={{color:"Black"}}>Forgot password?</a>
            <p style={{color:"Black"}}>Don't you have an Account ?  <a style={{color:"Blue",cursor:"pointer"}} onClick={()=>setReF(!reF)}>Click Here</a> </p>
            
                </Col>
          {/* <div className="d-flex justify-content-between mb-3">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div> */}

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-4 px-5" size='lg' color='white' onClick={handleSubmit}>Login</MDBBtn>
            
             
            
          </div>
          </Col>
          :
          <Col xs="6">
          <h4 style={{fontWeight:"bold",fontSize:"50px",marginTop:"-90px",color:"Black"}}>Register To Your Account !!!</h4>
          <Row>
       <Col md={6}>
       <FormGroup>
       <Label style={{color:"black"}}>FirstName:</Label>
          <Input  type="Name" name="FirstName" id="FirstName" placeholder="FirstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
          {errfisrtname ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errfisrtname}
                  </FormText>
                ) : null}
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
      <Label style={{color:"black"}}>LastName</Label>
          <Input  type="LastName" name="LastName" id="LastName" placeholder="LastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
          {errlastname ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errlastname}
                  </FormText>
                ) : null}
      </FormGroup>
      </Col>
      </Row>
      <Row>
       <Col md={6}>
       <FormGroup>
       <Label style={{color:"black"}}>Email</Label>
          <Input  type="email" name="email" id="Email" placeholder="Email" value={resEmail} onChange={(e)=>{setResEmail(e.target.value)}} />
          {errEmail1 ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",       
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errEmail1}
                  </FormText>
                ) : null}
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
      <Label style={{color:"black"}}>Password</Label>
          <Input  type="password" name="password" id="password" placeholder="password" value={respassword} onChange={(e)=>{setResPassword(e.target.value)}} />
          {errPassword1 ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errPassword1}
                  </FormText>
                ) : null}
      </FormGroup>
      </Col>
      </Row>
          
      <Row>
       <Col md={6}>
       <FormGroup>         
          <Label style={{color:"black"}}>MobileNumber</Label>
          <Input  type="Number" name="No" id="no" placeholder="Mobilenumber" value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}} />
          {errmobile ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errmobile}
                  </FormText>
                ) : null}
       </FormGroup>  
          </Col>
          <Col md={6}>
       <FormGroup>
          <Label style={{color:"black"}}>DateOfBirth</Label>
          <Input  type="number" name="email" id="Email" placeholder="DateOfBirth" value={dob} onChange={(e)=>{setDob(e.target.value)}} />
          {errdob ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errdob}
                  </FormText>
                ) : null}
                </FormGroup>
                </Col>
            </Row>
            <Row>
       <Col md={6}>
       <FormGroup>  
          <Label style={{color:"black"}}>Gender</Label>
          <Input  type="gender" name="email" id="Email" placeholder="Gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} />
          {errgender ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errgender}
                  </FormText>
                ) : null}  
       </FormGroup>  
       </Col>
       <Col>
       <FormGroup>  
          <Label style={{color:"black"}}>MarriageStatus</Label>
          <Input  type="name" name="MarriageStatus" id="MarriageStatus" placeholder="MarriageStatus " value={marriageStatus} onChange={(e)=>{setMarriageStatus(e.target.value)}} />
          {errmarraige ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errmarraige}
                  </FormText>
                ) : null}
               </FormGroup>  
              </Col>
              </Row>
          <Label style={{color:"black"}}>BloodGroup</Label>
          <Col sm={12}>
          <Input  type="name" name="bloodGroup" id="bloodGroup" placeholder="bloodGroup " value={bloodGroup} onChange={(e)=>{setBloodGroup(e.target.value)}} />
          {errbloodgroup ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errbloodgroup}
                  </FormText>
                ) : null}
                 
            <a href="!#" style={{color:"black"}}>Forgot password?</a>
            </Col>
          {/* <div className="d-flex justify-content-between mb-3">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div> */}

          <div className='text-center text-md-start mt-4 pt-2'>
            {/* <MDBBtn className="mb-4 px-5" size='lg' color='white' onClick={handleSubmit}>Login</MDBBtn> */}

            <MDBBtn className="mb-4 px-5" size='lg' color='white' onClick={reghandle}>submit</MDBBtn>            
          </div>
          </Col>}
          </Row>
        </div>     
     <Toaster/>
    
    </ul>
    </div>
    </>
  );
}

export default Login;