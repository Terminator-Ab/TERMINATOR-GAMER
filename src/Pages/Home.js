import './Home.css'

function Home(){
    return(






        <div className="home" >
          <div className='text-name'>
             <h2 className="play"><span className='b'>B</span>ORN To <span className='p'>P</span>lay <span className='ter'>TERMINATOR</span></h2>
          </div>
        <div className='container-form'>
           <div className='form'>
           <h1>Register</h1>
           <form method='post' action=''>
            <div className='input-box'>
              <input type="text" placeholder="Enter your ID" name="name"  required/>
            </div>
            <div className='input-box'>
              <input type="email" placeholder='Email' name="email" required/>
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' name="password" required/>
            </div>
            <div className='input-box'>
              <input type="Password" placeholder='Confirm Password'  required/>
            </div>
           <button  className='submit'  type="button"><a href="#" >submit</a></button>
              
            <div className='signup-link'>
               Have an Account ? <a href="#">Login Here</a>
               </div>
           </form>  
    
           </div>   
        </div>
        
        
        
      </div>
    );
}

export default Home;