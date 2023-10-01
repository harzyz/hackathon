import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './registerpage.css'
import img01 from '../../public/Images/regImg.png'
import img02 from '../../public/Images/starReg2.png'
import img03 from '../../public/Images/starReg3.png'
import img04 from '../../public/Images/starReg.png'
import img05 from '../../public/Images/ladyWalking.png'
import img06 from '../../public/Images/manWalking.png'
import img07 from '../../public/Images/Line 9.png'
import img08 from '../../public/Images/successful-man-3025713-2526911 1.png'
import img09 from '../../public/Images/successfully-done-5108472-4288033 1.png'

function RegisterPage() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('')
  const [formData, setFormData] = useState({
    teamName: '',
    phone: '',
    email: '',
    projectTopic: '',
    category: '',
    groupSize: '',
    privacyPolicyAccepted: false,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'select-one') {
      setSelectedOption(value);
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      email: formData.email,
      team_name: formData.teamName,
      phone_number: formData.phone,
      project_topic: formData.projectTopic,
      category: selectedOption, 
      group_size: formData.groupSize,
      privacy_policy_accepted: formData.privacyPolicyAccepted,
    };

    fetch('https://backend.getlinked.ai/hackathon/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData({
          teamName: '',
          phone: '',
          email: '',
          projectTopic: '',
          category: '', 
          groupSize: '',
          privacyPolicyAccepted: false,
        });

        setSelectedOption('');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
    });
    setIsModalVisible(true);
  };
  
  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const apiUrl = 'https://backend.getlinked.ai/hackathon/categories-list'; 

    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setOptions(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='reg'>
      <div className="glareR"></div>
      <div className="glareR1"></div>
      <div className="registeration">
        <div className='regImg'>
          <img className='starReg2' src={img02} alt="" />
          <img className='starReg3' src={img03} alt="" />
          <img className='starReg4' src={img04} alt="" />
          <img width={'90%'} src={img01} alt="" />
        </div>
        <div className="regForm">
          <div className='formWrapper'>
            <img className='starReg' src={img04} alt="" />
            <div className="formContainer">
              <h1 className="subTitle3 linked">Register</h1>
              <span className='movement'>
                <p className='beTheMov'>Be part of this movement!</p>
                <span className='movement2'>
                  <span className='movement3'>
                    <img src={img05} alt="" />
                    <img src={img06} alt="" />
                  </span>
                  <img src={img07} alt="" />
                </span>
              </span>
              <h1 className='createAcc'>CREATE YOUR ACCOUNT</h1>
              <form onSubmit={handleSubmit}>
                <span className='formLayout'>
                  <div className='formControl'>
                    <label>Team’s Name</label>
                    <input 
                    type='text' 
                    placeholder='Enter the name of your group'
                    name="teamName"
                    value={formData.teamName}/>
                  </div>
                  <div className='formControl'>
                    <label >Phone</label>
                    <input 
                    type='number' 
                    placeholder='Enter your phone number'
                    name="teamName"
                    value={formData.teamName}
                    />
                  </div>  
                </span>
                <span className="formLayout">
                  <div className='formControl'>
                    <label>Email</label>
                    <input 
                    type='email' 
                    placeholder='Enter your email address'
                    name="teamName"
                    value={formData.teamName}/>
                  </div>
                  <div className='formControl'>
                    <label>Project Topic</label>
                    <input 
                    type='text' 
                    placeholder='What is your group project topic'
                    name="teamName"
                    value={formData.teamName}/>
                  </div>
                </span>
                <span className="formLayout">
                <div className='formControl'>
                <label>Category</label>
                <select
                  name="category"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option disabled value=''>Select your category</option>
                  {options.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                </div>
                  <div className='formControl'>
                    <label>Group Size</label>
                    <select>
                      <option disabled selected>Select</option>
                      <option>...</option>
                    </select>
                  </div>
                </span>
                <p className='instruction'>Please review your registration details before submitting</p>
                <div>
                  <label className='formCheckbox'>
                    <input 
                    type="checkbox"
                    name="privacyPolicyAccepted"
                    checked={formData.privacyPolicyAccepted}
                    onChange={handleChange} />
                    I agreed with the event terms and conditions  and privacy policy
                    <span className="checkmark"></span>
                  </label>
                </div>
                <span className='btnWrapperR'><button type='submit' className='registerBtnR'>Register Now</button></span>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <span>
              <img className='modalPic2' src={img08} alt="Modal Image" />
              <img className='modalPic' src={img09} alt="Modal Image" />
            </span>
            <span className='marg'></span>
            <h1 className='createAcc'>Congratulations</h1>
            <h1 className='createAcc'>you have successfully Registered!</h1>
            <p>Yes, it was easy and you did it! check your mail box for next step</p>
            <Link className='bigBtn' to='/'>
              <button className="registerBtn bigBtn">
                Back
              </button>
            </Link>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default RegisterPage
